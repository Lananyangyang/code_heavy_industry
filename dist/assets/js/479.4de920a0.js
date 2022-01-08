(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{2220:function(t,a,s){"use strict";s.r(a);var n=s(54),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1、校验概述"}},[t._v("1、校验概述")])]),s("li",[s("a",{attrs:{href:"#_2、操作演示"}},[t._v("2、操作演示")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1导入依赖"}},[t._v("①导入依赖")])]),s("li",[s("a",{attrs:{href:"#_2应用校验规则"}},[t._v("②应用校验规则")])]),s("li",[s("a",{attrs:{href:"#_3显示友好的错误提示"}},[t._v("③显示友好的错误提示")])])])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"第四节-数据校验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四节-数据校验"}},[t._v("#")]),t._v(" 第四节 数据校验")]),t._v(" "),s("p",[t._v("在 Web 应用三层架构体系中，表述层负责接收浏览器提交的数据，业务逻辑层负责数据的处理。为了能够让业务逻辑层基于正确的数据进行处理，我们需要在表述层对数据进行检查，将错误的数据隔绝在业务逻辑层之外。")]),t._v(" "),s("h2",{attrs:{id:"_1、校验概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、校验概述"}},[t._v("#")]),t._v(" 1、校验概述")]),t._v(" "),s("p",[t._v("JSR 303 是 Java 为 Bean 数据 hé fǎ 性校验提供的标准框架，它已经包含在 JavaEE 6.0 标准中。JSR 303 通过在 Bean 属性上标注类似于 @NotNull、@Max 等标准的注解指定校验规则，并通过标准的验证接口对Bean进行验证。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("注解")]),t._v(" "),s("th",[t._v("规则")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("@Null")]),t._v(" "),s("td",[t._v("标注值必须为 null")])]),t._v(" "),s("tr",[s("td",[t._v("@NotNull")]),t._v(" "),s("td",[t._v("标注值不可为 null")])]),t._v(" "),s("tr",[s("td",[t._v("@AssertTrue")]),t._v(" "),s("td",[t._v("标注值必须为 true")])]),t._v(" "),s("tr",[s("td",[t._v("@AssertFalse")]),t._v(" "),s("td",[t._v("标注值必须为 false")])]),t._v(" "),s("tr",[s("td",[t._v("@Min(value)")]),t._v(" "),s("td",[t._v("标注值必须大于或等于 value")])]),t._v(" "),s("tr",[s("td",[t._v("@Max(value)")]),t._v(" "),s("td",[t._v("标注值必须小于或等于 value")])]),t._v(" "),s("tr",[s("td",[t._v("@DecimalMin(value)")]),t._v(" "),s("td",[t._v("标注值必须大于或等于 value")])]),t._v(" "),s("tr",[s("td",[t._v("@DecimalMax(value)")]),t._v(" "),s("td",[t._v("标注值必须小于或等于 value")])]),t._v(" "),s("tr",[s("td",[t._v("@Size(max,min)")]),t._v(" "),s("td",[t._v("标注值大小必须在 max 和 min 限定的范围内")])]),t._v(" "),s("tr",[s("td",[t._v("@Digits(integer,fratction)")]),t._v(" "),s("td",[t._v("标注值值必须是一个数字，且必须在可接受的范围内")])]),t._v(" "),s("tr",[s("td",[t._v("@Past")]),t._v(" "),s("td",[t._v("标注值只能用于日期型，且必须是过去的日期")])]),t._v(" "),s("tr",[s("td",[t._v("@Future")]),t._v(" "),s("td",[t._v("标注值只能用于日期型，且必须是将来的日期")])]),t._v(" "),s("tr",[s("td",[t._v("@Pattern(value)")]),t._v(" "),s("td",[t._v("标注值必须符合指定的正则表达式")])])])]),t._v(" "),s("p",[t._v("JSR 303 只是一套标准，需要提供其实现才可以使用。Hibernate Validator 是 JSR 303 的一个参考实现，除支持所有标准的校验注解外，它还支持以下的扩展注解：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("注解")]),t._v(" "),s("th",[t._v("规则")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("@Email")]),t._v(" "),s("td",[t._v("标注值必须是格式正确的 Email 地址")])]),t._v(" "),s("tr",[s("td",[t._v("@Length")]),t._v(" "),s("td",[t._v("标注值字符串大小必须在指定的范围内")])]),t._v(" "),s("tr",[s("td",[t._v("@NotEmpty")]),t._v(" "),s("td",[t._v("标注值字符串不能是空字符串")])]),t._v(" "),s("tr",[s("td",[t._v("@Range")]),t._v(" "),s("td",[t._v("标注值必须在指定的范围内")])])])]),t._v(" "),s("p",[t._v("Spring 4.0 版本已经拥有自己独立的数据校验框架，同时支持 JSR 303 标准的校验框架。Spring 在进行数据绑定时，可同时调用校验框架完成数据校验工作。在SpringMVC 中，可直接通过注解驱动 mvc:annotation-driven 的方式进行数据校验。Spring 的 LocalValidatorFactoryBean 既实现了 Spring 的 Validator 接口，也实现了 JSR 303 的 Validator 接口。只要在Spring容器中定义了一个LocalValidatorFactoryBean，即可将其注入到需要数据校验的 Bean中。Spring本身并没有提供JSR 303的实现，所以必须将JSR 303的实现者的jar包放到类路径下。")]),t._v(" "),s("p",[t._v("配置 mvc:annotation-driven 后，SpringMVC 会默认装配好一个 LocalValidatorFactoryBean，通过"),s("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("在处理方法的入参上标注 @Validated 注解")]),t._v("即可让 SpringMVC 在完成数据绑定后执行数据校验的工作。")]),t._v(" "),s("h2",{attrs:{id:"_2、操作演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、操作演示"}},[t._v("#")]),t._v(" 2、操作演示")]),t._v(" "),s("p",[t._v("请在 SpringMVC 环境基础上做下面的操作：")]),t._v(" "),s("h3",{attrs:{id:"_1导入依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1导入依赖"}},[t._v("#")]),t._v(" ①导入依赖")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- https://mvnrepository.com/artifact/org.hibernate.validator/hibernate-validator --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.hibernate.validator"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hibernate-validator"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("6.2.0.Final"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- https://mvnrepository.com/artifact/org.hibernate.validator/hibernate-validator-annotation-processor --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.hibernate.validator"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hibernate-validator-annotation-processor"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("6.2.0.Final"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("注：需要 Tomcat 版本至少是 8。并不是说 Tomcat 6 不能做 SpringMVC 的数据校验，而是所需依赖不同。")]),t._v(" "),s("h3",{attrs:{id:"_2应用校验规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2应用校验规则"}},[t._v("#")]),t._v(" ②应用校验规则")]),t._v(" "),s("h4",{attrs:{id:"_1-标记规则注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-标记规则注解"}},[t._v("#")]),t._v(" [1]标记规则注解")]),t._v(" "),s("p",[t._v("在实体类中需要附加校验规则的成员变量上标记校验规则注解：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字符串长度：[3,6]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字符串必须满足Email格式")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Email")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h4",{attrs:{id:"_2-在handler-方法形参标记注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在handler-方法形参标记注解"}},[t._v("#")]),t._v(" [2]在handler 方法形参标记注解")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/save/person"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveperson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Validated")]),t._v(" person person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n    logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h4",{attrs:{id:"_3-校验失败效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-校验失败效果"}},[t._v("#")]),t._v(" [3]校验失败效果")]),t._v(" "),s("p",[t._v("日志：")]),t._v(" "),s("blockquote",[s("p",[t._v("Field error in object 'person' on field 'email': rejected value [aa]; codes [Email.person.email,Email.email,Email.java.lang.String,Email]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [person.email,email]; arguments []; default message [email],[Ljavax.validation.constraints.Pattern$Flag;@4a6addb7,.*]; default message [不是一个 hé fǎ 的电子邮件地址]\nField error in object 'person' on field 'email': rejected value [aa]; codes [Size.person.email,Size.email,Size.java.lang.String,Size]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [person.email,email]; arguments []; default message [email],6,3]; default message [个数必须在3和6之间]]]")])]),t._v(" "),s("p",[t._v("同时页面返回 400。")]),t._v(" "),s("h3",{attrs:{id:"_3显示友好的错误提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3显示友好的错误提示"}},[t._v("#")]),t._v(" ③显示友好的错误提示")]),t._v(" "),s("h4",{attrs:{id:"_1-重构-handler-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-重构-handler-方法"}},[t._v("#")]),t._v(" [1]重构 handler 方法")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/save/person"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("savePerson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n         \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在实体类参数和 BindingResult 之间不能有任何其他参数")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Validated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BindingResult")]),t._v(" bindingResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bindingResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasErrors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     \n    logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("h4",{attrs:{id:"_2-准备错误信息页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备错误信息页面"}},[t._v("#")]),t._v(" [2]准备错误信息页面")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("系统信息"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 从请求域获取实体类信息时，属性名是按照类名首字母小写的规则 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ${注入请求参数的实体类.出问题的字段} --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("th:")]),t._v("errors")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${person.email}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这里显示系统提示消息"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("RouterLink",{attrs:{to:"/pro005-SpringMVC/lecture/chapter04/verse03.html"}},[t._v("上一节")]),t._v(" "),s("RouterLink",{attrs:{to:"/pro005-SpringMVC/lecture/chapter04/index.html"}},[t._v("回目录")]),t._v(" "),s("RouterLink",{attrs:{to:"/pro005-SpringMVC/lecture/chapter04/verse05.html"}},[t._v("下一节")])],1)])}),[],!1,null,null,null);a.default=e.exports}}]);