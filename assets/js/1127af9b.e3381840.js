"use strict";(self.webpackChunklink_orbdoc=self.webpackChunklink_orbdoc||[]).push([[6098],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={id:"formlist",sidebar_label:"GET - Form List",title:"Form List",hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null},o="GET - Form List",i={unversionedId:"API/formlist",id:"API/formlist",title:"Form List",description:"Generate the Form List.",source:"@site/docs/API/formlist.md",sourceDirName:"API",slug:"/API/formlist",permalink:"/LinkOrbdoc/docs/API/formlist",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"formlist",sidebar_label:"GET - Form List",title:"Form List",hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null},sidebar:"tutorialSidebar"},p={},m=[{value:"Header Parameters",id:"header-parameters",level:2},{value:"Payload Response",id:"payload-response",level:2},{value:"Sample Object",id:"sample-object",level:2}],s={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get---form-list"},"GET - Form List"),(0,a.kt)("p",null,"Generate the Form List."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Get a list of Form that is associated with the ",(0,a.kt)("strong",{parentName:"p"},"Basic_Auth")," token. This API returns every form along with the ",(0,a.kt)("strong",{parentName:"p"},"Form Id"),", ",(0,a.kt)("strong",{parentName:"p"},"name"),", and ",(0,a.kt)("strong",{parentName:"p"},"label"),"."),(0,a.kt)("h2",{id:"header-parameters"},"Header Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Authorization"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The API key for your authorization process.")))),(0,a.kt)("h2",{id:"payload-response"},"Payload Response"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"xuid"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The identifier of the form.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"name"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the form.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"labels"),(0,a.kt)("td",{parentName:"tr",align:"center"},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"The labels in which the form belongs.")))),(0,a.kt)("h2",{id:"sample-object"},"Sample Object"),(0,a.kt)("p",null,"An example object returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Form List")," endpoint is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="200 - Ok"',title:'"200',"-":!0,'Ok"':!0},'[\n    {\n        "xuid": "RraJNpWlQyKUY-YRLtvSOA",\n        "name": "form-1",\n        "labels": []\n    },\n    {\n        "xuid": "SgLpCktkTVq40fLtNDU2Zg",\n        "name": "contact",\n        "labels": []\n    }\n]\n')))}c.isMDXComponent=!0}}]);