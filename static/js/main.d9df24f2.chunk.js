(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{19:function(e,c,t){},36:function(e,c,t){},62:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),r=t(16),n=t.n(r),l=(t(19),t(35),t(36),t(11)),i=t(2),j=t(10),d=t.n(j),b=t(13),o=t(9),h=t(0),m=function(e){var c=e.profile,t=c.name,a=c.avatar_url,r=c.bio,n=c.html_url;return Object(h.jsx)(s.Fragment,{children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{src:a,alt:"user",className:"img-fluid"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:t}),Object(h.jsx)("p",{children:r}),Object(h.jsx)("a",{href:n,rel:"noreferrer",target:"_blank",className:"btn btn-success btn-sm",children:"Profile"})]})]})})},x=function(e){var c=e.profile,t=c.followers,a=c.following,r=c.public_repos,n=c.public_gists,l=c.name,i=c.location,j=c.email,d=c.company,b=c.blog,o=c.created_at,m=c.html_url;return Object(h.jsx)(s.Fragment,{children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"card-header",children:[Object(h.jsxs)("span",{className:"badge badge-primary mx-2",children:[t," Followers"]}),Object(h.jsxs)("span",{className:"badge badge-success mx-2",children:[r," Repos"]}),Object(h.jsxs)("span",{className:"badge badge-warning mx-2",children:[n," Gists"]}),Object(h.jsxs)("span",{className:"badge badge-danger mx-2",children:[a," Following"]})]}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("ul",{className:"list-group",children:[Object(h.jsxs)("li",{className:"list-group-item",children:["User Name: ",l]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Location: ",i]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Email: ",j]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Company: ",d]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Blog: ",b]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Member Since: ",o]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Profile URL: ",Object(h.jsx)("a",{href:m,target:"_blank",rel:"noreferrer",children:m})]})]})})]})})},O=function(e){var c=e.profile;return Object(h.jsx)(s.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-3",children:0!==Object.keys(c).length?Object(h.jsx)(m,{profile:c}):null}),Object(h.jsx)("div",{className:"col-md-9",children:0!==Object.keys(c).length?Object(h.jsx)(x,{profile:c}):null})]})})})},u=function(){return Object(h.jsx)(s.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("h3",{children:"Not Found"})}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"text-dark",children:"Oops, there's nothing in here!"}),Object(h.jsx)("p",{className:"text-dark",children:"Try again with another user."})]})]})})})},g="7592297cdc5acdcf306a",p="39a1278bb16ce43427d6c5b0e4160bf6d527bc30",N=t(29),f=t.n(N).a.create({baseURL:"https://api.github.com/users/"}),v=function(){var e=Object(s.useState)(""),c=Object(o.a)(e,2),t=c[0],a=c[1],r=Object(s.useState)(null),n=Object(o.a)(r,2),l=n[0],i=n[1],j=Object(s.useState)(!0),m=Object(o.a)(j,2),x=m[0],N=m[1],v=!l||l&&0===l.length,w=function(){var e=Object(b.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("".concat(t,"?clientId=").concat(g,"&clientSecret=").concat(p)).catch((function(e){console.log("Error:",e),i(null)}));case 2:(c=e.sent)&&c.data&&(i(c.data),N(!1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){w()}),[]),Object(h.jsx)(s.Fragment,{children:Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header bg-secondary text-white",children:Object(h.jsx)("h3",{children:"Github User Search"})}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("div",{className:"form-group mr-2",children:Object(h.jsx)("input",{value:t,onChange:function(e){a(e.target.value)},size:"40",type:"text",className:"form-control",placeholder:"User Name"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:w,className:"btn btn-secondary btn-md",children:"Search"})})]})]})}),Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col",children:[x&&Object(h.jsx)("div",{className:"row justify-content-center text-secondary mt-2",children:Object(h.jsx)("h2",{children:"Enter a User Name"})}),v&&!x&&Object(h.jsx)(u,{}),!v&&Object(h.jsx)(O,{profile:l})]})})})]})})})},w=function(e){var c=e.repos;return Object(h.jsxs)("table",{className:"table table-hover text-left justify-content-around",children:[Object(h.jsx)("thead",{className:"bg-info",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Repo Name"}),Object(h.jsx)("th",{children:"Stars"}),Object(h.jsx)("th",{children:"Watchers"})]})}),Object(h.jsx)("tbody",{children:c.length>0&&Object(h.jsx)(s.Fragment,{children:c.map((function(e,c){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",className:"text-dark",children:e.name})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{className:"badge badge-success mx-2",children:[e.stargazers_count," Stars"]})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{className:"badge badge-warning mx-2",children:[e.watchers_count," Watches"]})})]},c)}))})})]})},y=function(){var e=Object(s.useState)(""),c=Object(o.a)(e,2),t=c[0],a=c[1],r=Object(s.useState)(null),n=Object(o.a)(r,2),l=n[0],i=n[1],j=function(){var e=Object(b.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("".concat(t,"/repos?clientId=").concat(g,"&clientSecret=").concat(p)).catch((function(e){console.log("Error:",e)}));case 2:(c=e.sent)&&c.data&&(console.log("resp> ",c.data),i(c.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(s.Fragment,{children:Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header bg-info text-white",children:Object(h.jsx)("h3",{children:"Github Repos"})}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("div",{className:"form-group mr-2",children:Object(h.jsx)("input",{value:t,onChange:function(e){a(e.target.value)},size:"40",type:"text",className:"form-control",placeholder:"User Name"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:j,className:"btn btn-secondary btn-md",children:"Search"})})]})]})}),Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(s.Fragment,{className:"col",children:l?Object(h.jsx)(w,{repos:l}):Object(h.jsx)(u,{})})})})]})})})},k=function(){return Object(h.jsx)(s.Fragment,{children:Object(h.jsxs)("nav",{className:"navbar row bg-dark justify-content-start",children:[Object(h.jsx)(l.b,{to:"/github-search",className:"navbar-brand bg-dark col-2 text-white text-left ml-2",children:"Home"}),Object(h.jsx)(l.b,{to:"/users",className:"navbar-brand bg-dark col-2 text-white text-left",children:"Profile Search"}),Object(h.jsx)(l.b,{to:"/repos",className:"navbar-brand bg-dark col-2 text-white text-left",children:"Repos Search"})]})})},S=t.p+"static/media/octocat.237e2214.png",F=function(){return Object(h.jsx)(s.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(h.jsx)("div",{className:"col-md-6 mt-5 text-center",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsx)("h2",{children:"Welcome to Github Search"})}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h3",{children:"Find users and repos fast"}),Object(h.jsx)("img",{src:S,alt:"user",className:"img-fluid"})]})]})})})})})};var _=function(){return Object(h.jsxs)(l.a,{children:[Object(h.jsx)(k,{}),Object(h.jsx)("div",{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/users",component:v}),Object(h.jsx)(i.a,{exact:!0,path:"/repos",component:y}),Object(h.jsx)(i.a,{exact:!0,path:"/github-search",component:F}),Object(h.jsx)(i.a,{path:"/",component:F})]})})]})};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.d9df24f2.chunk.js.map