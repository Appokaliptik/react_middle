"use strict";(self.webpackChunkreact_middle=self.webpackChunkreact_middle||[]).push([[431],{2431:(e,r,n)=>{n.r(r),n.d(r,{default:()=>P});var t=n(5861),a=n(4687),o=n.n(a),c=n(7294),s=n(1072),u=n(3942),i=n(4187),l=n(5255),d=n(8312),p=n(1715),f=n(9258),v=n(9169),m=function(e){var r;return(null==e||null===(r=e.LoginForm)||void 0===r?void 0:r.password)||""},g=function(e){var r;return(null==e||null===(r=e.LoginForm)||void 0===r?void 0:r.isLoading)||!1},h=function(e){var r;return(null==e||null===(r=e.LoginForm)||void 0===r?void 0:r.error)||""},b=function(e){var r;return(null==e||null===(r=e.LoginForm)||void 0===r?void 0:r.username)||""},y=n(4268),j=n(5997),x=n(1283),O=(0,y.hg)("login/loginByUsername",function(){var e=(0,t.Z)(o().mark((function e(r,n){var t,a,c,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.extra,a=n.dispatch,c=n.rejectWithValue,e.prev=1,e.next=4,t.api.post("/login",r);case 4:if((s=e.sent).data){e.next=7;break}throw new Error("No data");case 7:return localStorage.setItem(x.z,JSON.stringify(s.data)),a(j.EJ.setAuthData(s.data)),e.abrupt("return",s.data);case 12:return e.prev=12,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",c("error"));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(r,n){return e.apply(this,arguments)}}()),w=(0,y.oM)({name:"login",initialState:{username:"",password:"",isLoading:!1},reducers:{setUsername:function(e,r){e.username=r.payload},setPassword:function(e,r){e.password=r.payload}},extraReducers:function(e){e.addCase(O.pending,(function(e,r){e.error=void 0,e.isLoading=!0})).addCase(O.fulfilled,(function(e,r){r.payload,e.isLoading=!1})).addCase(O.rejected,(function(e,r){e.isLoading=!1,e.error=r.payload}))}}),N=w.actions,C=w.reducer;const k="PQPa1";var E=n(5893),L={LoginForm:C};const P=(0,c.memo)((function(e){var r=e.className,n=e.onSuccess,a=(0,s.$G)().t,y=(0,v.T)(),j=(0,u.v9)(b),x=(0,u.v9)(m),w=(0,u.v9)(g),C=(0,u.v9)(h),P=(0,c.useCallback)((function(e){y(N.setUsername(e))}),[y]),I=(0,c.useCallback)((function(e){y(N.setPassword(e))}),[y]),D=(0,c.useCallback)((0,t.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(O({username:j,password:x}));case 2:"fulfilled"===e.sent.meta.requestStatus&&n();case 4:case"end":return e.stop()}}),e)}))),[y,j,x,n]);return(0,E.jsx)(f.W,{reducers:L,children:(0,E.jsxs)("div",{className:(0,i.A)("xYNEf",{},[r]),children:[(0,E.jsx)(p.xv,{title:a("LoginForm")}),C&&(0,E.jsx)(p.xv,{text:a("errorForm"),theme:p.lg.ERROR}),(0,E.jsx)(d.I,{className:k,placeholder:a("Input name"),onChange:P,value:j}),(0,E.jsx)(d.I,{className:k,placeholder:a("Input password"),onChange:I,value:x}),(0,E.jsx)(l.zx,{type:"submit",theme:l.Wu.BACKGROUND_INVERTED,className:"Ok_5a",onClick:D,disabled:w,children:a("Login")})]})})}))},9258:(e,r,n)=>{n.d(r,{W:()=>s});var t=n(9439),a=n(7294),o=n(3942),c=n(5893),s=function(e){var r=e.children,n=e.reducers,s=e.removeAfterUnmount,u=void 0===s||s,i=(0,o.oR)(),l=(0,o.I0)();return(0,a.useEffect)((function(){var e=i.reducerManager.getReducerMap();return Object.entries(n).forEach((function(r){var n=(0,t.Z)(r,2),a=n[0],o=n[1];e[a]||(i.reducerManager.add(a,o),l({type:"@INIT ".concat(a," reducer")}))})),function(){u&&Object.entries(n).forEach((function(e){var r=(0,t.Z)(e,2),n=r[0];r[1],i.reducerManager.remove(n),l({type:"@DESTROY ".concat(n," reducer")})}))}}),[]),(0,c.jsx)(c.Fragment,{children:r})}},8312:(e,r,n)=>{n.d(r,{I:()=>p});var t=n(4942),a=n(4925),o=n(4187),c=n(7294);var s=n(9457),u=n(5893),i=["className","value","onChange","type","placeholder","readonly"];function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var p=(0,c.memo)((function(e){var r=e.className,n=e.value,c=void 0===n?"":n,l=e.onChange,p=e.type,f=void 0===p?"text":p,v=e.placeholder,m=e.readonly,g=(0,a.Z)(e,i),h=(0,t.Z)({},"fTN1P",m);return(0,u.jsxs)(s.g,{gap:"4",max:!0,className:(0,o.A)("LuFDU",h,[r]),children:[(0,u.jsx)("div",{children:v}),(0,u.jsx)("input",d({type:f,onChange:function(e){null==l||l(e.target.value)},className:"X8EVb",placeholder:v,value:c,readOnly:m},g))]})}))}}]);