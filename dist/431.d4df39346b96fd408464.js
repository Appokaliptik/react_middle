"use strict";(self.webpackChunkreact_middle=self.webpackChunkreact_middle||[]).push([[431],{11:(e,a,s)=>{s.d(a,{I:()=>l});var r=s(7294),t=s(4187);var o=s(9457),n=s(5893);const l=(0,r.memo)((e=>{const{className:a,value:s="",onChange:r,type:l="text",placeholder:d,readonly:i,...c}=e,u={fTN1P:i};return(0,n.jsxs)(o.g,{gap:"4",max:!0,className:(0,t.A)("LuFDU",u,[a]),children:[(0,n.jsx)("div",{children:d}),(0,n.jsx)("input",{type:l,onChange:e=>{r?.(e.target.value)},className:"X8EVb",placeholder:d,value:s,readOnly:i,...c})]})}))},2431:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var r=s(7294),t=s(9887),o=s(3942),n=s(4187),l=s(4156),d=s(11),i=s(8699),c=s(9169),u=s(8205);const m=e=>e?.LoginForm?.password||"",g=e=>e?.LoginForm?.isLoading||!1,p=e=>e?.LoginForm?.error||"",h=e=>e?.LoginForm?.username||"";var v=s(4268),x=s(5321),y=s(1283);const C=(0,v.hg)("login/loginByUsername",(async(e,a)=>{const{extra:s,dispatch:r,rejectWithValue:t}=a;try{const a=await s.api.post("/login",e);if(!a.data)throw new Error("No data");return localStorage.setItem(y.z_,JSON.stringify(a.data)),r(x.EJ.setAuthData(a.data)),a.data}catch(e){return console.log(e),t("error")}})),N=(0,v.oM)({name:"login",initialState:{username:"",password:"",isLoading:!1},reducers:{setUsername:(e,a)=>{e.username=a.payload},setPassword:(e,a)=>{e.password=a.payload}},extraReducers:e=>{e.addCase(C.pending,((e,a)=>{e.error=void 0,e.isLoading=!0})).addCase(C.fulfilled,((e,a)=>{let{payload:s}=a;e.isLoading=!1})).addCase(C.rejected,((e,a)=>{e.isLoading=!1,e.error=a.payload}))}}),{actions:w}=N,{reducer:L}=N,j="PQPa1";var f=s(5893);const k={LoginForm:L},b=(0,r.memo)((e=>{let{className:a,onSuccess:s}=e;const{t:v}=(0,t.$G)(),x=(0,c.T)(),y=(0,o.v9)(h),N=(0,o.v9)(m),L=(0,o.v9)(g),b=(0,o.v9)(p),F=(0,r.useCallback)((e=>{x(w.setUsername(e))}),[x]),E=(0,r.useCallback)((e=>{x(w.setPassword(e))}),[x]),I=(0,r.useCallback)((async()=>{"fulfilled"===(await x(C({username:y,password:N}))).meta.requestStatus&&s()}),[x,y,N,s]);return(0,f.jsx)(u.W,{reducers:k,children:(0,f.jsxs)("div",{className:(0,n.A)("xYNEf",{},[a]),children:[(0,f.jsx)(i.xv,{title:v("LoginForm")}),b&&(0,f.jsx)(i.xv,{text:v("errorForm"),theme:i.lg.ERROR}),(0,f.jsx)(d.I,{className:j,placeholder:v("Input name"),onChange:F,value:y}),(0,f.jsx)(d.I,{className:j,placeholder:v("Input password"),onChange:E,value:N}),(0,f.jsx)(l.zx,{type:"submit",theme:l.Wu.BACKGROUND_INVERTED,className:"Ok_5a",onClick:I,disabled:L,children:v("Login")})]})})}))}}]);