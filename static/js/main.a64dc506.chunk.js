(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),i=n.n(s),o=(n(9),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))}),a=(n(10),n(3)),b=n(0),u=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:Text,placeholder:"roboname",onChange:t})})},j=function(e){var t=e.id,n=e.userName,r=e.email;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"image",src:"https://robohash.org/".concat(t,"?200x200")}),Object(b.jsx)("h1",{children:n}),Object(b.jsx)("p",{children:r})]})},d=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)(j,{id:e.id,userName:e.username,email:e.email},e.id)}))})},h=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"5px solid border",height:"1000px"},children:e.children})};var l=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(a.a)(s,2),o=i[0],j=i[1];Object(r.useEffect)((function(){fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]);var l=n.filter((function(e){return e.username.toLowerCase().includes(o.toLowerCase())}));return Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{children:"Robofriends"}),Object(b.jsx)(u,{searchChange:function(e){j(e.target.value)}}),Object(b.jsx)(h,{children:Object(b.jsx)(d,{robots:l})})]})};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(l,{})}),document.getElementById("root")),o()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.a64dc506.chunk.js.map