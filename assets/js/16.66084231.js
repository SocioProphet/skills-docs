(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{378:function(t,s,a){t.exports=a.p+"assets/img/ProdInstall-Pass.465072bf.jpg"},379:function(t,s,a){t.exports=a.p+"assets/img/ProdInstall-Pki.0a5de3f9.jpg"},450:function(t,s,a){"use strict";a.r(s);var e=a(43),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"production-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#production-installation"}},[t._v("#")]),t._v(" Production Installation")]),t._v(" "),e("p",[t._v("SkillTree encourages a high-availability and horizontally scalable production installation.\nTo achieve both of these goals, multiple instances of skills-service must be installed on different nodes/instances.\nEach skills-service node will have the same configuration and is designed to scale-up or scale down horizontally.\nYou can add or remove instances any time.")]),t._v(" "),e("import-content",{attrs:{path:"/dashboard/install-guide/common/install-tip.html"}}),t._v(" "),e("p",[t._v("There are two installation modes:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/dashboard/install-guide/prodInstall.html#password-auth-mode-install"}},[t._v("Password Auth Mode")]),t._v(": Accounts created and managed by SkillTree and/or delegated to OAuth2 authentication provider (ex. GitHub, Google, etc..)")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/dashboard/install-guide/prodInstall.html#pki-auth-mode-install"}},[t._v("PKI Auth Mode")]),t._v(": PKI Mode is for intranets where organizations utilize PKI with 2-way SSL certificates to implement authentication and authorization. User's browser must be setup with a personal PKI certificate and that certificate must be issued by a Certificate Authority trusted in the dashboard application's truststore.")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Definitely use Password Auth Mode if you are not sure which mode is applicable to you.")])]),t._v(" "),e("h2",{attrs:{id:"password-auth-mode-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#password-auth-mode-install"}},[t._v("#")]),t._v(" Password Auth Mode Install")]),t._v(" "),e("import-content",{attrs:{path:"/dashboard/install-guide/common/install-type-intro.html"}}),t._v(" "),e("p",[e("img",{attrs:{src:a(378),alt:"Production Installation for Pass Auth Mode"}})]),t._v(" "),e("import-content",{attrs:{path:"/dashboard/install-guide/common/services-explanations.html"}}),t._v(" "),e("p",[e("strong",[t._v("4: Redis:")]),t._v(" Required for clustered skills-service deployment to persist HttpSession")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis"),e("OutboundLink")],1),t._v("'s installation, setup and management is outside of the scope of this section, please visit "),e("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://redis.io/"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"auth-mode-skills-service-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auth-mode-skills-service-configuration"}},[t._v("#")]),t._v(" Auth Mode skills-service Configuration")]),t._v(" "),e("import-content",{attrs:{path:"/dashboard/install-guide/common/prod-install-basic-config.html"}}),t._v(" "),e("import-content",{attrs:{path:"/dashboard/install-guide/common/ssl-props.html"}}),t._v(" "),e("import-content",{attrs:{path:"/dashboard/install-guide/common/prod-install-basic-jvm-props.html"}}),t._v(" "),e("h2",{attrs:{id:"pki-auth-mode-install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pki-auth-mode-install"}},[t._v("#")]),t._v(" PKI Auth Mode Install")]),t._v(" "),e("import-content",{attrs:{path:"/dashboard/install-guide/common/install-type-intro.html"}}),t._v(" "),e("p",[e("img",{attrs:{src:a(379),alt:"Production Installation for Pass PKI Mode"}})]),t._v(" "),e("import-content",{attrs:{path:"/dashboard/install-guide/common/services-explanations.html"}}),t._v(" "),e("p",[e("strong",[t._v("4: User Info Service")]),t._v(" - Provides user information based on PKI's Distinguished Name (DN)")]),t._v(" "),e("ul",[e("li",[t._v("You are responsible for implementing this service, please visit the "),e("RouterLink",{attrs:{to:"/dashboard/install-guide/installModes.html#user-info-service"}},[t._v("User Info Service")]),t._v(" section to learn more.")],1),t._v(" "),e("li",[t._v("Make sure to run it in High Availibility mode")])]),t._v(" "),e("h3",{attrs:{id:"pki-mode-skills-service-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pki-mode-skills-service-configuration"}},[t._v("#")]),t._v(" PKI Mode skills-service configuration")]),t._v(" "),e("import-content",{attrs:{path:"/dashboard/install-guide/common/prod-install-basic-config.html"}}),t._v(" "),e("p",[t._v("Enable PKI mode install:")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("skills.authorization.authMode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("PKI")]),t._v("\n")])])]),e("import-content",{attrs:{path:"/dashboard/install-guide/common/two-way-ssl-props.html"}}),t._v(" "),e("p",[e("code",[t._v("User Info Service")]),t._v(" client properties:\n"),e("import-content",{attrs:{path:"/dashboard/install-guide/common/user-info-service-props-endpoints.html"}})],1),t._v(" "),e("p",[t._v("If "),e("code",[t._v("User Info Service")]),t._v(" utilizes 2-way SSL then add the following client authentication properties (Java System Properties):\n"),e("import-content",{attrs:{path:"/dashboard/install-guide/common/user-info-service-props-ssl.html"}})],1),t._v(" "),e("import-content",{attrs:{path:"/dashboard/install-guide/common/prod-install-basic-jvm-props.html"}})],1)}),[],!1,null,null,null);s.default=i.exports}}]);