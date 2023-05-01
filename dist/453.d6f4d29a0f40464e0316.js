"use strict";(self.webpackChunkreact_middle=self.webpackChunkreact_middle||[]).push([[453],{6453:(e,a,r)=>{r.r(a),r.d(a,{default:()=>Y});var n=r(9887),t=r(6974),l=r(7294),o=r(3942),s=r(1715);let i=function(e){return e.Russia="Russia",e.Belarus="Belarus",e.Ukraine="Ukraine",e.Kazakhstan="Kazahstan",e.Armenia="Armenia",e}({});var c=r(4187),d=r(7736),u=r(5893);const C=[{value:i.Armenia,content:i.Armenia},{value:i.Belarus,content:i.Belarus},{value:i.Kazakhstan,content:i.Kazakhstan},{value:i.Russia,content:i.Russia},{value:i.Ukraine,content:i.Ukraine}],p=(0,l.memo)((e=>{const{className:a,value:r,onChange:t,readonly:o,direction:s}=e,{t:i}=(0,n.$G)("translation"),p=(0,l.useCallback)((e=>{t?.(e)}),[t]);return(0,u.jsx)(d.wb,{className:(0,c.A)("",{},[a]),value:r,label:i("Country"),onChange:p,items:C,readonly:o,direction:s})}));let h=function(e){return e.RUB="RUB",e.EUR="EUR",e.USD="USD",e}({});const g=[{value:h.EUR,content:h.EUR},{value:h.RUB,content:h.RUB},{value:h.USD,content:h.USD}],m=(0,l.memo)((e=>{const{className:a,value:r,onChange:t,readonly:o,direction:s}=e,{t:i}=(0,n.$G)("translation"),C=(0,l.useCallback)((e=>{t?.(e)}),[t]);return(0,u.jsx)(d.wb,{className:(0,c.A)("",{},[a]),value:r,label:i("currency"),onChange:C,items:g,readonly:o,direction:s})}));var R=r(2949),f=r(8312),v=r(3212),x=r(9457);const y={ProfileCard:"wW9jg",editForm:"U9LGH",loading:"t07Zx",error:"i5YK3",avatarWrapper:"bEFNS"},E=e=>{const{className:a,data:r,isLoading:t,error:l,readonly:o,onChangeFirst:i,onChangeLastname:d,onChangeAge:C,onChangeCity:h,onChangeUsername:g,onChangeAvatar:E,onChangeCountry:N,onChangeCurrency:j}=e,{t:A}=(0,n.$G)("profile"),T={[y.editForm]:!o};return t?(0,u.jsx)(x.g,{max:!0,justify:"center",align:"center",className:(0,c.A)(y.ProfileCard,{},[a,y.loading]),children:(0,u.jsx)(v.a,{})}):l?(0,u.jsx)(x.g,{max:!0,className:(0,c.A)(y.ProfileCard,{},[a,y.error]),children:(0,u.jsx)(s.xv,{theme:s.lg.ERROR,title:A("profile error"),text:A("profile error text"),align:s.PH.CENTER})}):(0,u.jsxs)(x.g,{gap:"16",max:!0,className:(0,c.A)(y.ProfileCard,T,[a]),children:[r?.avatar&&(0,u.jsx)(x.U,{justify:"center",className:y.avatarWrapper,children:(0,u.jsx)(R.q,{src:r.avatar})}),(0,u.jsx)(f.I,{value:r?.first,placeholder:A("input firstname"),readonly:o,onChange:i}),(0,u.jsx)(f.I,{className:y.input,value:r?.lastname,placeholder:A("input lastname"),readonly:o,onChange:d}),(0,u.jsx)(f.I,{className:y.input,value:r?.age,placeholder:A("input age"),readonly:o,onChange:C}),(0,u.jsx)(f.I,{className:y.input,value:r?.city,placeholder:A("input city"),readonly:o,onChange:h}),(0,u.jsx)(f.I,{className:y.input,value:r?.username,placeholder:A("input username"),readonly:o,onChange:g}),(0,u.jsx)(f.I,{className:y.input,value:r?.avatar,placeholder:A("input avatar"),readonly:o,onChange:E}),(0,u.jsx)(p,{className:y.input,value:r?.country,readonly:o,onChange:N,direction:"top right"}),(0,u.jsx)(m,{className:y.input,value:r?.currency,readonly:o,onChange:j,direction:"top right"})]})};var N=r(9169),j=r(9728),A=r(8205);let T=function(e){return e.INCORRECT_USER_DATA="INCORRECT_USER_DATA",e.INCORRECT_AGE="INCORRECT_AGE",e.INCORRECT_CITY="INCORRECT_CITY",e.NO_DATA="NO_DATA",e.SERVER_ERROR="SERVER_ERROR",e}({});var U=r(4268);const O=(0,U.hg)("profile/fetchProfileData",(async(e,a)=>{const{extra:r,rejectWithValue:n}=a;try{const a=await r.api.get(`/profile/${e}`);if(!a.data)throw new Error;return a.data}catch(e){return console.log(e),n("error")}})),I=e=>e.profile?.error,k=e=>e.profile?.form,_=e=>e.profile?.isLoading,b=e=>e.profile?.readonly,D=e=>e.profile?.validateErrors,L=(0,U.hg)("profile/updateProfileData",(async(e,a)=>{const{extra:r,rejectWithValue:n,getState:t}=a,l=k(t()),o=(e=>{if(!e)return[T.NO_DATA];const{first:a,lastname:r,age:n,city:t}=e,l=[];return a&&r||l.push(T.INCORRECT_USER_DATA),(!n||n<18||n>100)&&l.push(T.INCORRECT_AGE),t||l.push(T.INCORRECT_CITY),l})(l);if(o.length)return n(o);try{const e=await r.api.put(`/profile/${l?.id}`,l);if(!e.data)throw new Error;return e.data}catch(e){return console.log(e),n([T.SERVER_ERROR])}})),P=(0,U.oM)({name:"profile",initialState:{data:void 0,isLoading:!1,readonly:!0,error:void 0},reducers:{setReadonly:(e,a)=>{e.readonly=a.payload},cancelEdit:e=>{e.readonly=!0,e.form=e.data,e.validateErrors=void 0},updateProfile:(e,a)=>{e.form={...e.form,...a.payload}}},extraReducers:e=>{e.addCase(O.pending,(e=>{e.error=void 0,e.isLoading=!0})).addCase(O.fulfilled,((e,a)=>{e.isLoading=!1,e.data=a.payload,e.form=a.payload})).addCase(O.rejected,((e,a)=>{e.isLoading=!1,e.error=a.payload})).addCase(L.pending,(e=>{e.validateErrors=void 0,e.isLoading=!0})).addCase(L.fulfilled,((e,a)=>{e.isLoading=!1,e.data=a.payload,e.form=a.payload,e.readonly=!0,e.validateErrors=void 0})).addCase(L.rejected,((e,a)=>{e.isLoading=!1,e.validateErrors=a.payload}))}}),{actions:S}=P,{reducer:w}=P;var G=r(5321),W=r(5255);const $=e=>e.profile?.data,B=e=>{let{className:a}=e;const{t:r}=(0,n.$G)("profile"),t=(0,o.v9)($),i=(0,o.v9)(G.m5),c=t?.id===i?.id,d=(0,o.v9)(b),C=(0,N.T)(),p=(0,l.useCallback)((()=>{C(S.setReadonly(!1))}),[C]),h=(0,l.useCallback)((()=>{C(S.cancelEdit())}),[C]),g=(0,l.useCallback)((()=>{C(L())}),[C]);return(0,u.jsxs)(x.U,{justify:"between",max:!0,children:[(0,u.jsx)(s.xv,{title:r("profile page")}),c&&(0,u.jsx)(x.U,{children:d?(0,u.jsx)(W.zx,{theme:W.Wu.OUTLINE,onClick:p,children:r("edit")}):(0,u.jsxs)(x.U,{gap:"8",children:[(0,u.jsx)(W.zx,{theme:W.Wu.OUTLINE,onClick:g,children:r("Save")}),(0,u.jsx)(W.zx,{theme:W.Wu.OUTLINE_RED,onClick:h,children:r("Cancel")})]})})]})},z={profile:w},F=(0,l.memo)((e=>{const{className:a,id:r}=e,{t}=(0,n.$G)("profile"),i=(0,N.T)(),d=(0,o.v9)(k),C=(0,o.v9)(_),p=(0,o.v9)(I),h=(0,o.v9)(b),g=(0,o.v9)(D);(0,j.Q)((()=>{r&&i(O(r))}));const m={[T.INCORRECT_AGE]:t("incorrect age"),[T.INCORRECT_CITY]:t("incorrect  city"),[T.INCORRECT_USER_DATA]:t("incorrect user data"),[T.NO_DATA]:t("incorrect data"),[T.SERVER_ERROR]:t("incorrect server error")},R=(0,l.useCallback)((e=>{i(S.updateProfile({first:e||""}))}),[i]),f=(0,l.useCallback)((e=>{i(S.updateProfile({lastname:e||""}))}),[i]),v=(0,l.useCallback)((e=>{i(S.updateProfile({age:Number(e?.replace(/\D/gi,"")||0)}))}),[i]),y=(0,l.useCallback)((e=>{i(S.updateProfile({city:e||""}))}),[i]),U=(0,l.useCallback)((e=>{i(S.updateProfile({username:e||""}))}),[i]),L=(0,l.useCallback)((e=>{i(S.updateProfile({avatar:e||""}))}),[i]),P=(0,l.useCallback)((e=>{i(S.updateProfile({currency:e}))}),[i]),w=(0,l.useCallback)((e=>{i(S.updateProfile({country:e}))}),[i]);return(0,u.jsx)(A.W,{reducers:z,children:(0,u.jsxs)(x.g,{gap:"16",max:!0,className:(0,c.A)("",{},[a]),children:[(0,u.jsx)(B,{}),g?.length&&g.map((e=>(0,u.jsx)(s.xv,{theme:s.lg.ERROR,text:m[e]},e))),(0,u.jsx)(E,{data:d,isLoading:C,error:p,readonly:h,onChangeFirst:R,onChangeLastname:f,onChangeAge:v,onChangeCity:y,onChangeUsername:U,onChangeAvatar:L,onChangeCurrency:P,onChangeCountry:w})]})})}));var V=r(4876);const Y=e=>{let{className:a}=e;const{t:r}=(0,n.$G)("profile"),{id:l}=(0,t.UO)();return l?(0,u.jsx)(V.T,{className:(0,c.A)("",{},[a]),children:(0,u.jsx)(x.g,{gap:"16",children:(0,u.jsx)(F,{id:l})})}):(0,u.jsx)(s.xv,{text:r("profile not found")})}},8205:(e,a,r)=>{r.d(a,{W:()=>o});var n=r(7294),t=r(3942),l=r(5893);const o=e=>{const{children:a,reducers:r,removeAfterUnmount:o=!0}=e,s=(0,t.oR)(),i=(0,t.I0)();return(0,n.useEffect)((()=>{const e=s.reducerManager.getReducerMap();return Object.entries(r).forEach((a=>{let[r,n]=a;e[r]||(s.reducerManager.add(r,n),i({type:`@INIT ${r} reducer`}))})),()=>{o&&Object.entries(r).forEach((e=>{let[a,r]=e;s.reducerManager.remove(a),i({type:`@DESTROY ${a} reducer`})}))}}),[]),(0,l.jsx)(l.Fragment,{children:a})}},8312:(e,a,r)=>{r.d(a,{I:()=>s});var n=r(7294),t=r(4187);var l=r(9457),o=r(5893);const s=(0,n.memo)((e=>{const{className:a,value:r="",onChange:n,type:s="text",placeholder:i,readonly:c,...d}=e,u={fTN1P:c};return(0,o.jsxs)(l.g,{gap:"4",max:!0,className:(0,t.A)("LuFDU",u,[a]),children:[(0,o.jsx)("div",{children:i}),(0,o.jsx)("input",{type:s,onChange:e=>{n?.(e.target.value)},className:"X8EVb",placeholder:i,value:r,readOnly:c,...d})]})}))}}]);