(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{V2Bb:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return r})),o.d(t,"default",(function(){return b}));o("91GP"),o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("q1tI");var a=o("7ljp"),n=o("013z");o("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}var r={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},s=p("PageDescription"),c=p("AnchorLinks"),l=p("AnchorLink"),u={_frontmatter:r},d=n.a;function b(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,["components"]);return Object(a.b)(d,i({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"PageDescription"},Object(a.b)("p",null,"Use App ID to authenticate application clients and users")),Object(a.b)("h2",null,"Overview"),Object(a.b)("p",null,"IBM Garage for Cloud Developer Tools provides a set of tools to speed development of applications built for Kubernetes or OpenShift, using agile DevOps processes."),Object(a.b)("p",null,"No matter what kind of applications you’re building, whether you want to leverage Service Mesh, Ingress Controller, or simply use application SDKs, AppID can be used to help secure you application experience."),Object(a.b)("p",null," You can easily use App ID for all these scenarios easily add user authentication to your app, protecting applications running on Kubernetes or OpenShift clusters, getting administrative and authentication events in Activity Tracker."),Object(a.b)("h2",null,"What is App ID"),Object(a.b)("p",null,Object(a.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/appid"}),"IBM Cloud App ID")," is an IBM Cloud service that enables developers to easily add authentication capabilities to their applications while all the operational aspects of the service are handled by the IBM Cloud platform. App ID is intended to enable developers to add authentication to their application without having to know anything about various security protocols. The service provides capabilities like Cloud Directory (a highly scalable user repository in the cloud), enterprise identity federation, social login, SSO, customizable Login Widget UI, flexible access controls and user profiles, multi-factor authentication, a set of open-sourced SDKs for easy app instrumentation."),Object(a.b)("h2",null,"Setting up Security"),Object(a.b)("p",null,"Setting up application security can be complicated. For most developers, it can be one of the hardest parts of creating an app. How can you be sure that you are securely storing your users’ information? How can you be sure your system cannot be infiltrated? How do you manage access controls? How do you ensure that you address any and all vulnerabilities? What if your application runs on different cloud providers with completely different security systems?"),Object(a.b)("p",null,"In most cases, developers prefer to focus on delivering the business value while leaving any security aspects to experts and specialized products. There are a number of approaches"),Object(a.b)("h3",null,"The programmatic approach"),Object(a.b)("p",null,"Most developers are fairly familiar with the programmatic approach. You pull an SDK into your app, you change some code, you do some configurations, and voila, your app is protected. This approach has existed for ages, and while it is a valid one, it has some scaling concerns."),Object(a.b)("p",null,"Imagine having a microservices-based architecture with dozens, or even hundreds, of microservices. Instrumenting each one with SDK would work but the overhead will grow fast as your ecosystem evolves. Each time you need to update the SDK version, you’ll need to update all your microservices’ code and redeploy them."),Object(a.b)("h3",null,"The declarative approach"),Object(a.b)("p",null,"The declarative approach is a more modern, recommended way of protecting your distributed apps. With the declaraåtive approach, in most cases, you wouldn’t need to change a single line in your application in order to protect it or even redeploy. You just need to “declare”—hence the name—that you want your app to be protected instead."),Object(a.b)("p",null,"The declarative approach is fully language-agnostic, it helps you to scale more easily, and allows to have a centralized way of managing security settings for all your apps and microservices. Updating security settings is also significantly easier with the declarative approach since you simply update the configuration, which is immediately applied without changing or redeploying your apps."),Object(a.b)("h3",null,"Declaratively protecting your apps"),Object(a.b)("p",null,"If you’re running your apps on managed Red Hat OpenShift on IBM Cloud, the easiest approach is to use the declarative Ingress annotation. Add a single line to your Ingress resource YAML file, and your app is protected. See the full documentation ",Object(a.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/appid?topic=appid-kube-auth"}),"here")," and a video tutorial below:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://youtu.be/sqGS7naTkoU"}),"Securing your IBM Kubernetes or Red Hat OpenShift managed cluster"))),Object(a.b)("h3",null,"Programmatically protecting your apps"),Object(a.b)("p",null,"Protecting your apps with a programmatic approach can be different depending on what language and/or what web framework you’re using. The concept is the same—add an SDK to your app (or use the one bundled within your framework), configure it, and you’re done. However, different SDKs and framework are configured in different ways. The list below covers most popular scenarios but, in general, you can use App ID with any other web application framework that supports OAuth2 and OpenID Connect."),Object(a.b)("p",null,"Need to protect an existing Node.js application, be it web application or backend? Use the following links to see documentation and videos:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://youtu.be/6roa1ZOvwtw"}),"Protecting Node.js Web Applications with IBM Cloud App ID")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://youtu.be/jJLSgkHpZwA"}),"Protecting Node.js Backend Application with IBM Cloud App ID"))),Object(a.b)("p",null,"Need to protect an existing Java application running on Liberty server, be it web application or backend? Use the following links to see documentation and videos:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://youtu.be/o_Er69YUsMQ"}),"Protecting Liberty Java Web Applications with IBM Cloud App ID")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://youtu.be/QA6DY2qqLaw"}),"Protecting Liberty Java Backend Applications with IBM Cloud App ID"))),Object(a.b)("p",null,"Need to protect an existing Spring Boot application, be it web application or backend? Use the following links to see documentation and videos:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://youtu.be/EZWl1ij3dAE"}),"Protecting Spring Boot Web Applications with IBM Cloud App ID")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://youtu.be/roQ4mKJBOqg"}),"Protecting Spring Boot Backend Application with IBM Cloud App ID"))),Object(a.b)("h2",null,"Other Links"),Object(a.b)(c,{mdxType:"AnchorLinks"},Object(a.b)(l,{to:"https://cloud.ibm.com/docs/services/appid?topic=appid-about",mdxType:"AnchorLink"},"IBM Cloud App ID: About App ID"),Object(a.b)(l,{to:"https://cloud.ibm.com/docs/services/appid?topic=appid-at-events",mdxType:"AnchorLink"},"IBM Cloud App ID: Activity Tracker events")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-programming-security-index-mdx-4a4311abba14d5a3abfb.js.map