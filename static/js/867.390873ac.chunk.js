"use strict";(self.webpackChunkproject2=self.webpackChunkproject2||[]).push([[867],{867:function(e,n,t){t.r(n);var o=t(439),c=t(313),s=t(899),a=(t(709),t(610)),i=t(417);n.default=function(){var e=(0,c.useState)([]),n=(0,o.Z)(e,2),t=n[0],u=n[1];return(0,c.useEffect)((function(){a.Z.get("https://jsonplaceholder.typicode.com/users",{headers:{authorization:"id token"}}).then((function(e){console.log(e),u(null===e||void 0===e?void 0:e.data)})).catch((function(e){console.log(e)}))}),[]),console.log(t),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{}),"Users",t.map((function(e){return(0,i.jsx)("div",{children:"".concat(e.name," ").concat(e.email," ").concat(e.website)})}))]})}}}]);