(()=>{"use strict";var e,t={971:(e,t,n)=>{var r=n(294),a=n(935),c=n(942),o=n(861),u=n(152),i=n(757),s=n.n(i),l=n(144),f=n(671),p=n(669),v=n.n(p)().create({baseURL:"".concat("https://invitation-backend-rest.herokuapp.com","/api/guests")});const d=new((0,l.Z)((function e(){var t=this;(0,f.Z)(this,e),(0,c.Z)(this,"client",v),(0,c.Z)(this,"getGuest",(function(e){return t.client.get("/guest?id=".concat(e))})),(0,c.Z)(this,"updateGuest",(function(e){return t.client.patch("/updateGuest",e)}))})));function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const O=function(){var e=(0,r.useState)(null),t=(0,u.Z)(e,2),n=t[0],a=t[1],c=(0,r.useState)(""),i=(0,u.Z)(c,2),l=i[0],f=i[1],p=(0,r.useMemo)((function(){return new URLSearchParams(window.location.search)}),[]),v=(0,r.useCallback)(function(){var e=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.getGuest(t);case 3:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=7;break}e.t0=void 0===n;case 7:if(!e.t0){e.next=11;break}e.t2=void 0,e.next=12;break;case 11:e.t2=n.data;case 12:(r=e.t2)&&a(r),e.next=19;break;case 16:e.prev=16,e.t3=e.catch(0),console.error("Error");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),b=(0,r.useCallback)(function(){var e=(0,o.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=15;break}return e.next=4,d.updateGuest(t);case 4:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=8;break}e.t0=void 0===n;case 8:if(!e.t0){e.next=12;break}e.t2=void 0,e.next=13;break;case 12:e.t2=null===(r=n.data)||void 0===r?void 0:r.message;case 13:(a=e.t2)&&f(a);case 15:e.next=20;break;case 17:e.prev=17,e.t3=e.catch(0),console.error("Error");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);(0,r.useEffect)((function(){var e=p.get("id");e&&v(e)}),[v,p]);var O=(0,r.useCallback)((function(){b({guest:h(h({},n),{},{accept:!0})})}),[b,n]);return r.createElement("div",null,r.createElement("h1",null,null==n?void 0:n.name),r.createElement("h4",null,null==n?void 0:n.invitation),l&&r.createElement("p",null,l),null!=n&&n.accept?r.createElement("p",null,"Вы подвердили приглашение"):r.createElement("button",{type:"button",onClick:O},"Подвердить приглашение"))};const m=function(){return r.createElement(O,null)};a.render(r.createElement(m,null),document.getElementById("root"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=(t,n,a,c)=>{if(!n){var o=1/0;for(l=0;l<e.length;l++){for(var[n,a,c]=e[l],u=!0,i=0;i<n.length;i++)(!1&c||o>=c)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(u=!1,c<o&&(o=c));if(u){e.splice(l--,1);var s=a();void 0!==s&&(t=s)}}return t}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[n,a,c]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,c,[o,u,i]=n,s=0;if(o.some((t=>0!==e[t]))){for(a in u)r.o(u,a)&&(r.m[a]=u[a]);if(i)var l=i(r)}for(t&&t(n);s<o.length;s++)c=o[s],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(l)},n=self.webpackChunkinvitation_admin_frontend=self.webpackChunkinvitation_admin_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[987],(()=>r(971)));a=r.O(a)})();