"use strict";(self.webpackChunkreact_middle=self.webpackChunkreact_middle||[]).push([[535],{7535:(e,r,n)=>{n.r(r),n.d(r,{default:()=>P});var t=n(5893),a=n(9558),o=n(9887),i=n(2292),c=n(5742),l=n(7294),s=n(7168),u=(0,s.hg)("profile/fetchProfileData",(function(e,r){return n=void 0,t=void 0,o=function(){var e,n,t;return function(e,r){var n,t,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(i=0)),i;)try{if(n=1,t&&(a=2&c[0]?t.return:c[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,c[1])).done)return a;switch(t=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,t=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){i.label=c[1];break}if(6===c[0]&&i.label<a[1]){i.label=a[1],a=c;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(c);break}a[2]&&i.ops.pop(),i.trys.pop();continue}c=r.call(e,i)}catch(e){c=[6,e],t=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}(this,(function(a){switch(a.label){case 0:e=r.extra,n=r.rejectWithValue,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,e.api.get("/profile")];case 2:return[2,a.sent().data];case 3:return t=a.sent(),console.log(t),[2,n("error")];case 4:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function c(e){try{l(o.throw(e))}catch(e){r(e)}}function l(r){var n;r.done?e(r.value):(n=r.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,c)}l((o=o.apply(n,t||[])).next())}));var n,t,a,o})),f=(0,s.oM)({name:"profile",initialState:{data:void 0,isLoading:!1,readonly:!0,error:void 0},reducers:{},extraReducers:function(e){e.addCase(u.pending,(function(e,r){e.error=void 0,e.isLoading=!0})).addCase(u.fulfilled,(function(e,r){e.isLoading=!1,e.data=r.payload})).addCase(u.rejected,(function(e,r){e.isLoading=!1,e.error=r.payload}))}}),d=(f.actions,f.reducer),p=n(2055),v=n(8538),h=n(9704),y=n(8855),m=function(e){var r;return null===(r=e.profile)||void 0===r?void 0:r.data},b=function(e){var r;return null===(r=e.profile)||void 0===r?void 0:r.isLoading},j=function(e){var r;return null===(r=e.profile)||void 0===r?void 0:r.error};const g="ZTyX8";var x=function(){return x=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},x.apply(this,arguments)},O=function(e){var r=e.className,n=(0,o.$G)("profile").t,i=(0,h.v9)(m);return(0,h.v9)(b),(0,h.v9)(j),(0,t.jsxs)("div",x({className:(0,a.A)("wW9jg",{},[r])},{children:[(0,t.jsxs)("div",x({className:"nP7J5"},{children:[(0,t.jsx)(y.x,{title:n("profile page")}),(0,t.jsx)(p.zx,x({theme:p.Wu.OUTLINE,className:"LGXZA"},{children:n("edit")}))]})),(0,t.jsxs)("div",x({className:"mem1n"},{children:[(0,t.jsx)(v.I,{className:g,value:null==i?void 0:i.username,placeholder:n("input firstname")}),(0,t.jsx)(v.I,{className:g,value:null==i?void 0:i.lastname,placeholder:n("input lastname")})]}))]}))},w=function(){return w=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},w.apply(this,arguments)},N={profile:d};const P=function(e){var r=e.className,n=((0,o.$G)().t,(0,c.T)());return(0,l.useEffect)((function(){n(u())}),[n]),(0,t.jsx)(i.W,w({reducers:N,removeAfterUnmount:!0},{children:(0,t.jsx)("div",w({className:(0,a.A)("",{},[r])},{children:(0,t.jsx)(O,{})}))}))}},2292:(e,r,n)=>{n.d(r,{W:()=>i});var t=n(5893),a=n(7294),o=n(9704),i=function(e){var r=e.children,n=e.reducers,i=e.removeAfterUnmount,c=(0,o.oR)(),l=(0,o.I0)();return(0,a.useEffect)((function(){return Object.entries(n).forEach((function(e){var r=e[0],n=e[1];c.reducerManager.add(r,n),l({type:"@INIT ".concat(r," reducer")})})),function(){i&&Object.entries(n).forEach((function(e){var r=e[0];e[1],c.reducerManager.remove(r),l({type:"@DESTROY ".concat(r," reducer")})}))}}),[]),(0,t.jsx)(t.Fragment,{children:r})}},5742:(e,r,n)=>{n.d(r,{T:()=>t});var t=n(9704).I0},8538:(e,r,n)=>{n.d(r,{I:()=>c});var t=n(5893),a=n(9558),o=n(7294);var i=function(){return i=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},i.apply(this,arguments)},c=(0,o.memo)((function(e){var r=e.className,n=e.value,o=void 0===n?"":n,c=e.onChange,l=e.type,s=void 0===l?"text":l,u=e.placeholder,f=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(e,["className","value","onChange","type","placeholder"]);return(0,t.jsx)("div",i({className:(0,a.A)("LuFDU",{},[r])},{children:(0,t.jsx)("input",i({type:s,onChange:function(e){null==c||c(e.target.value)},className:"X8EVb",placeholder:u,value:o},f))}))}))},8855:(e,r,n)=>{n.d(r,{x:()=>s,l:()=>c});var t=n(5893),a=n(7294),o=n(9558);const i={Text:"Fs9AT",error:"F9oLX"};var c,l=function(){return l=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},l.apply(this,arguments)};!function(e){e.PRIMARY="primary",e.ERROR="error"}(c||(c={}));var s=(0,a.memo)((function(e){var r,n=e.className,a=e.title,s=e.text,u=e.theme,f=void 0===u?c.PRIMARY:u;return(0,t.jsxs)("div",l({className:(0,o.A)(i.Text,(r={},r[i[f]]=!0,r),[n])},{children:[a&&(0,t.jsx)("h2",{children:a}),s&&(0,t.jsx)("p",{children:s})]}))}))}}]);