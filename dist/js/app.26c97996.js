(function () {
    "use strict";
    var e = {
        1119: function (e, t, a) {
            var s = a(5130), r = a(6768);
            const l = {key: 0};

            function o(e, t, a, s, o, n) {
                const i = (0, r.g2)("LoginPage"), u = (0, r.g2)("RegisterPage"), c = (0, r.g2)("ResetPasswordPage"),
                    d = (0, r.g2)("ResourceRequest"), p = (0, r.g2)("ResourceMonitoring"),
                    g = (0, r.g2)("ServerManagement"), v = (0, r.g2)("AdminRequests"), m = (0, r.g2)("Navigation");
                return (0, r.uX)(), (0, r.CE)("div", null, ["login" === o.currentPage || "register" === o.currentPage || "reset" === o.currentPage ? ((0, r.uX)(), (0, r.CE)("div", l, ["login" === o.currentPage ? ((0, r.uX)(), (0, r.Wv)(i, {
                    key: 0,
                    onGotoRegister: n.goToRegister,
                    onGotoReset: n.goToReset,
                    onLoginSuccess: n.handleLoginSuccess
                }, null, 8, ["onGotoRegister", "onGotoReset", "onLoginSuccess"])) : "register" === o.currentPage ? ((0, r.uX)(), (0, r.Wv)(u, {
                    key: 1,
                    onGotoLogin: n.goToLogin
                }, null, 8, ["onGotoLogin"])) : "reset" === o.currentPage ? ((0, r.uX)(), (0, r.Wv)(c, {
                    key: 2,
                    onGotoLogin: n.goToLogin
                }, null, 8, ["onGotoLogin"])) : (0, r.Q3)("", !0)])) : ((0, r.uX)(), (0, r.Wv)(m, {
                    key: 1,
                    "current-module": o.currentModule,
                    username: o.username,
                    "user-role": o.userRole,
                    onNavigate: n.handleNavigate,
                    onLogout: n.handleLogout
                }, {
                    default: (0, r.k6)(() => ["resource" === o.currentModule || "allRequests" === o.currentModule ? ((0, r.uX)(), (0, r.Wv)(d, {
                        key: 0,
                        "user-role": o.userRole
                    }, null, 8, ["user-role"])) : "monitor" === o.currentModule ? ((0, r.uX)(), (0, r.Wv)(p, {
                        key: 1,
                        "user-role": o.userRole
                    }, null, 8, ["user-role"])) : "servers" === o.currentModule ? ((0, r.uX)(), (0, r.Wv)(g, {
                        key: 2,
                        "user-role": o.userRole
                    }, null, 8, ["user-role"])) : "adminRequests" === o.currentModule ? ((0, r.uX)(), (0, r.Wv)(v, {
                        key: 3,
                        "user-role": o.userRole
                    }, null, 8, ["user-role"])) : (0, r.Q3)("", !0)]), _: 1
                }, 8, ["current-module", "username", "user-role", "onNavigate", "onLogout"]))])
            }

            var n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbMAAAExCAYAAAD2lUxUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0VDQzlEOTRBNTg3MTFFNUFERjJBMzJFOUM1RUU0N0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzBBNzI1MENBNTg4MTFFNUFERjJBMzJFOUM1RUU0N0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRUNDOUQ5MkE1ODcxMUU1QURGMkEzMkU5QzVFRTQ3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRUNDOUQ5M0E1ODcxMUU1QURGMkEzMkU5QzVFRTQ3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlsvhJcAABORSURBVHja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";
            const i = {class: "auth-container"}, u = {class: "auth-box"}, c = {class: "form-group"},
                d = {class: "input-wrapper phone-input-wrapper"}, p = {class: "form-group"},
                g = {class: "input-wrapper password-input-wrapper"}, v = {class: "form-group"},
                m = {class: "input-wrapper role-select-wrapper"}, k = ["disabled"], L = {key: 0}, h = {key: 1},
                f = {class: "alternative-login"}, y = {class: "quick-register"};

            function b(e, t, a, l, o, b) {
                return (0, r.uX)(), (0, r.CE)("div", i, [t[12] || (t[12] = (0, r.Lk)("div", {class: "auth-header"}, [(0, r.Lk)("div", {class: "header-content"}, [(0, r.Lk)("img", {
                    src: n,
                    alt: "服务器logo",
                    class: "logo"
                }), (0, r.Lk)("h1", null, "服务器资源监测管理系统")])], -1)), (0, r.Lk)("div", u, [t[11] || (t[11] = (0, r.Lk)("h2", null, "账号密码登录", -1)), (0, r.Lk)("form", {
                    onSubmit: t[6] || (t[6] = (0, s.D$)((...e) => b.handleLogin && b.handleLogin(...e), ["prevent"])),
                    class: "auth-form"
                }, [(0, r.Lk)("div", c, [(0, r.Lk)("div", d, [(0, r.bo)((0, r.Lk)("select", {
                    "onUpdate:modelValue": t[0] || (t[0] = e => o.countryCode = e),
                    class: "country-code"
                }, [...t[8] || (t[8] = [(0, r.Lk)("option", {value: "+86"}, "+86", -1)])], 512), [[s.u1, o.countryCode]]), (0, r.bo)((0, r.Lk)("input", {
                    type: "tel",
                    "onUpdate:modelValue": t[1] || (t[1] = e => o.phone = e),
                    placeholder: "请输入手机号",
                    class: "phone-input",
                    required: "",
                    pattern: "[0-9]{11}"
                }, null, 512), [[s.Jo, o.phone]])])]), (0, r.Lk)("div", p, [(0, r.Lk)("div", g, [(0, r.bo)((0, r.Lk)("input", {
                    type: "password",
                    "onUpdate:modelValue": t[2] || (t[2] = e => o.password = e),
                    placeholder: "请输入密码",
                    class: "password-input",
                    required: ""
                }, null, 512), [[s.Jo, o.password]])]), (0, r.Lk)("button", {
                    type: "button",
                    class: "forgot-password",
                    onClick: t[3] || (t[3] = (...e) => b.handleForgotPassword && b.handleForgotPassword(...e))
                }, "忘记密码?")]), (0, r.Lk)("div", v, [(0, r.Lk)("div", m, [(0, r.bo)((0, r.Lk)("select", {
                    "onUpdate:modelValue": t[4] || (t[4] = e => o.userRole = e),
                    class: "role-select",
                    required: ""
                }, [...t[9] || (t[9] = [(0, r.Lk)("option", {value: ""}, "请选择登录角色", -1), (0, r.Lk)("option", {value: "user"}, "普通用户", -1), (0, r.Lk)("option", {value: "admin"}, "管理员", -1)])], 512), [[s.u1, o.userRole]])])]), (0, r.Lk)("button", {
                    type: "submit",
                    class: "primary-button login-button",
                    disabled: o.isLoading
                }, [o.isLoading ? ((0, r.uX)(), (0, r.CE)("span", h, "登录中...")) : ((0, r.uX)(), (0, r.CE)("span", L, "登录"))], 8, k), (0, r.Lk)("div", f, [(0, r.Lk)("button", {
                    type: "button",
                    class: "secondary-button verify-login",
                    onClick: t[5] || (t[5] = (...t) => e.switchToVerifyLogin && e.switchToVerifyLogin(...t))
                }, "验证码登录")])], 32), (0, r.Lk)("div", y, [t[10] || (t[10] = (0, r.Lk)("span", null, "还没有账号？", -1)), (0, r.Lk)("button", {
                    type: "button",
                    class: "link-button register-button",
                    onClick: t[7] || (t[7] = (...e) => b.handleRegister && b.handleRegister(...e))
                }, "快速注册")])])])
            }

            var C = {
                name: "LoginPage", data() {
                    return {countryCode: "+86", phone: "", password: "", userRole: "", isLoading: !1, isVerifyLogin: !1}
                }, methods: {
                    async handleLogin() {
                        if (this.phone && this.password && this.userRole) if (11 === this.phone.length) {
                            this.isLoading = !0;
                            try {
                                await new Promise(e => setTimeout(e, 1500)), console.log("登录成功:", {
                                    countryCode: this.countryCode,
                                    phone: this.phone,
                                    password: this.password,
                                    userRole: this.userRole
                                }), alert("登录成功！"), this.$emit("login-success", {
                                    username: this.phone,
                                    role: this.userRole
                                })
                            } catch (e) {
                                console.error("登录失败:", e), alert("登录失败，请重试")
                            } finally {
                                this.isLoading = !1
                            }
                        } else alert("请输入正确的手机号码"); else alert("请填写完整的登录信息并选择角色")
                    }, handleForgotPassword() {
                        this.$emit("goto-reset")
                    }, handleRegister() {
                        this.$emit("goto-register")
                    }
                }
            }, w = a(1241);
            const A = (0, w.A)(C, [["render", b], ["__scopeId", "data-v-40a85894"]]);
            var T = A;
            const U = {class: "auth-container"}, P = {class: "auth-box"}, R = {class: "form-group"},
                S = {class: "input-wrapper phone-input-wrapper"}, D = {class: "form-group"},
                M = {class: "input-wrapper password-input-wrapper"}, q = ["disabled"], G = {key: 0}, I = {key: 1},
                x = {class: "agreement"}, E = {class: "quick-register"};

            function z(e, t, a, l, o, i) {
                return (0, r.uX)(), (0, r.CE)("div", U, [t[9] || (t[9] = (0, r.Lk)("div", {class: "auth-header"}, [(0, r.Lk)("div", {class: "header-content"}, [(0, r.Lk)("img", {
                    src: n,
                    alt: "服务器logo",
                    class: "logo"
                }), (0, r.Lk)("h1", null, "服务器资源监测管理系统")])], -1)), (0, r.Lk)("div", P, [t[8] || (t[8] = (0, r.Lk)("h2", null, "注册", -1)), (0, r.Lk)("form", {
                    onSubmit: t[4] || (t[4] = (0, s.D$)((...e) => i.handleRegister && i.handleRegister(...e), ["prevent"])),
                    class: "auth-form"
                }, [(0, r.Lk)("div", R, [(0, r.Lk)("div", S, [(0, r.bo)((0, r.Lk)("select", {
                    "onUpdate:modelValue": t[0] || (t[0] = e => o.countryCode = e),
                    class: "form-select country-code"
                }, [...t[6] || (t[6] = [(0, r.Lk)("option", {value: "+86"}, "+86", -1)])], 512), [[s.u1, o.countryCode]]), (0, r.bo)((0, r.Lk)("input", {
                    type: "tel",
                    "onUpdate:modelValue": t[1] || (t[1] = e => o.phone = e),
                    placeholder: "请输入手机号",
                    class: "form-input phone-input",
                    required: "",
                    pattern: "[0-9]{11}"
                }, null, 512), [[s.Jo, o.phone]])])]), (0, r.Lk)("div", D, [(0, r.Lk)("div", M, [(0, r.bo)((0, r.Lk)("input", {
                    type: "password",
                    "onUpdate:modelValue": t[2] || (t[2] = e => o.password = e),
                    placeholder: "请设置密码",
                    class: "form-input password-input",
                    required: ""
                }, null, 512), [[s.Jo, o.password]])])]), (0, r.Lk)("button", {
                    type: "submit",
                    class: "primary-button login-button",
                    disabled: o.isLoading
                }, [o.isLoading ? ((0, r.uX)(), (0, r.CE)("span", I, "注册中...")) : ((0, r.uX)(), (0, r.CE)("span", G, "快速注册"))], 8, q), (0, r.Lk)("div", x, [t[7] || (t[7] = (0, r.Lk)("span", null, '点击"快速注册"，即代表同意', -1)), (0, r.Lk)("button", {
                    type: "button",
                    class: "link-button agreement-link",
                    onClick: t[3] || (t[3] = (...e) => i.showAgreement && i.showAgreement(...e))
                }, "《用户协议》")])], 32), (0, r.Lk)("div", E, [(0, r.Lk)("button", {
                    type: "button",
                    class: "link-button register-button",
                    onClick: t[5] || (t[5] = (...e) => i.goToLogin && i.goToLogin(...e))
                }, "需要登录？")])])])
            }

            var X = {
                name: "RegisterPage", data() {
                    return {countryCode: "+86", phone: "", password: "", isLoading: !1}
                }, methods: {
                    async handleRegister() {
                        if (this.phone && this.password) if (11 === this.phone.length) {
                            this.isLoading = !0;
                            try {
                                await new Promise(e => setTimeout(e, 1500)), console.log("注册成功:", {
                                    countryCode: this.countryCode,
                                    phone: this.phone,
                                    password: this.password
                                }), alert("注册成功！请登录"), this.goToLogin()
                            } catch (e) {
                                console.error("注册失败:", e), alert("注册失败，请重试")
                            } finally {
                                this.isLoading = !1
                            }
                        } else alert("请输入正确的手机号码"); else alert("请填写完整的注册信息")
                    }, showAgreement() {
                        alert("用户协议内容正在加载...")
                    }, goToLogin() {
                        this.$emit("goto-login")
                    }
                }
            };
            const Q = (0, w.A)(X, [["render", z], ["__scopeId", "data-v-241a2a1c"]]);
            var V = Q;
            const F = {class: "auth-container"}, Z = {class: "auth-box"}, J = {class: "form-group"},
                W = {class: "input-wrapper phone-input-wrapper"}, B = {class: "form-group"},
                O = {class: "input-wrapper password-input-wrapper"}, j = {class: "form-group"},
                Y = {class: "input-wrapper password-input-wrapper"}, N = ["disabled"], K = {key: 0}, _ = {key: 1},
                H = {class: "quick-register"};

            function $(e, t, a, l, o, i) {
                return (0, r.uX)(), (0, r.CE)("div", F, [t[8] || (t[8] = (0, r.Lk)("div", {class: "auth-header"}, [(0, r.Lk)("div", {class: "header-content"}, [(0, r.Lk)("img", {
                    src: n,
                    alt: "服务器logo",
                    class: "logo"
                }), (0, r.Lk)("h1", null, "服务器资源监测管理系统")])], -1)), (0, r.Lk)("div", Z, [t[7] || (t[7] = (0, r.Lk)("h2", null, "重置密码", -1)), (0, r.Lk)("form", {
                    onSubmit: t[4] || (t[4] = (0, s.D$)((...e) => i.handleResetPassword && i.handleResetPassword(...e), ["prevent"])),
                    class: "auth-form"
                }, [(0, r.Lk)("div", J, [(0, r.Lk)("div", W, [(0, r.bo)((0, r.Lk)("select", {
                    "onUpdate:modelValue": t[0] || (t[0] = e => o.countryCode = e),
                    class: "form-select country-code"
                }, [...t[6] || (t[6] = [(0, r.Lk)("option", {value: "+86"}, "+86", -1), (0, r.Lk)("option", {value: "+1"}, "+1", -1), (0, r.Lk)("option", {value: "+44"}, "+44", -1)])], 512), [[s.u1, o.countryCode]]), (0, r.bo)((0, r.Lk)("input", {
                    type: "tel",
                    "onUpdate:modelValue": t[1] || (t[1] = e => o.phone = e),
                    placeholder: "请输入手机号",
                    class: "form-input phone-input",
                    required: "",
                    pattern: "[0-9]{11}"
                }, null, 512), [[s.Jo, o.phone]])])]), (0, r.Lk)("div", B, [(0, r.Lk)("div", O, [(0, r.bo)((0, r.Lk)("input", {
                    type: "password",
                    "onUpdate:modelValue": t[2] || (t[2] = e => o.newPassword = e),
                    placeholder: "输入新密码",
                    class: "form-input password-input",
                    required: ""
                }, null, 512), [[s.Jo, o.newPassword]])])]), (0, r.Lk)("div", j, [(0, r.Lk)("div", Y, [(0, r.bo)((0, r.Lk)("input", {
                    type: "password",
                    "onUpdate:modelValue": t[3] || (t[3] = e => o.confirmPassword = e),
                    placeholder: "确认新密码",
                    class: "form-input password-input",
                    required: ""
                }, null, 512), [[s.Jo, o.confirmPassword]])])]), (0, r.Lk)("button", {
                    type: "submit",
                    class: "primary-button login-button",
                    disabled: o.isLoading
                }, [o.isLoading ? ((0, r.uX)(), (0, r.CE)("span", _, "重置中...")) : ((0, r.uX)(), (0, r.CE)("span", K, "确定重置"))], 8, N)], 32), (0, r.Lk)("div", H, [(0, r.Lk)("button", {
                    type: "button",
                    class: "link-button register-button",
                    onClick: t[5] || (t[5] = (...e) => i.goToLogin && i.goToLogin(...e))
                }, "需要登录？")])])])
            }

            var ee = {
                name: "ResetPasswordPage", data() {
                    return {countryCode: "+86", phone: "", newPassword: "", confirmPassword: "", isLoading: !1}
                }, methods: {
                    async handleResetPassword() {
                        if (this.phone && this.newPassword && this.confirmPassword) if (11 === this.phone.length) if (this.newPassword.length < 6) alert("密码长度不能少于6位"); else if (this.newPassword === this.confirmPassword) {
                            this.isLoading = !0;
                            try {
                                await new Promise(e => setTimeout(e, 1500)), console.log("密码重置成功:", {
                                    countryCode: this.countryCode,
                                    phone: this.phone,
                                    newPassword: this.newPassword
                                }), alert("密码重置成功！请使用新密码登录"), this.goToLogin()
                            } catch (e) {
                                console.error("密码重置失败:", e), alert("密码重置失败，请重试")
                            } finally {
                                this.isLoading = !1
                            }
                        } else alert("两次输入的密码不一致"); else alert("请输入正确的手机号码"); else alert("请填写完整的重置信息")
                    }, goToLogin() {
                        this.$emit("goto-login")
                    }
                }
            };
            const te = (0, w.A)(ee, [["render", $], ["__scopeId", "data-v-42eec255"]]);
            var ae = te, se = a(4232);
            const re = {class: "navigation-container"}, le = {class: "sidebar"}, oe = {class: "nav-menu"},
                ne = {class: "main-content"};

            function ie(e, t, a, s, l, o) {
                return (0, r.uX)(), (0, r.CE)("div", re, [(0, r.Lk)("div", le, [t[8] || (t[8] = (0, r.Lk)("div", {class: "sidebar-header"}, [(0, r.Lk)("img", {
                    src: n,
                    alt: "服务器logo",
                    class: "sidebar-logo"
                }), (0, r.Lk)("h1", {class: "sidebar-title"}, "服务器资源监测管理系统")], -1)), (0, r.Lk)("ul", oe, ["user" === a.userRole ? ((0, r.uX)(), (0, r.CE)("li", {
                    key: 0,
                    class: (0, se.C4)(["nav-item", {active: "resource" === a.currentModule}]),
                    onClick: t[0] || (t[0] = e => o.navigateTo("resource"))
                }, [...t[4] || (t[4] = [(0, r.Lk)("i", {class: "icon"}, "📋", -1), (0, r.Lk)("span", null, "资源申请", -1)])], 2)) : (0, r.Q3)("", !0), "user" === a.userRole ? ((0, r.uX)(), (0, r.CE)("li", {
                    key: 1,
                    class: (0, se.C4)(["nav-item", {active: "servers" === a.currentModule}]),
                    onClick: t[1] || (t[1] = e => o.navigateTo("servers"))
                }, [...t[5] || (t[5] = [(0, r.Lk)("i", {class: "icon"}, "🖥️", -1), (0, r.Lk)("span", null, "服务器列表", -1)])], 2)) : (0, r.Q3)("", !0), "admin" === a.userRole ? ((0, r.uX)(), (0, r.CE)("li", {
                    key: 2,
                    class: (0, se.C4)(["nav-item", {active: "monitor" === a.currentModule}]),
                    onClick: t[2] || (t[2] = e => o.navigateTo("monitor"))
                }, [...t[6] || (t[6] = [(0, r.Lk)("i", {class: "icon"}, "📈", -1), (0, r.Lk)("span", null, "服务器监控", -1)])], 2)) : (0, r.Q3)("", !0), "admin" === a.userRole ? ((0, r.uX)(), (0, r.CE)("li", {
                    key: 3,
                    class: (0, se.C4)(["nav-item", {active: "allRequests" === a.currentModule}]),
                    onClick: t[3] || (t[3] = e => o.navigateTo("allRequests"))
                }, [...t[7] || (t[7] = [(0, r.Lk)("i", {class: "icon"}, "📋", -1), (0, r.Lk)("span", null, "申请列表", -1)])], 2)) : (0, r.Q3)("", !0)])]), (0, r.Lk)("div", ne, [(0, r.RG)(e.$slots, "default", {}, void 0, !0)])])
            }

            var ue = {
                name: "NavigationBar",
                props: {
                    currentModule: {type: String, default: "resource"},
                    username: {type: String, default: "管理员"},
                    userRole: {type: String, default: "user"}
                },
                methods: {
                    navigateTo(e) {
                        this.$emit("navigate", e)
                    }, handleLogout() {
                        this.$emit("logout")
                    }
                }
            };
            const ce = (0, w.A)(ue, [["render", ie], ["__scopeId", "data-v-6b11193e"]]);
            var de = ce;
            const pe = {class: "server-management-content"}, ge = {class: "page-header"}, ve = {class: "search-filter"},
                me = {class: "search-input-wrapper"}, ke = {class: "filter-wrapper"}, Le = {class: "table-wrapper"},
                he = {class: "data-table"}, fe = {class: "usage-bar"}, ye = {class: "usage-text"},
                be = {class: "usage-bar"}, Ce = {class: "usage-text"}, we = {class: "usage-bar"},
                Ae = {class: "usage-text"}, Te = {class: "action-buttons"}, Ue = ["onClick"],
                Pe = {class: "pagination"}, Re = {class: "page-info"}, Se = {class: "page-controls"}, De = ["disabled"],
                Me = {class: "page-num"}, qe = ["disabled"];

            function Ge(e, t, a, l, o, n) {
                const i = (0, r.g2)("main-layout");
                return (0, r.uX)(), (0, r.Wv)(i, {"page-title": "服务器信息管理"}, {
                    default: (0, r.k6)(() => [(0, r.Lk)("div", pe, [(0, r.Lk)("div", ge, [(0, r.Lk)("h2", null, (0, se.v_)("admin" === a.userRole ? "资源监控" : "可申请服务器"), 1)]), (0, r.Lk)("div", ve, [(0, r.Lk)("div", me, [(0, r.bo)((0, r.Lk)("input", {
                        type: "text",
                        class: "form-input",
                        "onUpdate:modelValue": t[0] || (t[0] = e => o.searchKeyword = e),
                        placeholder: "搜索服务器名称或IP...",
                        onKeyup: t[1] || (t[1] = (0, s.jR)((...e) => n.handleSearch && n.handleSearch(...e), ["enter"]))
                    }, null, 544), [[s.Jo, o.searchKeyword]]), t[6] || (t[6] = (0, r.Lk)("span", {class: "search-icon"}, "🔍", -1))]), (0, r.Lk)("div", ke, [(0, r.bo)((0, r.Lk)("select", {
                        class: "form-select",
                        "onUpdate:modelValue": t[2] || (t[2] = e => o.statusFilter = e),
                        onChange: t[3] || (t[3] = (...e) => n.handleFilter && n.handleFilter(...e))
                    }, [...t[7] || (t[7] = [(0, r.Lk)("option", {value: "all"}, "全部状态", -1), (0, r.Lk)("option", {value: "active"}, "运行中", -1), (0, r.Lk)("option", {value: "inactive"}, "已停用", -1), (0, r.Lk)("option", {value: "maintenance"}, "维护中", -1)])], 544), [[s.u1, o.statusFilter]])])]), (0, r.Lk)("div", Le, [(0, r.Lk)("table", he, [t[8] || (t[8] = (0, r.Lk)("thead", null, [(0, r.Lk)("tr", null, [(0, r.Lk)("th", null, "服务器名称"), (0, r.Lk)("th", null, "IP地址"), (0, r.Lk)("th", null, "状态"), (0, r.Lk)("th", null, "CPU使用率"), (0, r.Lk)("th", null, "内存使用率"), (0, r.Lk)("th", null, "GPU使用率"), (0, r.Lk)("th", null, "可用GPU"), (0, r.Lk)("th", null, "可申请"), (0, r.Lk)("th", null, "创建时间"), (0, r.Lk)("th", null, "操作")])], -1)), (0, r.Lk)("tbody", null, [((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(n.filteredServers, e => ((0, r.uX)(), (0, r.CE)("tr", {key: e.id}, [(0, r.Lk)("td", null, (0, se.v_)(e.name), 1), (0, r.Lk)("td", null, (0, se.v_)(e.ip), 1), (0, r.Lk)("td", null, [(0, r.Lk)("span", {class: (0, se.C4)(["status-badge", e.status])}, (0, se.v_)(n.getStatusText(e.status)), 3)]), (0, r.Lk)("td", null, [(0, r.Lk)("div", fe, [(0, r.Lk)("div", {
                        class: "usage-fill cpu-usage",
                        style: (0, se.Tr)({width: e.cpuUsage + "%"})
                    }, null, 4), (0, r.Lk)("span", ye, (0, se.v_)(e.cpuUsage) + "%", 1)])]), (0, r.Lk)("td", null, [(0, r.Lk)("div", be, [(0, r.Lk)("div", {
                        class: "usage-fill memory-usage",
                        style: (0, se.Tr)({width: e.memoryUsage + "%"})
                    }, null, 4), (0, r.Lk)("span", Ce, (0, se.v_)(e.memoryUsage) + "%", 1)])]), (0, r.Lk)("td", null, [(0, r.Lk)("div", we, [(0, r.Lk)("div", {
                        class: "usage-fill gpu-usage",
                        style: (0, se.Tr)({width: e.gpuUsage + "%"})
                    }, null, 4), (0, r.Lk)("span", Ae, (0, se.v_)(e.gpuUsage) + "%", 1)])]), (0, r.Lk)("td", null, [(0, r.Lk)("span", {style: (0, se.Tr)({color: e.availableGpuCount > 0 ? "#52c41a" : "#f5222d"})}, (0, se.v_)(e.availableGpuCount) + "/" + (0, se.v_)(e.gpuCount), 5)]), (0, r.Lk)("td", null, [(0, r.Lk)("span", {class: (0, se.C4)(["apply-badge", e.canApply ? "yes" : "no"])}, (0, se.v_)(e.canApply ? "是" : "否"), 3)]), (0, r.Lk)("td", null, (0, se.v_)(e.createTime), 1), (0, r.Lk)("td", null, [(0, r.Lk)("div", Te, [(0, r.Lk)("button", {
                        class: "secondary-button",
                        onClick: t => n.handleViewServer(e.id)
                    }, "查看", 8, Ue)])])]))), 128))])])]), (0, r.Lk)("div", Pe, [(0, r.Lk)("div", Re, " 显示 " + (0, se.v_)((o.currentPage - 1) * o.pageSize + 1) + " - " + (0, se.v_)(Math.min(o.currentPage * o.pageSize, n.totalServers)) + " 条，共 " + (0, se.v_)(n.totalServers) + " 条 ", 1), (0, r.Lk)("div", Se, [(0, r.Lk)("button", {
                        class: "page-button",
                        onClick: t[4] || (t[4] = e => n.goToPage(o.currentPage - 1)),
                        disabled: 1 === o.currentPage
                    }, " 上一页 ", 8, De), (0, r.Lk)("span", Me, (0, se.v_)(o.currentPage) + " / " + (0, se.v_)(Math.ceil(n.totalServers / o.pageSize)), 1), (0, r.Lk)("button", {
                        class: "page-button",
                        onClick: t[5] || (t[5] = e => n.goToPage(o.currentPage + 1)),
                        disabled: o.currentPage === Math.ceil(n.totalServers / o.pageSize)
                    }, " 下一页 ", 8, qe)])])])]), _: 1
                })
            }

            a(8111), a(2489);
            const Ie = {class: "main-layout"}, xe = {class: "main-header"}, Ee = {class: "header-content"},
                ze = {class: "header-actions"}, Xe = {class: "main-content"}, Qe = {class: "content-wrapper"};

            function Ve(e, t, a, s, l, o) {
                return (0, r.uX)(), (0, r.CE)("div", Ie, [(0, r.Lk)("header", xe, [(0, r.Lk)("div", Ee, [t[0] || (t[0] = (0, r.Lk)("img", {
                    src: n,
                    alt: "Logo",
                    class: "logo"
                }, null, -1)), (0, r.Lk)("h1", null, (0, se.v_)(a.pageTitle), 1), (0, r.Lk)("div", ze, [(0, r.RG)(e.$slots, "actions", {}, void 0, !0)])])]), (0, r.Lk)("main", Xe, [(0, r.Lk)("div", Qe, [(0, r.RG)(e.$slots, "default", {}, void 0, !0)])])])
            }

            var Fe = {name: "MainLayout", props: {pageTitle: {type: String, required: !0}}};
            const Ze = (0, w.A)(Fe, [["render", Ve], ["__scopeId", "data-v-52530f3c"]]);
            var Je = Ze, We = {
                name: "ServerManagement",
                components: {MainLayout: Je},
                props: {userRole: {type: String, required: !0}},
                data() {
                    return {
                        searchKeyword: "",
                        statusFilter: "all",
                        regionFilter: "all",
                        currentPage: 1,
                        pageSize: 10,
                        servers: [{
                            id: 1,
                            name: "1号服务器",
                            ip: "192.168.1.101",
                            status: "active",
                            cpuUsage: 45,
                            memoryUsage: 65,
                            gpuUsage: 38,
                            gpuMemory: 42,
                            gpuCount: 4,
                            availableGpuCount: 2,
                            canApply: !0,
                            createTime: "2023-01-15"
                        }, {
                            id: 2,
                            name: "2号服务器",
                            ip: "192.168.1.102",
                            status: "active",
                            cpuUsage: 60,
                            memoryUsage: 72,
                            gpuUsage: 55,
                            gpuMemory: 60,
                            gpuCount: 4,
                            availableGpuCount: 1,
                            canApply: !0,
                            createTime: "2023-01-20"
                        }, {
                            id: 3,
                            name: "3号服务器",
                            ip: "192.168.1.103",
                            status: "active",
                            cpuUsage: 35,
                            memoryUsage: 58,
                            gpuUsage: 28,
                            gpuMemory: 32,
                            gpuCount: 2,
                            availableGpuCount: 1,
                            canApply: !0,
                            createTime: "2023-02-05"
                        }, {
                            id: 4,
                            name: "4号服务器",
                            ip: "192.168.2.101",
                            status: "active",
                            cpuUsage: 25,
                            memoryUsage: 42,
                            gpuUsage: 15,
                            gpuMemory: 25,
                            gpuCount: 8,
                            availableGpuCount: 5,
                            canApply: !0,
                            createTime: "2023-02-10"
                        }, {
                            id: 5,
                            name: "5号服务器",
                            ip: "192.168.3.101",
                            status: "maintenance",
                            cpuUsage: 0,
                            memoryUsage: 0,
                            gpuUsage: 0,
                            gpuMemory: 0,
                            gpuCount: 2,
                            availableGpuCount: 0,
                            canApply: !1,
                            createTime: "2023-02-15"
                        }, {
                            id: 6,
                            name: "6号服务器",
                            ip: "192.168.1.104",
                            status: "active",
                            cpuUsage: 75,
                            memoryUsage: 80,
                            gpuUsage: 90,
                            gpuMemory: 85,
                            gpuCount: 4,
                            availableGpuCount: 0,
                            canApply: !1,
                            createTime: "2023-03-01"
                        }, {
                            id: 7,
                            name: "7号服务器",
                            ip: "192.168.2.102",
                            status: "inactive",
                            cpuUsage: 0,
                            memoryUsage: 0,
                            gpuUsage: 0,
                            gpuMemory: 0,
                            gpuCount: 4,
                            availableGpuCount: 0,
                            canApply: !1,
                            createTime: "2023-03-05"
                        }, {
                            id: 8,
                            name: "8号服务器",
                            ip: "192.168.3.102",
                            status: "active",
                            cpuUsage: 42,
                            memoryUsage: 55,
                            gpuUsage: 30,
                            gpuMemory: 40,
                            gpuCount: 8,
                            availableGpuCount: 4,
                            canApply: !0,
                            createTime: "2023-03-10"
                        }, {
                            id: 9,
                            name: "9号服务器",
                            ip: "192.168.1.105",
                            status: "active",
                            cpuUsage: 55,
                            memoryUsage: 62,
                            gpuUsage: 45,
                            gpuMemory: 55,
                            gpuCount: 2,
                            availableGpuCount: 1,
                            canApply: !0,
                            createTime: "2023-03-15"
                        }]
                    }
                },
                computed: {
                    filteredServers() {
                        let e = this.servers;
                        if (e = e.filter(e => e.canApply && "active" === e.status), this.searchKeyword) {
                            const t = this.searchKeyword.toLowerCase();
                            e = e.filter(e => e.name.toLowerCase().includes(t) || e.ip.includes(t))
                        }
                        "all" !== this.statusFilter && (e = e.filter(e => e.status === this.statusFilter)), "all" !== this.regionFilter && (e = e.filter(e => e.region === this.regionFilter));
                        const t = (this.currentPage - 1) * this.pageSize, a = t + this.pageSize;
                        return e.slice(t, a)
                    }, totalServers() {
                        let e = this.servers;
                        if ("admin" !== this.userRole && (e = e.filter(e => e.canApply && "active" === e.status)), this.searchKeyword) {
                            const t = this.searchKeyword.toLowerCase();
                            e = e.filter(e => e.name.toLowerCase().includes(t) || e.ip.includes(t))
                        }
                        return "all" !== this.statusFilter && (e = e.filter(e => e.status === this.statusFilter)), "all" !== this.regionFilter && (e = e.filter(e => e.region === this.regionFilter)), e.length
                    }
                },
                methods: {
                    getStatusText(e) {
                        const t = {active: "运行中", inactive: "已停用", maintenance: "维护中"};
                        return t[e] || e
                    }, handleSearch() {
                        this.currentPage = 1
                    }, handleFilter() {
                        this.currentPage = 1
                    }, goToPage(e) {
                        e >= 1 && e <= Math.ceil(this.totalServers / this.pageSize) && (this.currentPage = e)
                    }, handleAddServer() {
                        alert("添加服务器功能正在开发中")
                    }, handleViewServer(e) {
                        alert(`查看服务器ID: ${e}`)
                    }, handleEditServer(e) {
                        alert(`编辑服务器ID: ${e}`)
                    }, handleDeleteServer(e) {
                        confirm("确定要删除该服务器吗？") && alert(`删除服务器ID: ${e}`)
                    }
                },
                watch: {
                    searchKeyword: {
                        handler() {
                            this.currentPage = 1
                        }, immediate: !1
                    }
                }
            };
            const Be = (0, w.A)(We, [["render", Ge], ["__scopeId", "data-v-56af7b10"]]);
            var Oe = Be;
            const je = {class: "resource-request-content"}, Ye = {class: "tabs"},
                Ne = {key: 0, class: "request-form-container"}, Ke = {class: "form-section"}, _e = {class: "form-row"},
                He = {class: "form-group"}, $e = {class: "form-group"}, et = {class: "form-row"},
                tt = {class: "form-group"}, at = {class: "form-group"}, st = {class: "form-section"},
                rt = {class: "form-row"}, lt = {class: "form-group full-width"}, ot = ["value"],
                nt = {class: "form-row"}, it = {class: "form-group"}, ut = ["disabled"], ct = ["value"],
                dt = {class: "form-group"}, pt = ["max", "disabled"], gt = {class: "form-row"},
                vt = {class: "form-group full-width"}, mt = {class: "form-section"}, kt = {class: "form-row"},
                Lt = {class: "form-group"}, ht = {class: "form-group"}, ft = {class: "form-row"},
                yt = {class: "form-group"}, bt = {class: "form-group"}, Ct = ["value"], wt = {class: "form-section"},
                At = {class: "form-row"}, Tt = {class: "form-group"}, Ut = {class: "form-group"},
                Pt = {class: "form-group"}, Rt = {class: "form-actions"}, St = ["disabled"],
                Dt = {key: 1, class: "my-requests-container"}, Mt = {class: "search-filter"},
                qt = {class: "search-input-wrapper"}, Gt = {class: "filter-wrapper"}, It = {class: "request-list"},
                xt = {class: "request-header"}, Et = {class: "request-title"}, zt = {class: "request-id"},
                Xt = {class: "request-content"}, Qt = {class: "request-info"}, Vt = {class: "info-item"},
                Ft = {class: "info-value"}, Zt = {class: "info-item"}, Jt = {class: "info-value"},
                Wt = {key: 0, class: "info-item"}, Bt = {class: "info-value allocated-server"},
                Ot = {class: "info-item"}, jt = {class: "info-value"}, Yt = {class: "request-description"},
                Nt = {class: "request-actions"}, Kt = ["onClick"], _t = ["onClick"], Ht = {class: "pagination"},
                $t = {class: "page-info"}, ea = {class: "page-controls"}, ta = ["disabled"], aa = {class: "page-num"},
                sa = ["disabled"], ra = {key: 2, class: "all-requests-container"}, la = {class: "search-filter"},
                oa = {class: "search-input-wrapper"}, na = {class: "filter-wrapper"}, ia = {class: "request-list"},
                ua = {class: "request-header"}, ca = {class: "request-title"}, da = {class: "request-id"},
                pa = {class: "request-applicant"}, ga = {key: 0, class: "request-score"},
                va = {class: "request-content"}, ma = {class: "request-info"}, ka = {class: "info-item"},
                La = {class: "info-value"}, ha = {class: "info-item"}, fa = {class: "info-value"},
                ya = {key: 0, class: "info-item"}, ba = {class: "info-value allocated-server"},
                Ca = {class: "request-actions"}, wa = ["onClick"], Aa = ["onClick"], Ta = ["onClick"],
                Ua = {class: "pagination"}, Pa = {class: "page-info"}, Ra = {class: "page-controls"}, Sa = ["disabled"],
                Da = {class: "page-num"}, Ma = ["disabled"];

            function qa(e, t, a, l, o, n) {
                const i = (0, r.g2)("main-layout");
                return (0, r.uX)(), (0, r.Wv)(i, {"page-title": "资源申请"}, {
                    default: (0, r.k6)(() => [(0, r.Lk)("div", je, [(0, r.Lk)("div", Ye, ["user" === a.userRole ? ((0, r.uX)(), (0, r.CE)("button", {
                        key: 0,
                        class: (0, se.C4)(["tab-button", {active: "new-request" === o.activeTab}]),
                        onClick: t[0] || (t[0] = e => n.switchTab("new-request"))
                    }, " 新建申请 ", 2)) : (0, r.Q3)("", !0), "user" === a.userRole ? ((0, r.uX)(), (0, r.CE)("button", {
                        key: 1,
                        class: (0, se.C4)(["tab-button", {active: "my-requests" === o.activeTab}]),
                        onClick: t[1] || (t[1] = e => n.switchTab("my-requests"))
                    }, " 我的申请 ", 2)) : (0, r.Q3)("", !0), "admin" === a.userRole ? ((0, r.uX)(), (0, r.CE)("button", {
                        key: 2,
                        class: (0, se.C4)(["tab-button", {active: "all-requests" === o.activeTab}]),
                        onClick: t[2] || (t[2] = e => n.switchTab("all-requests"))
                    }, " 全部申请 ", 2)) : (0, r.Q3)("", !0)]), "new-request" === o.activeTab ? ((0, r.uX)(), (0, r.CE)("div", Ne, [(0, r.Lk)("form", {
                        onSubmit: t[19] || (t[19] = (0, s.D$)((...e) => n.handleSubmitRequest && n.handleSubmitRequest(...e), ["prevent"])),
                        class: "request-form"
                    }, [(0, r.Lk)("div", Ke, [t[34] || (t[34] = (0, r.Lk)("h3", null, "申请基本信息", -1)), (0, r.Lk)("div", _e, [(0, r.Lk)("div", He, [t[29] || (t[29] = (0, r.Lk)("label", {for: "resourceType"}, [(0, r.eW)("资源类型 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("select", {
                        id: "resourceType",
                        "onUpdate:modelValue": t[3] || (t[3] = e => o.formData.resourceType = e),
                        class: "form-select",
                        required: ""
                    }, [...t[28] || (t[28] = [(0, r.Lk)("option", {value: ""}, "请选择资源类型", -1), (0, r.Lk)("option", {value: "server"}, "服务器", -1), (0, r.Lk)("option", {value: "server"}, "显卡", -1)])], 512), [[s.u1, o.formData.resourceType]])]), (0, r.Lk)("div", $e, [t[30] || (t[30] = (0, r.Lk)("label", {for: "requestTitle"}, [(0, r.eW)("申请标题 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("input", {
                        type: "text",
                        id: "requestTitle",
                        "onUpdate:modelValue": t[4] || (t[4] = e => o.formData.requestTitle = e),
                        class: "form-input",
                        placeholder: "请输入申请标题",
                        required: ""
                    }, null, 512), [[s.Jo, o.formData.requestTitle]])])]), (0, r.Lk)("div", et, [(0, r.Lk)("div", tt, [t[32] || (t[32] = (0, r.Lk)("label", {for: "urgencyLevel"}, [(0, r.eW)("紧急程度 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("select", {
                        id: "urgencyLevel",
                        "onUpdate:modelValue": t[5] || (t[5] = e => o.formData.urgencyLevel = e),
                        class: "form-select",
                        required: ""
                    }, [...t[31] || (t[31] = [(0, r.Lk)("option", {value: "normal"}, "普通", -1), (0, r.Lk)("option", {value: "urgent"}, "紧急", -1), (0, r.Lk)("option", {value: "very-urgent"}, "非常紧急", -1)])], 512), [[s.u1, o.formData.urgencyLevel]])]), (0, r.Lk)("div", at, [t[33] || (t[33] = (0, r.Lk)("label", {for: "expectedDate"}, [(0, r.eW)("期望完成日期 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("input", {
                        type: "date",
                        id: "expectedDate",
                        "onUpdate:modelValue": t[6] || (t[6] = e => o.formData.expectedDate = e),
                        class: "form-input",
                        required: ""
                    }, null, 512), [[s.Jo, o.formData.expectedDate]])])])]), (0, r.Lk)("div", st, [t[41] || (t[41] = (0, r.Lk)("h3", null, "资源需求详情", -1)), (0, r.Lk)("div", rt, [(0, r.Lk)("div", lt, [t[36] || (t[36] = (0, r.Lk)("label", {for: "serverId"}, [(0, r.eW)("GPU服务器 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("select", {
                        id: "serverId",
                        "onUpdate:modelValue": t[7] || (t[7] = e => o.formData.serverId = e),
                        class: "form-select",
                        required: "",
                        onChange: t[8] || (t[8] = (...e) => n.onServerChange && n.onServerChange(...e))
                    }, [t[35] || (t[35] = (0, r.Lk)("option", {value: ""}, "请选择服务器", -1)), ((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(o.availableServers, e => ((0, r.uX)(), (0, r.CE)("option", {
                        key: e.id,
                        value: e.id
                    }, (0, se.v_)(e.name) + " (IP: " + (0, se.v_)(e.ip) + ", CPU使用率: " + (0, se.v_)(e.cpuUsage) + "%, 内存使用率: " + (0, se.v_)(e.memoryUsage) + "%) ", 9, ot))), 128))], 544), [[s.u1, o.formData.serverId]])])]), (0, r.Lk)("div", nt, [(0, r.Lk)("div", it, [t[38] || (t[38] = (0, r.Lk)("label", {for: "gpuIndex"}, [(0, r.eW)("起始显卡编号 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("select", {
                        id: "gpuIndex",
                        "onUpdate:modelValue": t[9] || (t[9] = e => o.formData.gpuIndex = e),
                        class: "form-select",
                        required: "",
                        disabled: !o.formData.serverId
                    }, [t[37] || (t[37] = (0, r.Lk)("option", {value: ""}, "请选择起始显卡", -1)), ((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(n.availableGpus, e => ((0, r.uX)(), (0, r.CE)("option", {
                        key: e,
                        value: e
                    }, " 显卡 #" + (0, se.v_)(e), 9, ct))), 128))], 8, ut), [[s.u1, o.formData.gpuIndex]])]), (0, r.Lk)("div", dt, [t[39] || (t[39] = (0, r.Lk)("label", {for: "gpuCount"}, [(0, r.eW)("显卡数量 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("input", {
                        type: "number",
                        id: "gpuCount",
                        "onUpdate:modelValue": t[10] || (t[10] = e => o.formData.gpuCount = e),
                        class: "form-input",
                        min: "1",
                        max: n.availableGpuCount,
                        placeholder: "如：1",
                        required: "",
                        disabled: !o.formData.serverId
                    }, null, 8, pt), [[s.Jo, o.formData.gpuCount]])])]), (0, r.Lk)("div", gt, [(0, r.Lk)("div", vt, [t[40] || (t[40] = (0, r.Lk)("label", {for: "resourceDescription"}, [(0, r.eW)("资源需求描述 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("textarea", {
                        id: "resourceDescription",
                        "onUpdate:modelValue": t[11] || (t[11] = e => o.formData.resourceDescription = e),
                        class: "form-textarea",
                        rows: "4",
                        placeholder: "请详细描述您的GPU使用场景和需求",
                        required: ""
                    }, null, 512), [[s.Jo, o.formData.resourceDescription]])])])]), (0, r.Lk)("div", mt, [t[46] || (t[46] = (0, r.Lk)("h3", null, "评分体系", -1)), (0, r.Lk)("div", kt, [(0, r.Lk)("div", Lt, [t[42] || (t[42] = (0, r.Lk)("label", {for: "projectContributionScore"}, [(0, r.eW)("项目贡献度评分 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("input", {
                        type: "number",
                        id: "projectContributionScore",
                        "onUpdate:modelValue": t[12] || (t[12] = e => o.formData.projectContributionScore = e),
                        class: "form-input",
                        min: "1",
                        max: "10",
                        placeholder: "1-10分",
                        required: ""
                    }, null, 512), [[s.Jo, o.formData.projectContributionScore]])]), (0, r.Lk)("div", ht, [t[43] || (t[43] = (0, r.Lk)("label", {for: "researchAchievementScore"}, [(0, r.eW)("科研成果评分 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("input", {
                        type: "number",
                        id: "researchAchievementScore",
                        "onUpdate:modelValue": t[13] || (t[13] = e => o.formData.researchAchievementScore = e),
                        class: "form-input",
                        min: "1",
                        max: "10",
                        placeholder: "1-10分",
                        required: ""
                    }, null, 512), [[s.Jo, o.formData.researchAchievementScore]])])]), (0, r.Lk)("div", ft, [(0, r.Lk)("div", yt, [t[44] || (t[44] = (0, r.Lk)("label", {for: "resourceUsageEfficiencyScore"}, [(0, r.eW)("资源使用效率评分 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("input", {
                        type: "number",
                        id: "resourceUsageEfficiencyScore",
                        "onUpdate:modelValue": t[14] || (t[14] = e => o.formData.resourceUsageEfficiencyScore = e),
                        class: "form-input",
                        min: "1",
                        max: "10",
                        placeholder: "1-10分",
                        required: ""
                    }, null, 512), [[s.Jo, o.formData.resourceUsageEfficiencyScore]])]), (0, r.Lk)("div", bt, [t[45] || (t[45] = (0, r.Lk)("label", {for: "comprehensiveScore"}, "综合得分", -1)), (0, r.Lk)("input", {
                        type: "text",
                        id: "comprehensiveScore",
                        value: n.comprehensiveScore.toFixed(1),
                        class: "form-input",
                        disabled: "",
                        placeholder: "系统自动计算"
                    }, null, 8, Ct)])])]), (0, r.Lk)("div", wt, [t[50] || (t[50] = (0, r.Lk)("h3", null, "联系方式", -1)), (0, r.Lk)("div", At, [(0, r.Lk)("div", Tt, [t[47] || (t[47] = (0, r.Lk)("label", {for: "contactPerson"}, [(0, r.eW)("联系人 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("input", {
                        type: "text",
                        id: "contactPerson",
                        "onUpdate:modelValue": t[15] || (t[15] = e => o.formData.contactPerson = e),
                        class: "form-input",
                        placeholder: "请输入联系人姓名",
                        required: ""
                    }, null, 512), [[s.Jo, o.formData.contactPerson]])]), (0, r.Lk)("div", Ut, [t[48] || (t[48] = (0, r.Lk)("label", {for: "contactPhone"}, [(0, r.eW)("联系电话 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("input", {
                        type: "tel",
                        id: "contactPhone",
                        "onUpdate:modelValue": t[16] || (t[16] = e => o.formData.contactPhone = e),
                        class: "form-input",
                        placeholder: "请输入联系电话",
                        required: ""
                    }, null, 512), [[s.Jo, o.formData.contactPhone]])]), (0, r.Lk)("div", Pt, [t[49] || (t[49] = (0, r.Lk)("label", {for: "contactEmail"}, [(0, r.eW)("电子邮箱 "), (0, r.Lk)("span", {class: "required"}, "*")], -1)), (0, r.bo)((0, r.Lk)("input", {
                        type: "email",
                        id: "contactEmail",
                        "onUpdate:modelValue": t[17] || (t[17] = e => o.formData.contactEmail = e),
                        class: "form-input",
                        placeholder: "请输入电子邮箱",
                        required: ""
                    }, null, 512), [[s.Jo, o.formData.contactEmail]])])])]), (0, r.Lk)("div", Rt, [(0, r.Lk)("button", {
                        type: "button",
                        class: "cancel-button",
                        onClick: t[18] || (t[18] = (...e) => n.resetForm && n.resetForm(...e))
                    }, "取消"), (0, r.Lk)("button", {
                        type: "submit",
                        class: "submit-button",
                        disabled: o.isSubmitting
                    }, (0, se.v_)(o.isSubmitting ? "提交中..." : "提交申请"), 9, St)])], 32)])) : "my-requests" === o.activeTab ? ((0, r.uX)(), (0, r.CE)("div", Dt, [(0, r.Lk)("div", Mt, [(0, r.Lk)("div", qt, [(0, r.bo)((0, r.Lk)("input", {
                        type: "text",
                        "onUpdate:modelValue": t[20] || (t[20] = e => o.searchKeyword = e),
                        class: "search-input",
                        placeholder: "搜索申请标题或ID"
                    }, null, 512), [[s.Jo, o.searchKeyword]]), t[51] || (t[51] = (0, r.Lk)("span", {class: "search-icon"}, "🔍", -1))]), (0, r.Lk)("div", Gt, [(0, r.bo)((0, r.Lk)("select", {
                        "onUpdate:modelValue": t[21] || (t[21] = e => o.statusFilter = e),
                        class: "filter-select"
                    }, [...t[52] || (t[52] = [(0, r.Lk)("option", {value: ""}, "全部状态", -1), (0, r.Lk)("option", {value: "pending"}, "待审核", -1), (0, r.Lk)("option", {value: "approved"}, "已批准", -1), (0, r.Lk)("option", {value: "rejected"}, "已拒绝", -1), (0, r.Lk)("option", {value: "processing"}, "处理中", -1), (0, r.Lk)("option", {value: "completed"}, "已完成", -1)])], 512), [[s.u1, o.statusFilter]])])]), (0, r.Lk)("div", It, [((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(o.requestsList, e => ((0, r.uX)(), (0, r.CE)("div", {
                        class: "request-item",
                        key: e.id
                    }, [(0, r.Lk)("div", xt, [(0, r.Lk)("div", Et, [(0, r.Lk)("h4", null, (0, se.v_)(e.title), 1), (0, r.Lk)("span", zt, "申请ID: " + (0, se.v_)(e.id), 1)]), (0, r.Lk)("div", {class: (0, se.C4)(["request-status", e.status])}, (0, se.v_)(n.getStatusText(e.status)), 3)]), (0, r.Lk)("div", Xt, [(0, r.Lk)("div", Qt, [(0, r.Lk)("div", Vt, [t[53] || (t[53] = (0, r.Lk)("span", {class: "info-label"}, "资源类型:", -1)), (0, r.Lk)("span", Ft, (0, se.v_)(n.getResourceTypeText(e.resourceType)), 1)]), (0, r.Lk)("div", Zt, [t[54] || (t[54] = (0, r.Lk)("span", {class: "info-label"}, "申请时间:", -1)), (0, r.Lk)("span", Jt, (0, se.v_)(e.applyTime), 1)]), e.allocatedServer ? ((0, r.uX)(), (0, r.CE)("div", Wt, [t[55] || (t[55] = (0, r.Lk)("span", {class: "info-label"}, "分配服务器:", -1)), (0, r.Lk)("span", Bt, (0, se.v_)(e.allocatedServer.name) + " (" + (0, se.v_)(e.allocatedServer.ip) + ")", 1)])) : (0, r.Q3)("", !0), (0, r.Lk)("div", Ot, [t[56] || (t[56] = (0, r.Lk)("span", {class: "info-label"}, "期望完成:", -1)), (0, r.Lk)("span", jt, (0, se.v_)(e.expectedDate), 1)])]), (0, r.Lk)("div", Yt, (0, se.v_)(e.description), 1)]), (0, r.Lk)("div", Nt, [(0, r.Lk)("button", {
                        class: "view-button",
                        onClick: t => n.viewRequestDetail(e.id)
                    }, "查看详情", 8, Kt), "pending" === e.status ? ((0, r.uX)(), (0, r.CE)("button", {
                        key: 0,
                        class: "cancel-button",
                        onClick: t => n.cancelRequest(e.id)
                    }, "取消申请", 8, _t)) : (0, r.Q3)("", !0)])]))), 128))]), (0, r.Lk)("div", Ht, [(0, r.Lk)("div", $t, " 显示 " + (0, se.v_)((o.currentPage - 1) * o.pageSize + 1) + " - " + (0, se.v_)(Math.min(o.currentPage * o.pageSize, o.totalRequests)) + " 条，共 " + (0, se.v_)(o.totalRequests) + " 条 ", 1), (0, r.Lk)("div", ea, [(0, r.Lk)("button", {
                        class: "page-btn",
                        disabled: 1 === o.currentPage,
                        onClick: t[22] || (t[22] = e => n.changePage(o.currentPage - 1))
                    }, "上一页", 8, ta), (0, r.Lk)("span", aa, (0, se.v_)(o.currentPage) + " / " + (0, se.v_)(Math.ceil(o.totalRequests / o.pageSize)), 1), (0, r.Lk)("button", {
                        class: "page-btn",
                        disabled: o.currentPage === Math.ceil(o.totalRequests / o.pageSize),
                        onClick: t[23] || (t[23] = e => n.changePage(o.currentPage + 1))
                    }, "下一页", 8, sa)])])])) : "all-requests" === o.activeTab ? ((0, r.uX)(), (0, r.CE)("div", ra, [(0, r.Lk)("div", la, [(0, r.Lk)("div", oa, [(0, r.bo)((0, r.Lk)("input", {
                        type: "text",
                        "onUpdate:modelValue": t[24] || (t[24] = e => o.adminSearchKeyword = e),
                        class: "search-input",
                        placeholder: "搜索申请标题、ID或申请人"
                    }, null, 512), [[s.Jo, o.adminSearchKeyword]]), t[57] || (t[57] = (0, r.Lk)("span", {class: "search-icon"}, "🔍", -1))]), (0, r.Lk)("div", na, [(0, r.bo)((0, r.Lk)("select", {
                        "onUpdate:modelValue": t[25] || (t[25] = e => o.adminStatusFilter = e),
                        class: "filter-select"
                    }, [...t[58] || (t[58] = [(0, r.Lk)("option", {value: ""}, "全部状态", -1), (0, r.Lk)("option", {value: "pending"}, "待审核", -1), (0, r.Lk)("option", {value: "approved"}, "已批准", -1), (0, r.Lk)("option", {value: "rejected"}, "已拒绝", -1), (0, r.Lk)("option", {value: "processing"}, "处理中", -1), (0, r.Lk)("option", {value: "completed"}, "已完成", -1)])], 512), [[s.u1, o.adminStatusFilter]])])]), (0, r.Lk)("div", ia, [((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(n.filteredAllRequests, e => ((0, r.uX)(), (0, r.CE)("div", {
                        class: "request-item",
                        key: e.id
                    }, [(0, r.Lk)("div", ua, [(0, r.Lk)("div", ca, [(0, r.Lk)("h4", null, (0, se.v_)(e.title), 1), (0, r.Lk)("span", da, "申请ID: " + (0, se.v_)(e.id), 1), (0, r.Lk)("span", pa, "申请人: " + (0, se.v_)(e.applicant), 1), e.score ? ((0, r.uX)(), (0, r.CE)("span", ga, "综合评分: " + (0, se.v_)(e.score), 1)) : (0, r.Q3)("", !0)]), (0, r.Lk)("div", {class: (0, se.C4)(["request-status", e.status])}, (0, se.v_)(n.getStatusText(e.status)), 3)]), (0, r.Lk)("div", va, [(0, r.Lk)("div", ma, [(0, r.Lk)("div", ka, [t[59] || (t[59] = (0, r.Lk)("span", {class: "info-label"}, "资源类型:", -1)), (0, r.Lk)("span", La, (0, se.v_)(n.getResourceTypeText(e.resourceType)), 1)]), (0, r.Lk)("div", ha, [t[60] || (t[60] = (0, r.Lk)("span", {class: "info-label"}, "申请时间:", -1)), (0, r.Lk)("span", fa, (0, se.v_)(e.applyTime), 1)]), e.allocatedServer ? ((0, r.uX)(), (0, r.CE)("div", ya, [t[61] || (t[61] = (0, r.Lk)("span", {class: "info-label"}, "分配服务器:", -1)), (0, r.Lk)("span", ba, (0, se.v_)(e.allocatedServer.name) + " (" + (0, se.v_)(e.allocatedServer.ip) + ")", 1)])) : (0, r.Q3)("", !0)]), (0, r.Lk)("div", Ca, ["pending" === e.status ? ((0, r.uX)(), (0, r.CE)("button", {
                        key: 0,
                        class: "primary-button",
                        onClick: t => n.allocateServer(e.id)
                    }, " 分配服务器 ", 8, wa)) : (0, r.Q3)("", !0), "pending" === e.status ? ((0, r.uX)(), (0, r.CE)("button", {
                        key: 1,
                        class: "secondary-button",
                        onClick: t => n.rejectRequest(e.id)
                    }, " 拒绝申请 ", 8, Aa)) : (0, r.Q3)("", !0), (0, r.Lk)("button", {
                        class: "secondary-button",
                        onClick: t => n.viewRequestDetails(e.id)
                    }, " 查看详情 ", 8, Ta)])])]))), 128))]), (0, r.Lk)("div", Ua, [(0, r.Lk)("div", Pa, " 显示 " + (0, se.v_)((o.adminCurrentPage - 1) * o.adminPageSize + 1) + " - " + (0, se.v_)(Math.min(o.adminCurrentPage * o.adminPageSize, n.filteredAllRequests.length)) + " 条，共 " + (0, se.v_)(n.filteredAllRequests.length) + " 条 ", 1), (0, r.Lk)("div", Ra, [(0, r.Lk)("button", {
                        class: "page-btn",
                        disabled: 1 === o.adminCurrentPage,
                        onClick: t[26] || (t[26] = e => n.changeAdminPage(o.adminCurrentPage - 1))
                    }, "上一页", 8, Sa), (0, r.Lk)("span", Da, (0, se.v_)(o.adminCurrentPage) + " / " + (0, se.v_)(Math.ceil(n.filteredAllRequests.length / o.adminPageSize)), 1), (0, r.Lk)("button", {
                        class: "page-btn",
                        disabled: o.adminCurrentPage === Math.ceil(n.filteredAllRequests.length / o.adminPageSize),
                        onClick: t[27] || (t[27] = e => n.changeAdminPage(o.adminCurrentPage + 1))
                    }, "下一页", 8, Ma)])])])) : (0, r.Q3)("", !0)])]), _: 1
                })
            }

            a(116);
            var Ga = {
                components: {MainLayout: Je},
                name: "ResourceRequest",
                props: {userRole: {type: String, default: "user"}},
                data() {
                    return {
                        activeTab: "new-request",
                        formData: {
                            resourceType: "",
                            requestTitle: "",
                            urgencyLevel: "normal",
                            expectedDate: "",
                            cpuCount: "",
                            memorySize: "",
                            storageSize: "",
                            serverId: "",
                            gpuIndex: "",
                            gpuCount: 1,
                            resourceDescription: "",
                            projectContributionScore: "",
                            researchAchievementScore: "",
                            resourceUsageEfficiencyScore: "",
                            contactPerson: "",
                            contactPhone: "",
                            contactEmail: ""
                        },
                        isSubmitting: !1,
                        requestsList: [{
                            id: "REQ20231120001",
                            title: "测试环境服务器申请",
                            resourceType: "server",
                            status: "approved",
                            applyTime: "2023-11-20 09:30",
                            expectedDate: "2023-11-25",
                            description: "申请用于新项目测试的服务器资源，配置要求：8核CPU，16GB内存，500GB存储空间。"
                        }, {
                            id: "REQ20231115002",
                            title: "数据存储扩容申请",
                            resourceType: "storage",
                            status: "processing",
                            applyTime: "2023-11-15 14:20",
                            expectedDate: "2023-11-20",
                            description: "因业务增长，现有存储资源不足，需要扩容1TB存储空间。"
                        }, {
                            id: "REQ20231110003",
                            title: "专业软件许可证申请",
                            resourceType: "software",
                            status: "pending",
                            applyTime: "2023-11-10 11:45",
                            expectedDate: "2023-11-15",
                            description: "申请3套专业设计软件的临时许可证，用于新产品研发。"
                        }, {
                            id: "REQ20231105004",
                            title: "网络带宽升级申请",
                            resourceType: "network",
                            status: "rejected",
                            applyTime: "2023-11-05 16:10",
                            expectedDate: "2023-11-10",
                            description: "因国际业务需求，需要将现有网络带宽从100Mbps升级到500Mbps。"
                        }, {
                            id: "REQ20231101005",
                            title: "GPU服务器申请",
                            resourceType: "server",
                            status: "completed",
                            applyTime: "2023-11-01 10:00",
                            expectedDate: "2023-11-05",
                            description: "申请用于AI模型训练的GPU服务器，配置要求：4张V100 GPU，64GB内存。"
                        }],
                        searchKeyword: "",
                        statusFilter: "",
                        typeFilter: "",
                        currentPage: 1,
                        pageSize: 10,
                        totalRequests: 5,
                        allRequestsList: [{
                            id: "REQ20231120001",
                            title: "测试环境服务器申请",
                            resourceType: "server",
                            status: "approved",
                            applyTime: "2023-11-20 09:30",
                            expectedDate: "2023-11-25",
                            description: "申请用于新项目测试的服务器资源，配置要求：8核CPU，16GB内存，500GB存储空间。",
                            applicant: "张三",
                            score: 9.2,
                            allocatedServer: {name: "GPU服务器1", ip: "192.168.1.101"}
                        }, {
                            id: "REQ20231115002",
                            title: "数据存储扩容申请",
                            resourceType: "storage",
                            status: "processing",
                            applyTime: "2023-11-15 14:20",
                            expectedDate: "2023-11-20",
                            description: "因业务增长，现有存储资源不足，需要扩容1TB存储空间。",
                            applicant: "李四",
                            score: 8.5
                        }, {
                            id: "REQ20231110003",
                            title: "专业软件许可证申请",
                            resourceType: "software",
                            status: "pending",
                            applyTime: "2023-11-10 11:45",
                            expectedDate: "2023-11-15",
                            description: "申请3套专业设计软件的临时许可证，用于新产品研发。",
                            applicant: "王五",
                            score: 7.8
                        }, {
                            id: "REQ20231105004",
                            title: "网络带宽升级申请",
                            resourceType: "network",
                            status: "rejected",
                            applyTime: "2023-11-05 16:10",
                            expectedDate: "2023-11-10",
                            description: "因国际业务需求，需要将现有网络带宽从100Mbps升级到500Mbps。",
                            applicant: "赵六",
                            score: 6.5
                        }, {
                            id: "REQ20231101005",
                            title: "GPU服务器申请",
                            resourceType: "server",
                            status: "pending",
                            applyTime: "2023-11-01 10:00",
                            expectedDate: "2023-11-05",
                            description: "申请用于AI模型训练的GPU服务器，配置要求：4张V100 GPU，64GB内存。",
                            applicant: "孙七",
                            score: 9.5
                        }],
                        availableServers: [{
                            id: 1,
                            name: "GPU服务器1",
                            ip: "192.168.1.101",
                            gpuCount: 8,
                            availableGpus: [0, 1, 2, 3, 4, 5, 6, 7],
                            cpuUsage: 20,
                            memoryUsage: 25
                        }, {
                            id: 2,
                            name: "GPU服务器2",
                            ip: "192.168.1.102",
                            gpuCount: 8,
                            availableGpus: [0, 1, 2, 3, 4, 5, 6, 7],
                            cpuUsage: 25,
                            memoryUsage: 30
                        }, {
                            id: 3,
                            name: "GPU服务器3",
                            ip: "192.168.1.103",
                            gpuCount: 8,
                            availableGpus: [0, 1, 2, 3, 4, 5, 6, 7],
                            cpuUsage: 30,
                            memoryUsage: 20
                        }, {
                            id: 4,
                            name: "GPU服务器4",
                            ip: "192.168.1.104",
                            gpuCount: 8,
                            availableGpus: [0, 1, 2, 3, 4, 5, 6, 7],
                            cpuUsage: 15,
                            memoryUsage: 18
                        }, {
                            id: 5,
                            name: "GPU服务器5",
                            ip: "192.168.1.105",
                            gpuCount: 8,
                            availableGpus: [0, 1, 2, 3, 4, 5, 6, 7],
                            cpuUsage: 35,
                            memoryUsage: 32
                        }, {
                            id: 6,
                            name: "GPU服务器6",
                            ip: "192.168.1.106",
                            gpuCount: 8,
                            availableGpus: [0, 1, 2, 3, 4, 5, 6, 7],
                            cpuUsage: 28,
                            memoryUsage: 22
                        }, {
                            id: 7,
                            name: "GPU服务器7",
                            ip: "192.168.1.107",
                            gpuCount: 8,
                            availableGpus: [0, 1, 2, 3, 4, 5, 6, 7],
                            cpuUsage: 22,
                            memoryUsage: 26
                        }],
                        adminSearchKeyword: "",
                        adminStatusFilter: "",
                        adminCurrentPage: 1,
                        adminPageSize: 10
                    }
                },
                methods: {
                    switchTab(e) {
                        this.activeTab = e
                    }, async handleSubmitRequest() {
                        try {
                            if (!this.validateForm()) return;
                            this.isSubmitting = !0, await new Promise(e => setTimeout(e, 1500));
                            const e = parseInt(this.formData.projectContributionScore),
                                t = parseInt(this.formData.researchAchievementScore),
                                a = parseInt(this.formData.resourceUsageEfficiencyScore), s = .4 * e + .3 * t + .3 * a,
                                r = this.selectedServer;
                            alert(`申请提交成功！\n申请ID：REQ${Date.now().toString().slice(-8)}\n您的申请评分为：${s.toFixed(1)}\n申请GPU信息：\n- 服务器：${r.name} (${r.ip})\n- 显卡范围：#${this.formData.gpuIndex} 至 #${parseInt(this.formData.gpuIndex) + parseInt(this.formData.gpuCount) - 1}\n- 显卡数量：${this.formData.gpuCount}张`), this.resetForm()
                        } catch (e) {
                            console.error("提交申请失败：", e), alert("提交申请失败，请稍后重试")
                        } finally {
                            this.isSubmitting = !1
                        }
                    }, validateForm() {
                        if (!this.formData.resourceType || !this.formData.requestTitle) return alert("请填写申请基本信息"), !1;
                        if (!this.formData.serverId || !this.formData.gpuIndex || !this.formData.gpuCount) return alert("请填写完整的GPU需求信息"), !1;
                        const e = [this.formData.projectContributionScore, this.formData.researchAchievementScore, this.formData.resourceUsageEfficiencyScore];
                        for (const t of e) {
                            const e = parseInt(t);
                            if (isNaN(e) || e < 1 || e > 10) return alert("评分必须是1-10之间的数字"), !1
                        }
                        return !!(this.formData.contactPerson && this.formData.contactPhone && this.formData.contactEmail) || (alert("请填写完整的联系方式"), !1)
                    }, resetForm() {
                        this.formData = {
                            resourceType: "",
                            requestTitle: "",
                            urgencyLevel: "normal",
                            expectedDate: "",
                            cpuCount: "",
                            memorySize: "",
                            storageSize: "",
                            serverId: "",
                            gpuIndex: "",
                            gpuCount: 1,
                            resourceDescription: "",
                            projectContributionScore: "",
                            researchAchievementScore: "",
                            resourceUsageEfficiencyScore: "",
                            contactPerson: "",
                            contactPhone: "",
                            contactEmail: ""
                        }
                    }, onServerChange() {
                        this.formData.gpuIndex = "", this.formData.gpuCount = 1
                    }, viewRequestDetail(e) {
                        console.log("查看申请详情：", e)
                    }, cancelRequest(e) {
                        confirm("确定要取消此申请吗？") && (console.log("取消申请：", e), alert("申请已取消"))
                    }, changePage(e) {
                        e > 0 && e <= Math.ceil(this.totalRequests / this.pageSize) && (this.currentPage = e)
                    }, getStatusText(e) {
                        const t = {
                            pending: "待审核",
                            approved: "已批准",
                            rejected: "已拒绝",
                            processing: "处理中",
                            completed: "已完成"
                        };
                        return t[e] || e
                    }, getResourceTypeText(e) {
                        const t = {
                            server: "服务器",
                            storage: "存储资源",
                            network: "网络资源",
                            software: "软件许可证",
                            other: "其他资源"
                        };
                        return t[e] || e
                    }, allocateServer(e) {
                        const t = this.allRequestsList.find(t => t.id === e);
                        if (!t) return;
                        const a = this.availableServers.sort((e, t) => e.cpuUsage + e.memoryUsage - (t.cpuUsage + t.memoryUsage)).find(e => e.availableGpus.length > 0);
                        a ? (t.allocatedServer = a, t.status = "approved", alert(`已成功分配服务器: ${a.name}`)) : alert("当前无可用服务器资源，请稍后再试")
                    }, rejectRequest(e) {
                        if (confirm("确定要拒绝该申请吗？")) {
                            const t = this.allRequestsList.find(t => t.id === e);
                            t && (t.status = "rejected", alert("申请已拒绝"))
                        }
                    }, viewRequestDetails(e) {
                        console.log("查看申请详情：", e)
                    }, changeAdminPage(e) {
                        e > 0 && e <= Math.ceil(this.filteredAllRequests.length / this.adminPageSize) && (this.adminCurrentPage = e)
                    }
                },
                computed: {
                    selectedServer() {
                        return this.availableServers.find(e => e.id === parseInt(this.formData.serverId))
                    }, comprehensiveScore() {
                        const e = parseInt(this.formData.projectContributionScore),
                            t = parseInt(this.formData.researchAchievementScore),
                            a = parseInt(this.formData.resourceUsageEfficiencyScore);
                        return isNaN(e) || isNaN(t) || isNaN(a) ? 0 : .4 * e + .3 * t + .3 * a
                    }, availableGpus() {
                        return this.selectedServer ? this.selectedServer.availableGpus : []
                    }, availableGpuCount() {
                        return this.selectedServer ? this.selectedServer.availableGpus.length : 0
                    }, filteredRequests() {
                        return this.requestsList.filter(e => {
                            const t = !this.searchKeyword || e.title.includes(this.searchKeyword) || e.id.includes(this.searchKeyword),
                                a = !this.statusFilter || e.status === this.statusFilter,
                                s = !this.typeFilter || e.resourceType === this.typeFilter;
                            return t && a && s
                        })
                    }, filteredAllRequests() {
                        return this.allRequestsList.filter(e => {
                            const t = !this.adminSearchKeyword || e.title.includes(this.adminSearchKeyword) || e.id.includes(this.adminSearchKeyword) || e.applicant.includes(this.adminSearchKeyword),
                                a = !this.adminStatusFilter || e.status === this.adminStatusFilter;
                            return t && a
                        })
                    }
                },
                watch: {
                    searchKeyword() {
                        this.currentPage = 1
                    }, statusFilter() {
                        this.currentPage = 1
                    }, typeFilter() {
                        this.currentPage = 1
                    }, adminSearchKeyword() {
                        this.adminCurrentPage = 1
                    }, adminStatusFilter() {
                        this.adminCurrentPage = 1
                    }
                }
            };
            const Ia = (0, w.A)(Ga, [["render", qa], ["__scopeId", "data-v-4fe0daa0"]]);
            var xa = Ia;
            const Ea = {class: "resource-monitoring-container"}, za = {class: "monitoring-dashboard"},
                Xa = {class: "overview-cards"}, Qa = {class: "overview-card"}, Va = {class: "card-content"},
                Fa = {class: "card-value"}, Za = {class: "progress-bar"}, Ja = {class: "overview-card"},
                Wa = {class: "card-content"}, Ba = {class: "card-value"}, Oa = {class: "progress-bar"},
                ja = {class: "overview-card"}, Ya = {class: "card-content"}, Na = {class: "card-value"},
                Ka = {class: "progress-bar"}, _a = {class: "overview-card"}, Ha = {class: "card-content"},
                $a = {class: "card-value"}, es = {class: "progress-bar"}, ts = {class: "charts-section"},
                as = {class: "chart-container"}, ss = {class: "chart-header"}, rs = {class: "chart-controls"},
                ls = {class: "alerts-section"}, os = {class: "alerts-list"}, ns = {class: "alert-icon"},
                is = {class: "alert-content"}, us = {class: "alert-title"}, cs = {class: "alert-details"},
                ds = {class: "alert-time"}, ps = ["onClick"], gs = {class: "servers-section"},
                vs = {class: "section-header"}, ms = {class: "servers-controls"}, ks = {class: "search-input-wrapper"},
                Ls = {class: "table-container"}, hs = {class: "servers-table"}, fs = {class: "small-progress"},
                ys = {class: "small-progress"}, bs = {class: "small-progress"}, Cs = {class: "small-progress"},
                ws = {class: "small-progress"}, As = ["value", "onChange"];

            function Ts(e, t, a, l, o, n) {
                const i = (0, r.g2)("main-layout");
                return (0, r.uX)(), (0, r.Wv)(i, {"page-title": "资源监控"}, {
                    default: (0, r.k6)(() => [(0, r.Lk)("div", Ea, [(0, r.Lk)("div", za, [(0, r.Lk)("div", Xa, [(0, r.Lk)("div", Qa, [t[7] || (t[7] = (0, r.Lk)("div", {class: "card-header"}, [(0, r.Lk)("span", {class: "card-title"}, "总CPU使用率"), (0, r.Lk)("span", {class: "card-icon"}, "🖥️")], -1)), (0, r.Lk)("div", Va, [(0, r.Lk)("span", Fa, (0, se.v_)(o.cpuUsage) + "%", 1), (0, r.Lk)("div", Za, [(0, r.Lk)("div", {
                        class: "progress",
                        style: (0, se.Tr)({width: o.cpuUsage + "%", backgroundColor: n.getUsageColor(o.cpuUsage)})
                    }, null, 4)]), (0, r.Lk)("span", {class: (0, se.C4)(["card-trend", o.cpuTrend])}, (0, se.v_)("up" === o.cpuTrend ? "↑" : "↓") + " " + (0, se.v_)(o.cpuTrendValue) + "% ", 3)])]), (0, r.Lk)("div", Ja, [t[8] || (t[8] = (0, r.Lk)("div", {class: "card-header"}, [(0, r.Lk)("span", {class: "card-title"}, "内存使用率"), (0, r.Lk)("span", {class: "card-icon"}, "🧠")], -1)), (0, r.Lk)("div", Wa, [(0, r.Lk)("span", Ba, (0, se.v_)(o.memoryUsage) + "%", 1), (0, r.Lk)("div", Oa, [(0, r.Lk)("div", {
                        class: "progress",
                        style: (0, se.Tr)({width: o.memoryUsage + "%", backgroundColor: n.getUsageColor(o.memoryUsage)})
                    }, null, 4)]), (0, r.Lk)("span", {class: (0, se.C4)(["card-trend", o.memoryTrend])}, (0, se.v_)("up" === o.memoryTrend ? "↑" : "↓") + " " + (0, se.v_)(o.memoryTrendValue) + "% ", 3)])]), (0, r.Lk)("div", ja, [t[9] || (t[9] = (0, r.Lk)("div", {class: "card-header"}, [(0, r.Lk)("span", {class: "card-title"}, "存储使用率"), (0, r.Lk)("span", {class: "card-icon"}, "💾")], -1)), (0, r.Lk)("div", Ya, [(0, r.Lk)("span", Na, (0, se.v_)(o.storageUsage) + "%", 1), (0, r.Lk)("div", Ka, [(0, r.Lk)("div", {
                        class: "progress",
                        style: (0, se.Tr)({
                            width: o.storageUsage + "%",
                            backgroundColor: n.getUsageColor(o.storageUsage)
                        })
                    }, null, 4)]), (0, r.Lk)("span", {class: (0, se.C4)(["card-trend", o.storageTrend])}, (0, se.v_)("up" === o.storageTrend ? "↑" : "↓") + " " + (0, se.v_)(o.storageTrendValue) + "% ", 3)])]), (0, r.Lk)("div", _a, [t[10] || (t[10] = (0, r.Lk)("div", {class: "card-header"}, [(0, r.Lk)("span", {class: "card-title"}, "GPU使用率"), (0, r.Lk)("span", {class: "card-icon"}, "🖥️")], -1)), (0, r.Lk)("div", Ha, [(0, r.Lk)("span", $a, (0, se.v_)(o.gpuUsage) + "%", 1), (0, r.Lk)("div", es, [(0, r.Lk)("div", {
                        class: "progress",
                        style: (0, se.Tr)({width: o.gpuUsage + "%", backgroundColor: n.getUsageColor(o.gpuUsage)})
                    }, null, 4)]), (0, r.Lk)("span", {class: (0, se.C4)(["card-trend", o.gpuTrend])}, (0, se.v_)("up" === o.gpuTrend ? "↑" : "↓") + " " + (0, se.v_)(o.gpuTrendValue) + "% ", 3)])])]), (0, r.Lk)("div", ts, [(0, r.Lk)("div", as, [(0, r.Lk)("div", ss, [t[11] || (t[11] = (0, r.Lk)("h3", null, "资源使用趋势", -1)), (0, r.Lk)("div", rs, [(0, r.Lk)("button", {
                        class: (0, se.C4)(["time-filter", {active: "day" === o.timeRange}]),
                        onClick: t[0] || (t[0] = e => n.changeTimeRange("day"))
                    }, "今日", 2), (0, r.Lk)("button", {
                        class: (0, se.C4)(["time-filter", {active: "week" === o.timeRange}]),
                        onClick: t[1] || (t[1] = e => n.changeTimeRange("week"))
                    }, "本周", 2), (0, r.Lk)("button", {
                        class: (0, se.C4)(["time-filter", {active: "month" === o.timeRange}]),
                        onClick: t[2] || (t[2] = e => n.changeTimeRange("month"))
                    }, "本月", 2)])]), t[12] || (t[12] = (0, r.Lk)("div", {class: "chart-placeholder"}, [(0, r.Lk)("div", {class: "trend-chart"}, [(0, r.Lk)("div", {class: "chart-grid"}, [(0, r.Lk)("div", {class: "grid-line"}), (0, r.Lk)("div", {class: "grid-line"}), (0, r.Lk)("div", {class: "grid-line"}), (0, r.Lk)("div", {class: "grid-line"})]), (0, r.Lk)("div", {class: "chart-paths"}, [(0, r.Lk)("div", {class: "chart-path cpu-path"}), (0, r.Lk)("div", {class: "chart-path memory-path"}), (0, r.Lk)("div", {class: "chart-path storage-path"})]), (0, r.Lk)("div", {class: "chart-labels"}, [(0, r.Lk)("span", null, "00:00"), (0, r.Lk)("span", null, "06:00"), (0, r.Lk)("span", null, "12:00"), (0, r.Lk)("span", null, "18:00"), (0, r.Lk)("span", null, "23:59")])])], -1)), t[13] || (t[13] = (0, r.Lk)("div", {class: "chart-legend"}, [(0, r.Lk)("div", {class: "legend-item"}, [(0, r.Lk)("div", {class: "legend-color cpu-color"}), (0, r.Lk)("span", null, "CPU")]), (0, r.Lk)("div", {class: "legend-item"}, [(0, r.Lk)("div", {class: "legend-color memory-color"}), (0, r.Lk)("span", null, "内存")]), (0, r.Lk)("div", {class: "legend-item"}, [(0, r.Lk)("div", {class: "legend-color storage-color"}), (0, r.Lk)("span", null, "存储")])], -1))]), t[14] || (t[14] = (0, r.Lk)("div", {class: "chart-container"}, [(0, r.Lk)("div", {class: "chart-header"}, [(0, r.Lk)("h3", null, "服务器分布")]), (0, r.Lk)("div", {class: "distribution-chart"}, [(0, r.Lk)("div", {class: "distribution-pie"}, [(0, r.Lk)("div", {
                        class: "pie-section",
                        "data-percentage": "45"
                    }), (0, r.Lk)("div", {
                        class: "pie-section",
                        "data-percentage": "30"
                    }), (0, r.Lk)("div", {
                        class: "pie-section",
                        "data-percentage": "15"
                    }), (0, r.Lk)("div", {
                        class: "pie-section",
                        "data-percentage": "10"
                    })]), (0, r.Lk)("div", {class: "distribution-legend"}, [(0, r.Lk)("div", {class: "legend-item"}, [(0, r.Lk)("div", {class: "legend-color region1"}), (0, r.Lk)("span", null, "目标检测: 45%")]), (0, r.Lk)("div", {class: "legend-item"}, [(0, r.Lk)("div", {class: "legend-color region2"}), (0, r.Lk)("span", null, "大模型: 30%")]), (0, r.Lk)("div", {class: "legend-item"}, [(0, r.Lk)("div", {class: "legend-color region3"}), (0, r.Lk)("span", null, "任务规划: 15%")]), (0, r.Lk)("div", {class: "legend-item"}, [(0, r.Lk)("div", {class: "legend-color region4"}), (0, r.Lk)("span", null, "三维处理: 10%")])])])], -1))]), (0, r.Lk)("div", ls, [t[15] || (t[15] = (0, r.Lk)("div", {class: "section-header"}, [(0, r.Lk)("h3", null, "当前告警"), (0, r.Lk)("button", {class: "view-all-button"}, "查看全部")], -1)), (0, r.Lk)("div", os, [((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(o.alerts, e => ((0, r.uX)(), (0, r.CE)("div", {
                        class: "alert-item critical",
                        key: e.id
                    }, [(0, r.Lk)("div", ns, (0, se.v_)(e.icon), 1), (0, r.Lk)("div", is, [(0, r.Lk)("div", us, (0, se.v_)(e.title), 1), (0, r.Lk)("div", cs, (0, se.v_)(e.details), 1), (0, r.Lk)("div", ds, (0, se.v_)(e.time), 1)]), (0, r.Lk)("button", {
                        class: "alert-action",
                        onClick: t => n.handleAlertAction(e.id)
                    }, "处理", 8, ps)]))), 128))])]), (0, r.Lk)("div", gs, [(0, r.Lk)("div", vs, [t[17] || (t[17] = (0, r.Lk)("h3", null, "服务器状态", -1)), (0, r.Lk)("div", ms, [(0, r.Lk)("div", ks, [(0, r.bo)((0, r.Lk)("input", {
                        type: "text",
                        class: "search-input",
                        placeholder: "搜索服务器...",
                        "onUpdate:modelValue": t[3] || (t[3] = e => o.searchTerm = e),
                        onInput: t[4] || (t[4] = (...e) => n.filterServers && n.filterServers(...e))
                    }, null, 544), [[s.Jo, o.searchTerm]])]), (0, r.bo)((0, r.Lk)("select", {
                        class: "filter-select",
                        "onUpdate:modelValue": t[5] || (t[5] = e => o.statusFilter = e),
                        onChange: t[6] || (t[6] = (...e) => n.filterServers && n.filterServers(...e))
                    }, [...t[16] || (t[16] = [(0, r.Lk)("option", {value: "all"}, "全部状态", -1), (0, r.Lk)("option", {value: "online"}, "在线", -1), (0, r.Lk)("option", {value: "warning"}, "警告", -1), (0, r.Lk)("option", {value: "critical"}, "告警", -1)])], 544), [[s.u1, o.statusFilter]])])]), (0, r.Lk)("div", Ls, [(0, r.Lk)("table", hs, [t[20] || (t[20] = (0, r.Lk)("thead", null, [(0, r.Lk)("tr", null, [(0, r.Lk)("th", null, "服务器名称"), (0, r.Lk)("th", null, "IP地址"), (0, r.Lk)("th", null, "CPU使用率"), (0, r.Lk)("th", null, "内存使用率"), (0, r.Lk)("th", null, "存储使用率"), (0, r.Lk)("th", null, "GPU"), (0, r.Lk)("th", null, "GPU内存"), (0, r.Lk)("th", null, "可用GPU"), (0, r.Lk)("th", null, "状态"), (0, r.Lk)("th", null, "操作")])], -1)), (0, r.Lk)("tbody", null, [((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(n.filteredServers, e => ((0, r.uX)(), (0, r.CE)("tr", {key: e.id}, [(0, r.Lk)("td", null, (0, se.v_)(e.name), 1), (0, r.Lk)("td", null, (0, se.v_)(e.ip), 1), (0, r.Lk)("td", null, [(0, r.Lk)("div", fs, [(0, r.Lk)("div", {
                        class: "small-progress-bar",
                        style: (0, se.Tr)({width: e.cpu + "%", backgroundColor: n.getUsageColor(e.cpu)})
                    }, null, 4)]), (0, r.Lk)("span", null, (0, se.v_)(e.cpu) + "%", 1)]), (0, r.Lk)("td", null, [(0, r.Lk)("div", ys, [(0, r.Lk)("div", {
                        class: "small-progress-bar",
                        style: (0, se.Tr)({width: e.memory + "%", backgroundColor: n.getUsageColor(e.memory)})
                    }, null, 4)]), (0, r.Lk)("span", null, (0, se.v_)(e.memory) + "%", 1)]), (0, r.Lk)("td", null, [(0, r.Lk)("div", bs, [(0, r.Lk)("div", {
                        class: "small-progress-bar",
                        style: (0, se.Tr)({width: e.storage + "%", backgroundColor: n.getUsageColor(e.storage)})
                    }, null, 4)]), (0, r.Lk)("span", null, (0, se.v_)(e.storage) + "%", 1)]), (0, r.Lk)("td", null, [(0, r.Lk)("div", Cs, [(0, r.Lk)("div", {
                        class: "small-progress-bar",
                        style: (0, se.Tr)({width: e.gpu + "%", backgroundColor: n.getUsageColor(e.gpu)})
                    }, null, 4)]), (0, r.Lk)("span", null, (0, se.v_)(e.gpu) + "%", 1)]), (0, r.Lk)("td", null, [(0, r.Lk)("div", ws, [(0, r.Lk)("div", {
                        class: "small-progress-bar",
                        style: (0, se.Tr)({width: e.gpuMemory + "%", backgroundColor: n.getUsageColor(e.gpuMemory)})
                    }, null, 4)]), (0, r.Lk)("span", null, (0, se.v_)(e.gpuMemory) + "%", 1)]), (0, r.Lk)("td", null, [(0, r.Lk)("span", {style: (0, se.Tr)({color: e.availableGpuCount > 0 ? "#52c41a" : "#f5222d"})}, (0, se.v_)(e.availableGpuCount) + "/" + (0, se.v_)(e.gpuCount), 5)]), (0, r.Lk)("td", null, ["admin" === a.userRole ? ((0, r.uX)(), (0, r.CE)("select", {
                        key: 0,
                        class: "status-select",
                        value: e.status,
                        onChange: t => n.changeServerStatus(e.id, t.target.value)
                    }, [...t[18] || (t[18] = [(0, r.Lk)("option", {value: "online"}, "在线", -1), (0, r.Lk)("option", {value: "warning"}, "警告", -1), (0, r.Lk)("option", {value: "critical"}, "告警", -1)])], 40, As)) : ((0, r.uX)(), (0, r.CE)("span", {
                        key: 1,
                        class: (0, se.C4)(["status-badge", e.status])
                    }, (0, se.v_)(e.statusText), 3))]), t[19] || (t[19] = (0, r.Lk)("td", null, [(0, r.Lk)("button", {class: "view-details-button"}, "详情")], -1))]))), 128))])])])])])])]),
                    _: 1
                })
            }

            a(7588);
            var Us = {
                components: {MainLayout: Je},
                name: "ResourceMonitoring",
                props: {userRole: {type: String, required: !0}},
                data() {
                    return {
                        cpuUsage: 65,
                        memoryUsage: 78,
                        storageUsage: 45,
                        gpuUsage: 38.2,
                        networkTraffic: "1.2 GB/s",
                        incomingTraffic: "0.8 GB/s",
                        outgoingTraffic: "0.4 GB/s",
                        cpuTrend: "up",
                        cpuTrendValue: 2.5,
                        memoryTrend: "down",
                        memoryTrendValue: 1.2,
                        storageTrend: "up",
                        storageTrendValue: .8,
                        gpuTrend: "down",
                        gpuTrendValue: 1.2,
                        timeRange: "day",
                        alerts: [{
                            id: 1,
                            icon: "⚠️",
                            title: "CPU使用率过高",
                            details: "服务器 srv-prod-001 CPU使用率超过90%",
                            time: "5分钟前",
                            severity: "critical"
                        }, {
                            id: 2,
                            icon: "💾",
                            title: "存储空间不足",
                            details: "服务器 srv-test-005 存储空间使用率超过85%",
                            time: "30分钟前",
                            severity: "warning"
                        }, {
                            id: 3,
                            icon: "🌐",
                            title: "网络流量异常",
                            details: "服务器 srv-dev-010 网络流量异常增长",
                            time: "2小时前",
                            severity: "warning"
                        }],
                        servers: [{
                            id: 1,
                            name: "srv-prod-001",
                            ip: "192.168.1.101",
                            region: "图像处理",
                            status: "critical",
                            statusText: "告警",
                            cpu: 92,
                            memory: 75,
                            storage: 45,
                            gpu: 98,
                            gpuMemory: 85,
                            gpuCount: 4,
                            availableGpuCount: 0
                        }, {
                            id: 2,
                            name: "srv-prod-002",
                            ip: "192.168.1.102",
                            region: "三维重建",
                            status: "online",
                            statusText: "在线",
                            cpu: 45,
                            memory: 62,
                            storage: 58,
                            gpu: 35,
                            gpuMemory: 42,
                            gpuCount: 4,
                            availableGpuCount: 2
                        }, {
                            id: 3,
                            name: "srv-test-005",
                            ip: "192.168.2.5",
                            region: "目标检测",
                            status: "warning",
                            statusText: "警告",
                            cpu: 68,
                            memory: 72,
                            storage: 88,
                            gpu: 75,
                            gpuMemory: 68,
                            gpuCount: 2,
                            availableGpuCount: 1
                        }, {
                            id: 4,
                            name: "srv-dev-010",
                            ip: "192.168.3.10",
                            region: "三维重建",
                            status: "warning",
                            statusText: "警告",
                            cpu: 72,
                            memory: 65,
                            storage: 42,
                            gpu: 82,
                            gpuMemory: 78,
                            gpuCount: 4,
                            availableGpuCount: 0
                        }, {
                            id: 5,
                            name: "srv-prod-003",
                            ip: "192.168.1.103",
                            region: "图像处理",
                            status: "online",
                            statusText: "在线",
                            cpu: 38,
                            memory: 45,
                            storage: 62,
                            gpu: 25,
                            gpuMemory: 32,
                            gpuCount: 8,
                            availableGpuCount: 5
                        }],
                        searchTerm: "",
                        statusFilter: "all",
                        updateTimer: null
                    }
                },
                computed: {
                    filteredServers() {
                        return this.servers.filter(e => {
                            const t = e.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || e.ip.toLowerCase().includes(this.searchTerm.toLowerCase()) || e.region.toLowerCase().includes(this.searchTerm.toLowerCase()),
                                a = "all" === this.statusFilter || e.status === this.statusFilter;
                            return t && a
                        })
                    }, trendPaths() {
                        const e = {
                            cpu: "M0,100 Q50,80 100,70 T200,50 T300,60 T400,40 T500,30 T600,45",
                            memory: "M0,80 Q50,60 100,50 T200,40 T300,30 T400,35 T500,25 T600,30",
                            storage: "M0,60 Q50,50 100,45 T200,55 T300,48 T400,52 T500,40 T600,45",
                            gpu: "M0,40 Q50,50 100,45 T200,35 T300,30 T400,35 T500,25 T600,20"
                        };
                        return e
                    }, pieData() {
                        return {region1: 45, region2: 30, region3: 15, region4: 10}
                    }
                },
                methods: {
                    getUsageColor(e) {
                        return e >= 80 ? "#ff4d4f" : e >= 60 ? "#faad14" : "#52c41a"
                    }, changeTimeRange(e) {
                        this.timeRange = e
                    }, handleAlertAction(e) {
                        console.log("处理告警:", e), this.alerts = this.alerts.filter(t => t.id !== e)
                    }, filterServers() {
                    }, simulateDataUpdate() {
                        const e = 2 * (Math.random() - .5);
                        this.cpuUsage = Math.max(0, Math.min(100, this.cpuUsage + e)), this.cpuTrend = e > 0 ? "up" : "down", this.cpuTrendValue = Math.abs(e).toFixed(1);
                        const t = 1.5 * (Math.random() - .5);
                        this.memoryUsage = Math.max(0, Math.min(100, this.memoryUsage + t)), this.memoryTrend = t > 0 ? "up" : "down", this.memoryTrendValue = Math.abs(t).toFixed(1);
                        const a = .8 * (Math.random() - .5);
                        this.storageUsage = Math.max(0, Math.min(100, this.storageUsage + a)), this.storageTrend = a > 0 ? "up" : "down", this.storageTrendValue = Math.abs(a).toFixed(1);
                        const s = 1.2 * (Math.random() - .5);
                        this.gpuUsage = Math.max(0, Math.min(100, this.gpuUsage + s)), this.gpuTrend = s > 0 ? "up" : "down", this.gpuTrendValue = Math.abs(s).toFixed(1), this.servers.forEach(e => {
                            const t = 3 * (Math.random() - .5);
                            e.cpu = Math.max(0, Math.min(100, e.cpu + t));
                            const a = 2 * (Math.random() - .5);
                            e.memory = Math.max(0, Math.min(100, e.memory + a));
                            const s = 1 * (Math.random() - .5);
                            e.storage = Math.max(0, Math.min(100, e.storage + s));
                            const r = 2 * (Math.random() - .5);
                            e.gpu = Math.max(0, Math.min(100, e.gpu + r));
                            const l = 1.5 * (Math.random() - .5);
                            e.gpuMemory = Math.max(0, Math.min(100, e.gpuMemory + l));
                            const o = 60, n = e.gpu < o ? Math.floor((100 - e.gpu) / 100 * e.gpuCount) : 0;
                            e.availableGpuCount = Math.min(e.gpuCount, Math.max(0, n)), e.cpu >= 90 || e.memory >= 90 || e.storage >= 90 || e.gpu >= 90 ? (e.status = "critical", e.statusText = "告警") : e.cpu >= 70 || e.memory >= 70 || e.storage >= 80 || e.gpu >= 80 ? (e.status = "warning", e.statusText = "警告") : (e.status = "online", e.statusText = "在线")
                        })
                    }, changeServerStatus(e, t) {
                        const a = this.servers.find(t => t.id === e);
                        a && (a.status = t, a.statusText = "online" === t ? "在线" : "warning" === t ? "警告" : "告警", console.log(`服务器 ${a.name} 状态已更新为: ${a.statusText}`))
                    }, getAvailableGpuServers() {
                        return this.servers.filter(e => e.availableGpuCount > 0)
                    }
                },
                mounted() {
                    this.updateTimer = setInterval(() => {
                        this.simulateDataUpdate()
                    }, 5e3)
                },
                beforeUnmount() {
                    this.updateTimer && clearInterval(this.updateTimer)
                }
            };
            const Ps = (0, w.A)(Us, [["render", Ts], ["__scopeId", "data-v-151cc46f"]]);
            var Rs = Ps;
            const Ss = {class: "admin-requests-content"}, Ds = {class: "search-filter"},
                Ms = {class: "search-input-wrapper"}, qs = {class: "requests-table-container"},
                Gs = {class: "requests-table"}, Is = {class: "applicant"}, xs = {class: "score"},
                Es = {class: "score-container"}, zs = {class: "score-value"}, Xs = {class: "score-stars"},
                Qs = {class: "resource-info"}, Vs = {class: "resource-type"}, Fs = {class: "request-title"},
                Zs = {class: "request-status"}, Js = {class: "gpu-info"}, Ws = {key: 0, class: "gpu-details"},
                Bs = {key: 1, class: "no-gpu-assigned"}, Os = {key: 2, class: "no-gpu"}, js = {class: "actions"},
                Ys = ["onClick"], Ns = ["onClick"], Ks = ["onClick"], _s = ["onClick"], Hs = {class: "pagination"},
                $s = {class: "page-info"}, er = {class: "page-controls"}, tr = ["disabled"], ar = {class: "page-num"},
                sr = ["disabled"], rr = {class: "dialog-header"}, lr = {class: "dialog-body"},
                or = {class: "form-group"}, nr = ["value"], ir = {key: 0, class: "form-group"},
                ur = {class: "gpu-selection"}, cr = ["value"], dr = {class: "dialog-footer"}, pr = ["disabled"];

            function gr(e, t, a, l, o, n) {
                const i = (0, r.g2)("main-layout");
                return (0, r.uX)(), (0, r.Wv)(i, {"page-title": "申请列表"}, {
                    default: (0, r.k6)(() => [(0, r.Lk)("div", Ss, [(0, r.Lk)("div", Ds, [(0, r.Lk)("div", Ms, [(0, r.bo)((0, r.Lk)("input", {
                        type: "text",
                        "onUpdate:modelValue": t[0] || (t[0] = e => o.searchKeyword = e),
                        class: "search-input",
                        placeholder: "搜索申请人姓名、申请资源"
                    }, null, 512), [[s.Jo, o.searchKeyword]]), t[11] || (t[11] = (0, r.Lk)("span", {class: "search-icon"}, "🔍", -1))])]), (0, r.Lk)("div", qs, [(0, r.Lk)("table", Gs, [t[12] || (t[12] = (0, r.Lk)("thead", null, [(0, r.Lk)("tr", null, [(0, r.Lk)("th", null, "姓名"), (0, r.Lk)("th", null, "评分情况"), (0, r.Lk)("th", null, "申请资源"), (0, r.Lk)("th", null, "可用GPU"), (0, r.Lk)("th", null, "操作")])], -1)), (0, r.Lk)("tbody", null, [((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(n.filteredRequests, e => ((0, r.uX)(), (0, r.CE)("tr", {key: e.id}, [(0, r.Lk)("td", Is, (0, se.v_)(e.applicant), 1), (0, r.Lk)("td", xs, [(0, r.Lk)("div", Es, [(0, r.Lk)("span", zs, (0, se.v_)(e.score || 0), 1), (0, r.Lk)("div", Xs, [((0, r.uX)(), (0, r.CE)(r.FK, null, (0, r.pI)(5, t => (0, r.Lk)("span", {
                        key: t,
                        class: (0, se.C4)(["star", {active: t <= Math.floor(e.score / 2)}])
                    }, " ★ ", 2)), 64))])])]), (0, r.Lk)("td", Qs, [(0, r.Lk)("div", Vs, (0, se.v_)(n.getResourceTypeText(e.resourceType)), 1), (0, r.Lk)("div", Fs, (0, se.v_)(e.title), 1), (0, r.Lk)("div", Zs, [(0, r.Lk)("span", {class: (0, se.C4)(["status-badge", e.status])}, (0, se.v_)(n.getStatusText(e.status)), 3)])]), (0, r.Lk)("td", Js, [e.gpuInfo ? ((0, r.uX)(), (0, r.CE)("span", Ws, (0, se.v_)(e.gpuInfo.range) + " (" + (0, se.v_)(e.gpuInfo.count) + "张) ", 1)) : "approved" === e.status ? ((0, r.uX)(), (0, r.CE)("span", Bs, "待分配")) : ((0, r.uX)(), (0, r.CE)("span", Os, "无"))]), (0, r.Lk)("td", js, [(0, r.Lk)("button", {
                        class: "action-btn edit-btn",
                        onClick: t => n.editRequest(e.id),
                        title: "编辑"
                    }, " 编辑 ", 8, Ys), (0, r.Lk)("button", {
                        class: "action-btn view-btn",
                        onClick: t => n.viewRequestDetails(e.id),
                        title: "查看"
                    }, " 查看 ", 8, Ns), (0, r.Lk)("button", {
                        class: "action-btn delete-btn",
                        onClick: t => n.deleteRequest(e.id),
                        title: "删除"
                    }, " 删除 ", 8, Ks), "pending" === e.status ? ((0, r.uX)(), (0, r.CE)("button", {
                        key: 0,
                        class: "action-btn allocate-btn",
                        onClick: t => n.allocateServer(e.id),
                        title: "分配GPU"
                    }, " ⚡ ", 8, _s)) : (0, r.Q3)("", !0)])]))), 128))])])]), (0, r.Lk)("div", Hs, [(0, r.Lk)("div", $s, " 显示 " + (0, se.v_)((o.currentPage - 1) * o.pageSize + 1) + " - " + (0, se.v_)(Math.min(o.currentPage * o.pageSize, n.filteredRequests.length)) + " 条，共 " + (0, se.v_)(n.filteredRequests.length) + " 条 ", 1), (0, r.Lk)("div", er, [(0, r.Lk)("button", {
                        class: "page-btn",
                        disabled: 1 === o.currentPage,
                        onClick: t[1] || (t[1] = e => n.changePage(o.currentPage - 1))
                    }, "上一页", 8, tr), (0, r.Lk)("span", ar, (0, se.v_)(o.currentPage) + " / " + (0, se.v_)(Math.ceil(n.filteredRequests.length / o.pageSize)), 1), (0, r.Lk)("button", {
                        class: "page-btn",
                        disabled: o.currentPage === Math.ceil(n.filteredRequests.length / o.pageSize),
                        onClick: t[2] || (t[2] = e => n.changePage(o.currentPage + 1))
                    }, "下一页", 8, sr)])]), o.showAllocateDialog ? ((0, r.uX)(), (0, r.CE)("div", {
                        key: 0,
                        class: "dialog-overlay",
                        onClick: t[10] || (t[10] = (...e) => n.closeAllocateDialog && n.closeAllocateDialog(...e))
                    }, [(0, r.Lk)("div", {
                        class: "dialog-content", onClick: t[9] || (t[9] = (0, s.D$)(() => {
                        }, ["stop"]))
                    }, [(0, r.Lk)("div", rr, [t[13] || (t[13] = (0, r.Lk)("h3", null, "分配GPU", -1)), (0, r.Lk)("button", {
                        class: "close-btn",
                        onClick: t[3] || (t[3] = (...e) => n.closeAllocateDialog && n.closeAllocateDialog(...e))
                    }, "×")]), (0, r.Lk)("div", lr, [(0, r.Lk)("div", or, [t[15] || (t[15] = (0, r.Lk)("label", null, "选择服务器:", -1)), (0, r.bo)((0, r.Lk)("select", {
                        "onUpdate:modelValue": t[4] || (t[4] = e => o.selectedServerId = e),
                        class: "form-select"
                    }, [t[14] || (t[14] = (0, r.Lk)("option", {value: ""}, "请选择服务器", -1)), ((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(o.availableServers, e => ((0, r.uX)(), (0, r.CE)("option", {
                        key: e.id,
                        value: e.id
                    }, (0, se.v_)(e.name) + " (" + (0, se.v_)(e.ip) + ") - 可用显卡: " + (0, se.v_)(e.availableGpus.length) + "张 ", 9, nr))), 128))], 512), [[s.u1, o.selectedServerId]])]), n.selectedServer ? ((0, r.uX)(), (0, r.CE)("div", ir, [t[19] || (t[19] = (0, r.Lk)("label", null, "选择显卡范围:", -1)), (0, r.Lk)("div", ur, [(0, r.bo)((0, r.Lk)("select", {
                        "onUpdate:modelValue": t[5] || (t[5] = e => o.selectedGpuStart = e),
                        class: "form-select gpu-select"
                    }, [t[16] || (t[16] = (0, r.Lk)("option", {value: ""}, "起始显卡", -1)), ((0, r.uX)(!0), (0, r.CE)(r.FK, null, (0, r.pI)(n.selectedServer.availableGpus, e => ((0, r.uX)(), (0, r.CE)("option", {
                        key: e,
                        value: e
                    }, " 显卡 #" + (0, se.v_)(e), 9, cr))), 128))], 512), [[s.u1, o.selectedGpuStart]]), t[18] || (t[18] = (0, r.Lk)("span", {class: "gpu-separator"}, "至", -1)), (0, r.bo)((0, r.Lk)("select", {
                        "onUpdate:modelValue": t[6] || (t[6] = e => o.selectedGpuCount = e),
                        class: "form-select gpu-select"
                    }, [...t[17] || (t[17] = [(0, r.Lk)("option", {value: "1"}, "1张", -1), (0, r.Lk)("option", {value: "2"}, "2张", -1), (0, r.Lk)("option", {value: "3"}, "3张", -1), (0, r.Lk)("option", {value: "4"}, "4张", -1)])], 512), [[s.u1, o.selectedGpuCount]])])])) : (0, r.Q3)("", !0)]), (0, r.Lk)("div", dr, [(0, r.Lk)("button", {
                        class: "cancel-btn",
                        onClick: t[7] || (t[7] = (...e) => n.closeAllocateDialog && n.closeAllocateDialog(...e))
                    }, "取消"), (0, r.Lk)("button", {
                        class: "confirm-btn",
                        onClick: t[8] || (t[8] = (...e) => n.confirmAllocate && n.confirmAllocate(...e)),
                        disabled: !n.canAllocate
                    }, "确认分配", 8, pr)])])])) : (0, r.Q3)("", !0)])]), _: 1
                })
            }

            a(4114), a(1701);
            var vr = {
                name: "AdminRequests",
                components: {MainLayout: Je},
                props: {userRole: {type: String, default: "admin"}},
                data() {
                    return {
                        searchKeyword: "",
                        currentPage: 1,
                        pageSize: 10,
                        showAllocateDialog: !1,
                        selectedRequestId: null,
                        selectedServerId: "",
                        selectedGpuStart: "",
                        selectedGpuCount: "1",
                        requestsList: [{
                            id: "REQ20231120001",
                            title: "深度学习模型训练",
                            resourceType: "gpu",
                            status: "approved",
                            applyTime: "2023-11-20 09:30",
                            applicant: "张三",
                            score: 9.5,
                            allocatedServer: {name: "GPU服务器1", ip: "192.168.1.101"},
                            gpuInfo: {range: "0-3", count: 4}
                        }, {
                            id: "REQ20231115002",
                            title: "图像处理任务",
                            resourceType: "gpu",
                            status: "processing",
                            applyTime: "2023-11-15 14:20",
                            applicant: "李四",
                            score: 8.5,
                            allocatedServer: {name: "GPU服务器2", ip: "192.168.1.102"},
                            gpuInfo: {range: "0-1", count: 2}
                        }, {
                            id: "REQ20231110003",
                            title: "科学计算模拟",
                            resourceType: "gpu",
                            status: "pending",
                            applyTime: "2023-11-10 11:45",
                            applicant: "王五",
                            score: 9
                        }, {
                            id: "REQ20231105004",
                            title: "AI推理服务",
                            resourceType: "gpu",
                            status: "rejected",
                            applyTime: "2023-11-05 16:10",
                            applicant: "赵六",
                            score: 7.5
                        }, {
                            id: "REQ20231101005",
                            title: "大规模数据处理",
                            resourceType: "gpu",
                            status: "approved",
                            applyTime: "2023-11-01 10:00",
                            applicant: "孙七",
                            score: 8.8,
                            allocatedServer: {name: "GPU服务器3", ip: "192.168.1.103"},
                            gpuInfo: {range: "2-5", count: 4}
                        }, {
                            id: "REQ20231101006",
                            title: "机器学习训练",
                            resourceType: "gpu",
                            status: "pending",
                            applyTime: "2023-11-01 15:30",
                            applicant: "周八",
                            score: 9.2
                        }, {
                            id: "REQ20231101007",
                            title: "计算机视觉项目",
                            resourceType: "gpu",
                            status: "processing",
                            applyTime: "2023-11-02 09:15",
                            applicant: "吴九",
                            score: 8.7,
                            allocatedServer: {name: "GPU服务器4", ip: "192.168.1.104"},
                            gpuInfo: {range: "0-5", count: 6}
                        }, {
                            id: "REQ20231101008",
                            title: "自然语言处理",
                            resourceType: "gpu",
                            status: "approved",
                            applyTime: "2023-11-03 11:20",
                            applicant: "郑十",
                            score: 9.3,
                            allocatedServer: {name: "GPU服务器5", ip: "192.168.1.105"},
                            gpuInfo: {range: "4-7", count: 4}
                        }],
                        availableServers: [{
                            id: 1,
                            name: "GPU服务器1",
                            ip: "192.168.1.101",
                            gpuCount: 8,
                            availableGpus: [4, 5, 6, 7],
                            cpuUsage: 20,
                            memoryUsage: 25
                        }, {
                            id: 2,
                            name: "GPU服务器2",
                            ip: "192.168.1.102",
                            gpuCount: 8,
                            availableGpus: [2, 3, 4, 5, 6, 7],
                            cpuUsage: 25,
                            memoryUsage: 30
                        }, {
                            id: 3,
                            name: "GPU服务器3",
                            ip: "192.168.1.103",
                            gpuCount: 8,
                            availableGpus: [0, 1, 6, 7],
                            cpuUsage: 30,
                            memoryUsage: 20
                        }, {
                            id: 4,
                            name: "GPU服务器4",
                            ip: "192.168.1.104",
                            gpuCount: 8,
                            availableGpus: [6, 7],
                            cpuUsage: 15,
                            memoryUsage: 18
                        }, {
                            id: 5,
                            name: "GPU服务器5",
                            ip: "192.168.1.105",
                            gpuCount: 8,
                            availableGpus: [0, 1, 2, 3],
                            cpuUsage: 35,
                            memoryUsage: 32
                        }]
                    }
                },
                computed: {
                    filteredRequests() {
                        let e = this.requestsList;
                        if (this.searchKeyword) {
                            const t = this.searchKeyword.toLowerCase();
                            e = e.filter(e => e.applicant.toLowerCase().includes(t) || e.title.toLowerCase().includes(t))
                        }
                        return e
                    }, selectedServer() {
                        return this.availableServers.find(e => e.id === parseInt(this.selectedServerId))
                    }, canAllocate() {
                        return this.selectedServerId && this.selectedGpuStart && this.selectedGpuCount
                    }
                },
                methods: {
                    getStatusText(e) {
                        const t = {
                            pending: "待审核",
                            approved: "已批准",
                            rejected: "已拒绝",
                            processing: "处理中",
                            completed: "已完成"
                        };
                        return t[e] || e
                    }, getResourceTypeText(e) {
                        const t = {
                            server: "服务器",
                            gpu: "GPU资源",
                            storage: "存储",
                            software: "软件",
                            network: "网络"
                        };
                        return t[e] || e
                    }, changePage(e) {
                        this.currentPage = e
                    }, allocateServer(e) {
                        this.selectedRequestId = e, this.showAllocateDialog = !0
                    }, closeAllocateDialog() {
                        this.showAllocateDialog = !1, this.selectedRequestId = null, this.selectedServerId = "", this.selectedGpuStart = "", this.selectedGpuCount = "1"
                    }, confirmAllocate() {
                        if (!this.canAllocate) return;
                        const e = this.requestsList.find(e => e.id === this.selectedRequestId), t = this.selectedServer;
                        if (e && t) {
                            const a = parseInt(this.selectedGpuStart), s = parseInt(this.selectedGpuCount),
                                r = a + s - 1;
                            e.allocatedServer = {name: t.name, ip: t.ip}, e.gpuInfo = {
                                range: `${a}-${r}`,
                                count: s
                            }, e.status = "approved";
                            for (let e = a; e <= r; e++) {
                                const a = t.availableGpus.indexOf(e);
                                a > -1 && t.availableGpus.splice(a, 1)
                            }
                            alert(`GPU分配成功！\n申请人: ${e.applicant}\n服务器: ${t.name}\n显卡范围: ${a}-${r}`), this.closeAllocateDialog()
                        }
                    }, viewRequestDetails(e) {
                        const t = this.requestsList.find(t => t.id === e);
                        t && alert(`申请详情：\n\n申请人: ${t.applicant}\n申请项目: ${t.title}\n资源类型: ${this.getResourceTypeText(t.resourceType)}\n状态: ${this.getStatusText(t.status)}\n评分: ${t.score}\n申请时间: ${t.applyTime}${t.gpuInfo ? `\n分配显卡: ${t.gpuInfo.range} (${t.gpuInfo.count}张)` : ""}`)
                    }, editRequest(e) {
                        const t = this.requestsList.find(t => t.id === e);
                        t && alert(`编辑功能待实现\n\n申请人: ${t.applicant}\n申请项目: ${t.title}\n状态: ${this.getStatusText(t.status)}`)
                    }, deleteRequest(e) {
                        if (confirm("确定要删除这个申请吗？此操作不可撤销。")) {
                            const t = this.requestsList.findIndex(t => t.id === e);
                            if (t > -1) {
                                const e = this.requestsList[t];
                                if (e.allocatedServer && e.gpuInfo) {
                                    const t = this.availableServers.find(t => t.name === e.allocatedServer.name);
                                    if (t) {
                                        const [a, s] = e.gpuInfo.range.split("-").map(Number);
                                        for (let e = a; e <= s; e++) t.availableGpus.includes(e) || t.availableGpus.push(e);
                                        t.availableGpus.sort((e, t) => e - t)
                                    }
                                }
                                this.requestsList.splice(t, 1), alert("申请已删除")
                            }
                        }
                    }
                }
            };
            const mr = (0, w.A)(vr, [["render", gr], ["__scopeId", "data-v-2a9182ab"]]);
            var kr = mr, Lr = {
                name: "App",
                components: {
                    LoginPage: T,
                    RegisterPage: V,
                    ResetPasswordPage: ae,
                    Navigation: de,
                    ResourceRequest: xa,
                    ResourceMonitoring: Rs,
                    ServerManagement: Oe,
                    AdminRequests: kr
                },
                data() {
                    return {currentPage: "login", currentModule: "resource", username: "管理员", userRole: ""}
                },
                methods: {
                    goToRegister() {
                        this.currentPage = "register"
                    }, goToReset() {
                        this.currentPage = "reset"
                    }, goToLogin() {
                        this.currentPage = "login"
                    }, handleLoginSuccess(e) {
                        this.username = e.username || "管理员", this.userRole = e.role || "user", "admin" === this.userRole ? (this.currentPage = "main", this.currentModule = "monitor") : (this.currentPage = "main", this.currentModule = "resource")
                    }, handleNavigate(e) {
                        this.currentModule = e
                    }, handleLogout() {
                        this.currentPage = "login", console.log("用户已退出登录")
                    }
                }
            };
            const hr = (0, w.A)(Lr, [["render", o]]);
            var fr = hr;
            (0, s.Ef)(fr).mount("#app")
        }
    }, t = {};

    function a(s) {
        var r = t[s];
        if (void 0 !== r) return r.exports;
        var l = t[s] = {exports: {}};
        return e[s].call(l.exports, l, l.exports, a), l.exports
    }

    a.m = e, function () {
        var e = [];
        a.O = function (t, s, r, l) {
            if (!s) {
                var o = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    s = e[c][0], r = e[c][1], l = e[c][2];
                    for (var n = !0, i = 0; i < s.length; i++) (!1 & l || o >= l) && Object.keys(a.O).every(function (e) {
                        return a.O[e](s[i])
                    }) ? s.splice(i--, 1) : (n = !1, l < o && (o = l));
                    if (n) {
                        e.splice(c--, 1);
                        var u = r();
                        void 0 !== u && (t = u)
                    }
                }
                return t
            }
            l = l || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > l; c--) e[c] = e[c - 1];
            e[c] = [s, r, l]
        }
    }(), function () {
        a.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return a.d(t, {a: t}), t
        }
    }(), function () {
        a.d = function (e, t) {
            for (var s in t) a.o(t, s) && !a.o(e, s) && Object.defineProperty(e, s, {enumerable: !0, get: t[s]})
        }
    }(), function () {
        a.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }()
    }(), function () {
        a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(), function () {
        var e = {524: 0};
        a.O.j = function (t) {
            return 0 === e[t]
        };
        var t = function (t, s) {
            var r, l, o = s[0], n = s[1], i = s[2], u = 0;
            if (o.some(function (t) {
                return 0 !== e[t]
            })) {
                for (r in n) a.o(n, r) && (a.m[r] = n[r]);
                if (i) var c = i(a)
            }
            for (t && t(s); u < o.length; u++) l = o[u], a.o(e, l) && e[l] && e[l][0](), e[l] = 0;
            return a.O(c)
        }, s = self["webpackChunkmanager_sys"] = self["webpackChunkmanager_sys"] || [];
        s.forEach(t.bind(null, 0)), s.push = t.bind(null, s.push.bind(s))
    }();
    var s = a.O(void 0, [504], function () {
        return a(1119)
    });
    s = a.O(s)
})();
//# sourceMappingURL=app.26c97996.js.map