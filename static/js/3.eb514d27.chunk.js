(this.webpackJsonpseots=this.webpackJsonpseots||[]).push([[3],{78:function(e,r,t){"use strict";t(0);var n=t(79),a=t.n(n),c=t(1);r.a=function(e){var r=e.children,t=e.type,n=void 0===t?"default":t,i=e.size,s=void 0===i?"medium":i,o=e.weight,l=void 0===o?"normal":o;return Object(c.jsx)("div",{className:"".concat(a.a.typography," ").concat(a.a[n]," ").concat(a.a[s]," ").concat(a.a[l]),children:r})}},79:function(e,r,t){e.exports={typography:"style_typography__B5K2Q",error:"style_error__p8Urt",success:"style_success__EBsEz",small:"style_small__3U135",medium:"style_medium__1OkjM",large:"style_large__1YkEv",fullwidth:"style_fullwidth__12KPQ",lighter:"style_lighter__2VRgC",bolder:"style_bolder__1R-aU"}},80:function(e,r,t){},81:function(e,r,t){e.exports={button:"style_button__1H5Da"}},82:function(e,r,t){e.exports={wrapper:"style_wrapper__3-l5P"}},83:function(e,r,t){e.exports={wrapper:"style_wrapper__4RoCC",avatar:"style_avatar__36w4u",userBox:"style_userBox__3d8-b",user_info:"style_user_info__36a55",login:"style_login__1Iw_9"}},84:function(e,r,t){e.exports={modal:"style_modal__2PjGg"}},85:function(e,r,t){e.exports={modal:"style_modal__2agqS",close:"style_close__3Jb_s"}},86:function(e,r,t){e.exports={wrapper:"style_wrapper__3Qwzy",info:"style_info__11rl_",avatar:"style_avatar__1OIDD"}},87:function(e,r,t){e.exports={wrapper:"style_wrapper__292gR",avatar:"style_avatar__1bvBs",userBox:"style_userBox__xeKGv",user_info:"style_user_info__3IOb_",login:"style_login__1ACRW"}},89:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t(80),c=t.n(a),i=t(81),s=t.n(i),o=t(1),l=function(e){var r=e.children,t=e.onClick,n=e.disabled,a=void 0!==n&&n;return Object(o.jsx)("button",{onClick:t,disabled:a,className:s.a.button,children:r})},u=t(82),d=t.n(u),_=function(e){var r=e.pageSwitcherHandler,t=e.currentPage,n=e.pages;return Object(o.jsxs)("div",{className:d.a.wrapper,children:[Object(o.jsx)(l,{disabled:1===t,onClick:function(){return r(t-1)},children:"Prev"}),n.map((function(e){return Object(o.jsx)(l,{disabled:t===e,onClick:function(){return r(e)},children:e},e)})),Object(o.jsx)(l,{disabled:t===n.length,onClick:function(){return r(t+1)},children:"Next"})]})},j=t(29),b=t(40),f=function(){return Object(b.b)()},v=b.c,p=t(20),h=t(19),m=function(e){return e.userReducer.users},y=function(e){return e.userReducer.isLoading},x=function(e){return e.userReducer.error},O=function(e){return e.userReducer.currentPage},g=function(e){return e.userReducer.portionUsers},w=Object(h.a)(m,g,(function(e,r){var t=Math.ceil(e.length/r);return Array(t).fill("").map((function(e,r){return r+1}))})),N=Object(h.a)(m,g,O,(function(e,r,t){var n=(t-1)*r,a=t*r;return e.slice(n,a)})),C=t(83),R=t.n(C);function k(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function S(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(o){a=!0,c=o}finally{try{n||null==s.return||s.return()}finally{if(a)throw c}}return t}}(e,r)||function(e,r){if(e){if("string"===typeof e)return k(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=t(84),B=t.n(A),E=t(16),P=t.n(E),U=document.createElement("div"),I=function(e){var r=e.children;return Object(n.useEffect)((function(){return document.body.append(U),function(){document.body.removeChild(U)}}),[]),Object(o.jsx)(o.Fragment,{children:P.a.createPortal(Object(o.jsx)("div",{className:B.a.modal,children:r}),U)})},z=t(85),L=t.n(z),D=function(e){var r=e.children,t=e.button,a=S(Object(n.useState)(!1),2),c=a[0],i=a[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{onClick:function(){return i(!0)},children:t}),c&&Object(o.jsx)(I,{children:Object(o.jsxs)("div",{className:L.a.modal,children:[r,Object(o.jsx)("div",{className:L.a.close,onClick:function(){i(!1)},children:"x"})]})})]})},H=t(78),J=function(e){return e.detalUserReducer.user},K=function(e){return e.detalUserReducer.isLoading},M=function(e){return e.detalUserReducer.error},Q=t(86),G=t.n(Q),q=function(){var e=v(J),r=v(K),t=v(M);return r?Object(o.jsx)(j.a,{}):t?Object(o.jsx)(H.a,{type:"error",size:"large",weight:"bolder",children:t}):Object(o.jsxs)("div",{className:G.a.wrapper,children:[Object(o.jsx)("img",{className:G.a.avatar,src:null===e||void 0===e?void 0:e.avatar_url,alt:"detal_avatar"}),Object(o.jsxs)("div",{className:G.a.info,children:[(null===e||void 0===e?void 0:e.name)&&Object(o.jsxs)("div",{children:["Name: ",e.name]}),(null===e||void 0===e?void 0:e.location)&&Object(o.jsxs)("div",{children:["Location: ",e.location]}),(null===e||void 0===e?void 0:e.email)&&Object(o.jsxs)("div",{children:["Email: ",e.email]})]})]})},F=t(87),T=t.n(F),V=t(23),W=function(e){var r=e.user,t=f(),n=Object(o.jsx)(l,{onClick:function(){return e=r.login,void t(Object(V.a)(e));var e},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"});return Object(o.jsxs)("div",{className:T.a.userBox,children:[Object(o.jsx)("img",{className:T.a.avatar,alt:"avatar",src:r.avatar_url}),Object(o.jsxs)("div",{className:T.a.user_info,children:[Object(o.jsxs)("div",{className:T.a.login,children:["Login: ",r.login]}),Object(o.jsx)(D,{button:n,children:Object(o.jsx)(q,{})})]})]})},Y=function(){var e=f(),r=v(N),t=v(y);return Object(n.useEffect)((function(){e(Object(p.a)())}),[e]),t?Object(o.jsx)(j.a,{}):Object(o.jsx)("div",{className:R.a.wrapper,children:r.map((function(e){return Object(o.jsx)(W,{user:e},e.id)}))})},$=t(31);r.default=function(){var e=f(),r=v(w),t=v(O),n=v(x);return n?Object(o.jsx)(H.a,{type:"error",size:"large",weight:"bolder",children:n}):Object(o.jsxs)("div",{className:c.a.container,children:[Object(o.jsx)(_,{pages:r,currentPage:t,pageSwitcherHandler:function(r){e(Object($.b)(r))}}),Object(o.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=3.eb514d27.chunk.js.map