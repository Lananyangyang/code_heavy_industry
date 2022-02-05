(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1012:function(s,t,a){s.exports=a.p+"assets/img/img010.b89a0f0a.png"},1013:function(s,t,a){s.exports=a.p+"assets/img/img004.ec6bcaeb.png"},1014:function(s,t,a){s.exports=a.p+"assets/img/img005.2b29099f.png"},1015:function(s,t,a){s.exports=a.p+"assets/img/img006.8e2679cb.png"},2226:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1、在整个应用中属性域的重要作用"}},[s._v("1、在整个应用中属性域的重要作用")])]),n("li",[n("a",{attrs:{href:"#_2、请求域操作方式"}},[s._v("2、请求域操作方式")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1使用-model-类型的形参"}},[s._v("①使用 Model 类型的形参")])]),n("li",[n("a",{attrs:{href:"#_2使用-modelmap-类型的形参"}},[s._v("②使用 ModelMap 类型的形参")])]),n("li",[n("a",{attrs:{href:"#_3使用-map-类型的形参"}},[s._v("③使用 Map 类型的形参")])]),n("li",[n("a",{attrs:{href:"#_4使用原生-request-对象"}},[s._v("④使用原生 request 对象")])]),n("li",[n("a",{attrs:{href:"#_5使用-modelandview-对象"}},[s._v("⑤使用 ModelAndView 对象")])])])]),n("li",[n("a",{attrs:{href:"#_3、模型的本质"}},[s._v("3、模型的本质")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1bindingawaremodelmap"}},[s._v("①BindingAwareModelMap")])]),n("li",[n("a",{attrs:{href:"#_2它们之间的关系"}},[s._v("②它们之间的关系")])])])]),n("li",[n("a",{attrs:{href:"#_4、框架底层将模型存入请求域"}},[s._v("4、框架底层将模型存入请求域")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1最终找到的源码位置"}},[s._v("①最终找到的源码位置")])]),n("li",[n("a",{attrs:{href:"#_2过程中值得关注的点"}},[s._v("②过程中值得关注的点")])])])]),n("li",[n("a",{attrs:{href:"#_5、会话域"}},[s._v("5、会话域")])]),n("li",[n("a",{attrs:{href:"#_6、应用域"}},[s._v("6、应用域")])])])]),n("p"),s._v(" "),n("h1",{attrs:{id:"第二节-属性域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二节-属性域"}},[s._v("#")]),s._v(" 第二节 属性域")]),s._v(" "),n("h2",{attrs:{id:"_1、在整个应用中属性域的重要作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、在整个应用中属性域的重要作用"}},[s._v("#")]),s._v(" 1、在整个应用中属性域的重要作用")]),s._v(" "),n("p",[s._v("[参考资料]("),n("a",{attrs:{href:"http://heavy_code_industry.gitee.io/code_heavy_industry/pro001-javaweb/lecture/bookstore05/verse03.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("verse03 (gitee.io)"),n("OutboundLink")],1),s._v(")")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1012),alt:"./images"}})]),s._v(" "),n("h2",{attrs:{id:"_2、请求域操作方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、请求域操作方式"}},[s._v("#")]),s._v(" 2、请求域操作方式")]),s._v(" "),n("h3",{attrs:{id:"_1使用-model-类型的形参"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1使用-model-类型的形参"}},[s._v("#")]),s._v(" ①使用 Model 类型的形参")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/attr/request/model"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("testAttrRequestModel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在形参位置声明Model类型变量，用于存储模型数据")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Model")]),s._v(" model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 我们将数据存入模型，SpringMVC 会帮我们把模型数据存入请求域")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存入请求域这个动作也被称为暴露到请求域")]),s._v("\n    model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"requestScopeMessageModel"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i am very happy[model]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"_2使用-modelmap-类型的形参"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2使用-modelmap-类型的形参"}},[s._v("#")]),s._v(" ②使用 ModelMap 类型的形参")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/attr/request/model/map"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("testAttrRequestModelMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在形参位置声明ModelMap类型变量，用于存储模型数据")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ModelMap")]),s._v(" modelMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 我们将数据存入模型，SpringMVC 会帮我们把模型数据存入请求域")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存入请求域这个动作也被称为暴露到请求域")]),s._v("\n    modelMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"requestScopeMessageModelMap"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i am very happy[model map]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"_3使用-map-类型的形参"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3使用-map-类型的形参"}},[s._v("#")]),s._v(" ③使用 Map 类型的形参")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/attr/request/map"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("testAttrRequestMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在形参位置声明Map类型变量，用于存储模型数据")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 我们将数据存入模型，SpringMVC 会帮我们把模型数据存入请求域")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存入请求域这个动作也被称为暴露到请求域")]),s._v("\n    map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"requestScopeMessageMap"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i am very happy[map]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"_4使用原生-request-对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4使用原生-request-对象"}},[s._v("#")]),s._v(" ④使用原生 request 对象")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/attr/request/original"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("testAttrOriginalRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 拿到原生对象，就可以调用原生方法执行各种操作")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpServletRequest")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"requestScopeMessageOriginal"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i am very happy[original]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"_5使用-modelandview-对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5使用-modelandview-对象"}},[s._v("#")]),s._v(" ⑤使用 ModelAndView 对象")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/attr/request/mav"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ModelAndView")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("testAttrByModelAndView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.创建ModelAndView对象")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ModelAndView")]),s._v(" modelAndView "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ModelAndView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2.存入模型数据")]),s._v("\n    modelAndView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addObject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"requestScopeMessageMAV"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i am very happy[mav]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3.设置视图名称")]),s._v("\n    modelAndView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setViewName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" modelAndView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h2",{attrs:{id:"_3、模型的本质"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、模型的本质"}},[s._v("#")]),s._v(" 3、模型的本质")]),s._v(" "),n("h3",{attrs:{id:"_1bindingawaremodelmap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1bindingawaremodelmap"}},[s._v("#")]),s._v(" ①BindingAwareModelMap")]),s._v(" "),n("p",[s._v("SpringMVC 传入的 Model、ModelMap、Map类型的参数其实本质上都是 BindingAwareModelMap 类型的。")]),s._v(" "),n("h3",{attrs:{id:"_2它们之间的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2它们之间的关系"}},[s._v("#")]),s._v(" ②它们之间的关系")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1013),alt:"./images"}})]),s._v(" "),n("h2",{attrs:{id:"_4、框架底层将模型存入请求域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、框架底层将模型存入请求域"}},[s._v("#")]),s._v(" 4、框架底层将模型存入请求域")]),s._v(" "),n("h3",{attrs:{id:"_1最终找到的源码位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1最终找到的源码位置"}},[s._v("#")]),s._v(" ①最终找到的源码位置")]),s._v(" "),n("p",[s._v("所在类：org.thymeleaf.context.WebEngineContext 的内部类 RequestAttributesVariablesMap")]),s._v(" "),n("p",[s._v("所在方法：setVariable(String name, Object value)")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1014),alt:"./images"}})]),s._v(" "),n("h3",{attrs:{id:"_2过程中值得关注的点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2过程中值得关注的点"}},[s._v("#")]),s._v(" ②过程中值得关注的点")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1015),alt:"./images"}})]),s._v(" "),n("h2",{attrs:{id:"_5、会话域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、会话域"}},[s._v("#")]),s._v(" 5、会话域")]),s._v(" "),n("p",[s._v("使用会话域最简单直接的办法就是使用原生的 HttpSession 对象")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/attr/session"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("attrSession")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用会话域最简单直接的办法就是使用原生的 HttpSession 对象")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpSession")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionScopeMessage"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i am haha ..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_6、应用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、应用域"}},[s._v("#")]),s._v(" 6、应用域")]),s._v(" "),n("p",[s._v("应用域同样是使用原生对象来操作：")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServletContext")]),s._v(" servletContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/attr/application"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("attrApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    servletContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appScopeMsg"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i am hungry..."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[n("RouterLink",{attrs:{to:"/pro005-SpringMVC/lecture/chapter02/verse01.html"}},[s._v("上一节")]),s._v(" "),n("RouterLink",{attrs:{to:"/pro005-SpringMVC/lecture/chapter02/index.html"}},[s._v("回目录")]),s._v(" "),n("RouterLink",{attrs:{to:"/pro005-SpringMVC/lecture/chapter02/verse03.html"}},[s._v("下一节")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);