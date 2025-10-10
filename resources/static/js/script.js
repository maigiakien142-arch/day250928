// 全局变量（图表实例、当前服务器ID、定时更新器）
let performanceChart = null;
let currentServerId = null;
let updateInterval = null;

// DOM加载完成后初始化（绑定核心逻辑）
document.addEventListener('DOMContentLoaded', function() {
    loadServerList(); // 初始加载服务器列表
});

/**
 * 加载服务器列表（从后端API获取）
 */
function loadServerList() {
    fetch('/fsray/monitor/servers')
        .then(response => response.json())
        .then(servers => {
            const serverListElement = document.getElementById('server-list');
            serverListElement.innerHTML = '';

            // 无服务器时显示提示
            if (servers.length === 0) {
                serverListElement.innerHTML = '<div class="text-center text-gray-500 py-8">未检测到任何远程服务器</div>';
                return;
            }

            // 遍历生成服务器卡片
            servers.forEach(server => {
                const isOnline = Date.now() / 1000 - server.last_seen < 300; // 5分钟内在线
                const memoryTotal = (server.memory_total / (1024 * 1024 * 1024)).toFixed(2); // 内存转GB

                // 创建卡片元素
                const serverCard = document.createElement('div');
                serverCard.className = 'bg-white rounded-lg p-4 card-shadow hover:shadow-lg transition-shadow cursor-pointer';
                serverCard.innerHTML = `
                    <div class="flex justify-between items-start mb-3">
                        <h3 class="font-semibold">${server.server_id}</h3>
                        <span class="w-3 h-3 rounded-full ${isOnline ? 'status-online' : 'status-offline'}"></span>
                    </div>
                    <div class="text-sm text-gray-600 space-y-1">
                        <p><i class="fa fa-microchip mr-1"></i> CPU核心: ${server.cpu_cores}</p>
                        <p><i class="fa fa-memory mr-1"></i> 总内存: ${memoryTotal} GB</p>
                        <p><i class="fa fa-desktop mr-1"></i> GPU数量: ${server.gpu_count}</p>
                        <p class="text-gray-500 mt-2"><i class="fa fa-clock-o mr-1"></i> 最后在线: ${formatTime(server.last_seen)}</p>
                    </div>
                `;

                // 卡片点击事件：显示该服务器的监控数据
                serverCard.addEventListener('click', () => {
                    showServerMonitor(server.server_id);
                });

                serverListElement.appendChild(serverCard);
            });
        })
        .catch(error => {
            console.error('加载远程服务器列表失败:', error);
            document.getElementById('server-list').innerHTML = '<div class="text-center text-red-500 py-8">加载远程服务器列表失败</div>';
        });
}

/**
 * 显示指定服务器的监控数据（显示图表区+加载历史数据）
 * @param {string} serverId - 服务器唯一标识
 */
function showServerMonitor(serverId) {
    currentServerId = serverId;
    document.getElementById('current-server-name').textContent = serverId; // 更新标题
    document.getElementById('monitor-charts').classList.remove('hidden'); // 显示图表区

    // 加载历史数据并绘制图表
    loadHistoryData(serverId);

    // 清除旧定时器，创建新定时器（10秒刷新一次）
    if (updateInterval) clearInterval(updateInterval);
    updateInterval = setInterval(() => loadHistoryData(serverId), 10000);
}

/**
 * 加载指定服务器的历史性能数据（从后端API获取）
 * @param {string} serverId - 服务器唯一标识
 */
function loadHistoryData(serverId) {
    fetch(`/fsray/monitor/history/${serverId}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) return; // 无数据时不处理

            // 更新核心指标卡片（显示最新数据）
            const latestData = data[data.length - 1];
            document.getElementById('cpu-usage').textContent = `${latestData.cpu_usage.toFixed(1)}%`;
            document.getElementById('memory-usage').textContent = `${latestData.memory_usage.toFixed(1)}%`;

            // GPU数据特殊处理（无数据时显示N/A）
            const gpuElement = document.getElementById('gpu-usage');
            gpuElement.textContent = latestData.gpu_usage !== null && !isNaN(latestData.gpu_usage)
                ? `${latestData.gpu_usage.toFixed(1)}%`
                : 'N/A';

            // 绘制性能趋势图表
            drawPerformanceChart(data);
        })
        .catch(error => console.error('加载历史数据失败:', error));
}

/**
 * 绘制性能趋势折线图（基于Chart.js）
 * @param {Array} data - 历史性能数据（含timestamp、cpu_usage等）
 */
function drawPerformanceChart(data) {
    const ctx = document.getElementById('performance-chart').getContext('2d');

    // 销毁旧图表（避免重复渲染）
    if (performanceChart) {
        performanceChart.destroy();
    }

    // 处理数据：格式化时间标签和各指标数据
    const labels = data.map(item => new Date(item.timestamp * 1000).toLocaleTimeString()); // 时间戳转本地时间
    const cpuData = data.map(item => item.cpu_usage);
    const memoryData = data.map(item => item.memory_usage);
    const gpuData = data.map(item => item.gpu_usage || null); // GPU无数据时设为null

    // 创建新图表
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                // CPU使用率数据集
                {
                    label: 'CPU 使用率 (%)',
                    data: cpuData,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.3, // 曲线平滑度
                    fill: true // 填充曲线下方区域
                },
                // 内存使用率数据集
                {
                    label: '内存 使用率 (%)',
                    data: memoryData,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                // GPU使用率数据集（无数据时隐藏）
                {
                    label: 'GPU 使用率 (%)',
                    data: gpuData,
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    tension: 0.3,
                    fill: true,
                    hidden: gpuData.every(item => item === null) // 全为null时隐藏该数据集
                }
            ]
        },
        options: {
            responsive: true, // 响应式布局（适应不同屏幕）
            maintainAspectRatio: false, // 不强制保持宽高比（使用容器固定高度）
            plugins: {
                legend: { position: 'top' }, // 图例放在顶部
                tooltip: { mode: 'index', intersect: false } // 鼠标悬停时显示所有数据集的同时间点数据
            },
            scales: {
                y: {
                    beginAtZero: true, // Y轴从0开始
                    max: 100, // Y轴最大值100（百分比场景）
                    title: { display: true, text: '使用率 (%)' } // Y轴标题
                }
            },
            interaction: {
                mode: 'nearest', // 交互模式：最近点
                axis: 'x', // 只在X轴方向交互
                intersect: false
            }
        }
    });
}

/**
 * 格式化时间戳（显示为"刚刚"/"N分钟前"/"N小时前"/具体时间）
 * @param {number} timestamp - 时间戳（秒级）
 * @returns {string} 格式化后的时间文本
 */
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const diffMs = Date.now() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));

    if (diffMins < 1) return '刚刚';
    if (diffMins < 60) return `${diffMins}分钟前`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}小时前`;

    // 超过24小时时显示具体日期时间
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

/**
 * 页面关闭前清除定时器（避免内存泄漏）
 */
window.addEventListener('beforeunload', () => {
    if (updateInterval) clearInterval(updateInterval);
});