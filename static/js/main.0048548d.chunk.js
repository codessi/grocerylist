(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),u=(n(12),n(6)),i=n(3),o=localStorage.getItem("list");var m=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(o?JSON.parse(o):[]),m=Object(i.a)(l,2),s=m[0],f=m[1];return Object(a.useEffect)((function(){localStorage.setItem("list",JSON.stringify(s))}),[s]),r.a.createElement("section",null,r.a.createElement("h4",null,"Grocery Bud this is setup"),r.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault();var t={id:(new Date).getTime().toString(),value:n};f([].concat(Object(u.a)(s),[t])),c("")}},r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("ul",null,s.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("li",null,e.value))}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.0048548d.chunk.js.map