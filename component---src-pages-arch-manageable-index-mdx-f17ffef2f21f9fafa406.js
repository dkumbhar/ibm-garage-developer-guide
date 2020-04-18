(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{XWU7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return m}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z"),i=n("T0C+");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l,s={},p=(l="PageDescription",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),c={_frontmatter:s},b=o.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(b,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(p,{mdxType:"PageDescription"},Object(a.b)("p",null,"Develop applications that can be managed well in production")),Object(a.b)("p",null,"The ",Object(a.b)(i.a,{name:"env",mdxType:"Globals"})," is designed to support best practices for developing cloud-native applications that can be managed well in production, known as ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/build-to-manage"}),"built to manage"),". Such components implement endpoints to make them manageable:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Health"),": The component provides a ",Object(a.b)("inlineCode",{parentName:"li"},"/health")," endpoint that answers whether it’s running successfully, ",Object(a.b)("inlineCode",{parentName:"li"},"UP")," or ",Object(a.b)("inlineCode",{parentName:"li"},"DOWN"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Metrics"),": The component provides a ",Object(a.b)("inlineCode",{parentName:"li"},"/metrics")," endpoint that answers measurements of both the system and application."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Readiness"),": Kubernetes verifies whether a pod is ready to start receiving traffic, typically by probing the component’s ",Object(a.b)("inlineCode",{parentName:"li"},"/health")," endpoint."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Liveness"),": Kubernetes verifies whether a pod should be restarted, typically by probing the component’s ",Object(a.b)("inlineCode",{parentName:"li"},"/health")," endpoint.\nKubernetes and the environment’s Ops tools for monitoring use these endpoints to report the status of the application’s components, which can be used to make the applications self-healing.")),Object(a.b)("p",null,"Another important feature is for components to log a history of their significant actions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Logging"),": Log status to ",Object(a.b)("inlineCode",{parentName:"li"},"stdout")," indicating level of severity (such as ",Object(a.b)("inlineCode",{parentName:"li"},"info"),", ",Object(a.b)("inlineCode",{parentName:"li"},"debug"),", ",Object(a.b)("inlineCode",{parentName:"li"},"warn"),", ",Object(a.b)("inlineCode",{parentName:"li"},"error"),", and ",Object(a.b)("inlineCode",{parentName:"li"},"fatal"),").")),Object(a.b)("p",null,"The environment’s Ops tools for logging will gather and display this history."),Object(a.b)("p",null,"An easy way to get started with this architecture is by using one of the ",Object(a.b)("a",r({parentName:"p"},{href:"/codepatterns/overview"}),Object(a.b)(i.a,{name:"templates",mdxType:"Globals"}))," to create the skeleton for each microservice."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-arch-manageable-index-mdx-f17ffef2f21f9fafa406.js.map