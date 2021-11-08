(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(17),n=c.n(s),r=c(16),i=c(4),o=c(2),d=c(10),l=c.n(d),j=c(1);function u(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-trueGray-900 opacity-75 flex flex-col items-center justify-center",children:[Object(j.jsx)("div",{className:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"}),Object(j.jsx)("h2",{className:"text-center text-white text-xl font-semibold",children:"Loading..."})]})})}var b="http://guardian-discord-bot-backend.herokuapp.com",x="Vexer";function h(){return l.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",l.a.get("".concat(b,"/api/auth/"),{withCredentials:!0})}function m(e){var t=e.logo,c=e.userName,a=e.acces,s=Object(i.f)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:Object(j.jsx)("nav",{id:"header",className:"fixed w-full z-30 top-0 text-white",children:Object(j.jsxs)("div",{className:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2",children:[Object(j.jsx)("div",{className:"pl-4 flex items-center",children:Object(j.jsx)("a",{className:"toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl",href:"/",children:x})}),Object(j.jsx)("div",{className:"mr-7 mt-3",children:"unauthorized"===a?Object(j.jsx)("button",{className:"flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 rounded-3xl",onClick:function(){return window.location.href="".concat(b,"/api/auth/discord/")},children:Object(j.jsx)("span",{className:"mx-1",children:"Login"})}):Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("img",{src:t,alt:"logo",className:"rounded-full w-11 border-gray-400 border-2 mr-5 cursor-pointer",onClick:function(){return s.push("/account")}}),Object(j.jsx)("p",{className:"mt-2 cursor-pointer",onClick:function(){return s.push("/account")},children:c})]})})]})})})})}var p=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),r=Object(o.a)(n,2),i=r[0],d=r[1],h=Object(a.useState)(""),p=Object(o.a)(h,2),O=p[0],g=p[1],f=Object(a.useState)(""),v=Object(o.a)(f,2),w=v[0],N=v[1];return l.a.get("".concat(b,"/api/auth/"),{withCredentials:!0}).then((function(e){s(e.data.msg),"authorized"===c&&(g(e.data.user.discordTag),N("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128"))),setTimeout((function(){d(!1)}),2e3)})),Object(j.jsx)(j.Fragment,{children:!0===i?Object(j.jsx)(u,{}):Object(j.jsx)("div",{className:"leading-normal tracking-normal text-white h-full bg-trueGray-900",style:{width:"100%",minHeight:"100vh"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{logo:w,userName:O,acces:c}),Object(j.jsx)("div",{className:"pt-72",children:Object(j.jsx)("div",{className:"container mx-auto flex flex-wrap flex-col md:flex-row",children:Object(j.jsxs)("div",{className:"flex flex-col w-full  items-center text-center md:text-left",children:[Object(j.jsxs)("h1",{className:"w-full my-5 text-5xl font-bold leading-tight text-center text-white",children:[x," | Discord Bot"]}),Object(j.jsxs)("p",{className:"leading-normal text-2xl mb-8",children:[x," is the best customizable bot for discord with a dashboard."]}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("button",{className:"flex items-center px-7 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800",children:Object(j.jsx)("span",{className:"mx-1",children:"Invite Bot"})}),Object(j.jsx)("div",{className:"ml-5"}),Object(j.jsx)("button",{className:"flex items-center px-7 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800",children:Object(j.jsx)("span",{className:"mx-1",children:"Support Server"})})]})]})})})]})})})},O=c(34),g=c(35),f=c(18);c(66);function v(){var e=Object(g.a)(),t=e.register,c=e.handleSubmit,s=e.formState.errors,n=Object(i.g)().id,r=Object(a.useState)(!0),d=Object(o.a)(r,2),x=d[0],p=d[1],v=Object(a.useState)(""),w=Object(o.a)(v,2),N=w[0],y=w[1],S=Object(a.useState)(""),k=Object(o.a)(S,2),C=k[0],z=k[1],F=Object(a.useState)(""),T=Object(o.a)(F,2),B=T[0],H=T[1],I=Object(a.useState)(""),L=Object(o.a)(I,2),E=L[0],P=L[1],M=Object(a.useState)(0),_=Object(o.a)(M,2),q=_[0],A=_[1],G=Object(a.useState)(0),J=Object(o.a)(G,2),R=J[0],D=J[1],U=Object(a.useState)(""),V=Object(o.a)(U,2),W=V[0],K=V[1],Q=Object(a.useState)(0),X=Object(o.a)(Q,2),Y=X[0],Z=X[1],$=[];Object(a.useEffect)((function(){h().then((function(e){P(e.data.msg),"authorized"===E&&(z(e.data.user.discordTag),H("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128")))}))}),[E]),Object(a.useEffect)((function(){setTimeout((function(){l.a.get("".concat(b,"/api/discord/guilds"),{withCredentials:!0}).then((function(e){e.data.comservs.map((function(e){return $.push(e.id)})),$.includes(n)||(window.location.href="".concat("http://guardian-discord-bot-frontend.herokuapp.com","/account"))})),l.a.get("".concat(b,"/discord/prefixs?id=").concat(n)).then((function(e){y(e.data.prefix)}),(function(e){console.log(e)})),l.a.get("".concat(b,"/api/discord/getguildinfo?id=").concat(n)).then((function(e){A(e.data.members),D(e.data.channels),K(e.data.region),Z(e.data.roles)}))}),1e3),setTimeout((function(){return p(!1)}),2500)}),[]);var ee=Object(a.useState)(0),te=Object(o.a)(ee,2),ce=te[0],ae=te[1];return Object(j.jsx)("div",{children:!0===x?Object(j.jsx)(u,{}):Object(j.jsxs)("div",{className:"leading-normal tracking-normal text-white h-full bg-gray-900",style:{width:"100%",minHeight:"100vh"},children:[Object(j.jsx)(m,{logo:B,userName:C,acces:E}),Object(j.jsx)(f.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(j.jsx)("div",{className:"pt-36",children:Object(j.jsxs)("section",{className:"max-w-3xl p-6 mx-auto bg-gray-800 rounded-md shadow-md text-center",children:[Object(j.jsx)("h2",{className:"text-lg font-semibold text-white capitalize",children:"Server settings"}),Object(j.jsx)("div",{className:"flex justify-center items-center h-64 mx-auto",children:Object(j.jsx)("ul",{className:"flex mb-52",children:["informations","Settings"].map((function(e,t){return Object(j.jsx)("li",{className:ce===t?"cursor-pointer py-2 px-4 text-gray-500 border-b-2":"cursor-pointer py-2 px-4 text-gray-500",onClick:function(){return ae(t)},children:e},t)}))})}),Object(j.jsx)("div",{className:"text-center mx-auto relative bottom-40",children:Object(j.jsxs)("div",{className:" text-gray-500 font-thin",children:[Object(j.jsxs)("div",{className:0===ce?"block":"hidden",children:[Object(j.jsxs)("p",{children:["Members: ",Object(j.jsx)("span",{className:"text-white",children:q})]}),Object(j.jsxs)("p",{children:["Total Channels:"," ",Object(j.jsx)("span",{className:"text-white",children:R})]}),Object(j.jsxs)("p",{children:["Roles: ",Object(j.jsx)("span",{className:"text-white",children:Y})]}),Object(j.jsxs)("p",{children:["Region: ",Object(j.jsx)("span",{className:"text-white",children:W})]})]}),Object(j.jsx)("div",{className:1===ce?"block":"hidden",children:Object(j.jsxs)("form",{onSubmit:c((function(e){l.a.post("".concat(b,"/api/discord/prefixs"),{id:n,prefix:e.prefix}).then((function(e){f.b.success("The settings have been changed.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(e){f.b.error("An error occurred.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))})),children:[Object(j.jsxs)("div",{className:"",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"text-gray-200",htmlFor:"prefix",children:"Prefix"}),Object(j.jsx)("input",Object(O.a)({className:"block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-500 focus:ring"},t("prefix",{required:!0,maxLength:5,minLength:1,pattern:/\S+/,value:N}))),Object(j.jsxs)("div",{className:"flex",children:[s.prefix&&"required"===s.prefix.type&&Object(j.jsx)("span",{className:"",children:"This is required"}),s.prefix&&"maxLength"===s.prefix.type&&Object(j.jsx)("span",{children:"Max length exceeded"}),s.prefix&&"pattern"===s.prefix.type&&Object(j.jsx)("span",{children:"Without white space"})]})]}),Object(j.jsx)("div",{})]}),Object(j.jsx)("div",{className:"flex justify-center mt-6",children:Object(j.jsx)("button",{className:"px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:"Save"})})]})})]})})]})})]})})}function w(e){var t=e.guilds,c=e.text;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:t.map((function(e,t){return Object(j.jsxs)("div",{className:"flex justify-between hover:bg-gray-600 md:w-128 sm:w-128 p-1",children:[Object(j.jsxs)("div",{className:"flex mt-4",children:[null!==e.icon?Object(j.jsx)("img",{src:"https://cdn.discordapp.com/icons/".concat(e.id,"/").concat(e.icon,".png"),alt:"server-logo",className:"rounded-3xl w-10 mr-2 mb-3"}):Object(j.jsx)("div",{className:"mr-2 mb-3",children:Object(j.jsx)("div",{className:"rounded-3xl w-10 bg-gray-500 pb-2 border-white border-2",children:Object(j.jsx)("p",{className:"text-center pt-1",children:e.name.toUpperCase().charAt(0)})})}),Object(j.jsx)("li",{className:"cursor-pointer mx-auto mt-3 text-xs",children:e.name})]}),Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsx)("button",{className:"px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700 ",onClick:function(){return window.location.href="Manage"===c?"http://localhost:3000/server/".concat(e.id):"http://discord.com/oauth2/authorize?client_id=905608828970729482&scope=bot%20applications.commands&guild_id=".concat(e.id,"&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:1337%2Fapi%2Fauth%2Fdiscord%2Fredirect")},children:c})})]},t)}))})})}function N(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(o.a)(n,2),i=r[0],d=r[1],x=Object(a.useState)(!0),p=Object(o.a)(x,2),O=p[0],g=p[1],f=Object(a.useState)(""),v=Object(o.a)(f,2),N=v[0],y=v[1],S=Object(a.useState)(""),k=Object(o.a)(S,2),C=k[0],z=k[1],F=Object(a.useState)(""),T=Object(o.a)(F,2),B=T[0],H=T[1];return Object(a.useEffect)((function(){h().then((function(e){console.log("res",e),H(e.data.msg),"authorized"===B&&(y(e.data.user.discordTag),z("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128")))}))}),[B]),Object(a.useEffect)((function(){l.a.get("".concat(b,"/api/discord/guilds"),{withCredentials:!0}).then((function(e){if("unauthorized"===e.data.msg)return window.location.href="".concat(b,"/api/auth/discord/");console.log(e.data.msg),s(e.data.permincom),d(e.data.comservs),setTimeout((function(){g(!1)}),2e3)}))}),[]),Object(j.jsx)(j.Fragment,{children:!0===O?Object(j.jsx)(u,{}):Object(j.jsxs)("div",{className:"leading-normal tracking-normal text-white h-full bg-gray-900",style:{width:"100%",minHeight:"100vh"},children:[Object(j.jsx)(m,{logo:C,userName:N,acces:B}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"text-center pt-24",children:"Please select a server"}),Object(j.jsx)("div",{className:"pt-12",children:Object(j.jsx)("div",{className:"flex flex-col w-full justify-between items-center md:text-left pl-5",children:Object(j.jsxs)("ul",{className:"",children:[Object(j.jsx)(w,{guilds:i,text:"Manage"}),Object(j.jsx)(w,{guilds:c,text:"Invite"})]})})})]})]})})}function y(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(p,{})}),Object(j.jsx)(i.a,{path:"/account",children:Object(j.jsx)(N,{})}),Object(j.jsx)(i.a,{path:"/server/:id",children:Object(j.jsx)(v,{})})]})})}var S=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(y,{})})};c(67);n.a.render(Object(j.jsx)(S,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.4a9705d0.chunk.js.map