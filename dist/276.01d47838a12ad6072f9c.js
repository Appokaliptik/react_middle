"use strict";(self.webpackChunkreact_middle=self.webpackChunkreact_middle||[]).push([[276],{8276:(e,n,a)=>{a.r(n),a.d(n,{default:()=>q});var r,t=a(5893),o=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.validateErrors},l=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.form},i=a(7168);!function(e){e.INCORRECT_USER_DATA="INCORRECT_USER_DATA",e.INCORRECT_AGE="INCORRECT_AGE",e.INCORRECT_CITY="INCORRECT_CITY",e.NO_DATA="NO_DATA",e.SERVER_ERROR="SERVER_ERROR"}(r||(r={}));var u,c=(0,i.hg)("profile/updateProfileData",(function(e,n){return a=void 0,t=void 0,i=function(){var e,a,t,o,i,u,c;return function(e,n){var a,r,t,o,l={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(u){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(a=1,r&&(t=2&i[0]?r.return:i[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,i[1])).done)return t;switch(r=0,t&&(i=[2&i[0],t.value]),i[0]){case 0:case 1:t=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((t=(t=l.trys).length>0&&t[t.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){l.label=i[1];break}if(6===i[0]&&l.label<t[1]){l.label=t[1],t=i;break}if(t&&l.label<t[2]){l.label=t[2],l.ops.push(i);break}t[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],r=0}finally{a=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(s){switch(s.label){case 0:if(e=n.extra,a=n.rejectWithValue,t=n.getState,o=l(t()),(i=function(e){if(!e)return[r.NO_DATA];var n=e.first,a=e.lastname,t=e.age,o=e.city,l=[];return n&&a||l.push(r.INCORRECT_USER_DATA),(!t||t<18||t>100)&&l.push(r.INCORRECT_AGE),o||l.push(r.INCORRECT_CITY),l}(o)).length)return[2,a(i)];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,e.api.put("/profile/".concat(null==o?void 0:o.id),o)];case 2:if(!(u=s.sent()).data)throw new Error;return[2,u.data];case 3:return c=s.sent(),console.log(c),[2,a([r.SERVER_ERROR])];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function l(e){try{u(i.throw(e))}catch(e){n(e)}}function u(n){var a;n.done?e(n.value):(a=n.value,a instanceof o?a:new o((function(e){e(a)}))).then(r,l)}u((i=i.apply(a,t||[])).next())}));var a,t,o,i})),s=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.data},d=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.error},f=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.isLoading},v=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.readonly},p=(0,i.hg)("profile/fetchProfileData",(function(e,n){return a=void 0,r=void 0,o=function(){var a,r,t,o;return function(e,n){var a,r,t,o,l={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(u){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(l=0)),l;)try{if(a=1,r&&(t=2&i[0]?r.return:i[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,i[1])).done)return t;switch(r=0,t&&(i=[2&i[0],t.value]),i[0]){case 0:case 1:t=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((t=(t=l.trys).length>0&&t[t.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){l.label=i[1];break}if(6===i[0]&&l.label<t[1]){l.label=t[1],t=i;break}if(t&&l.label<t[2]){l.label=t[2],l.ops.push(i);break}t[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],r=0}finally{a=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(l){switch(l.label){case 0:a=n.extra,r=n.rejectWithValue,l.label=1;case 1:return l.trys.push([1,3,,4]),[4,a.api.get("/profile/".concat(e))];case 2:if(!(t=l.sent()).data)throw new Error;return[2,t.data];case 3:return o=l.sent(),console.log(o),[2,r("error")];case 4:return[2]}}))},new((t=void 0)||(t=Promise))((function(e,n){function l(e){try{u(o.next(e))}catch(e){n(e)}}function i(e){try{u(o.throw(e))}catch(e){n(e)}}function u(n){var a;n.done?e(n.value):(a=n.value,a instanceof t?a:new t((function(e){e(a)}))).then(l,i)}u((o=o.apply(a,r||[])).next())}));var a,r,t,o})),h=function(){return h=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++)for(var t in n=arguments[a])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},h.apply(this,arguments)},y=(0,i.oM)({name:"profile",initialState:{data:void 0,isLoading:!1,readonly:!0,error:void 0},reducers:{setReadonly:function(e,n){e.readonly=n.payload},cancelEdit:function(e){e.readonly=!0,e.form=e.data,e.validateErrors=void 0},updateProfile:function(e,n){e.form=h(h({},e.form),n.payload)}},extraReducers:function(e){e.addCase(p.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(p.fulfilled,(function(e,n){e.isLoading=!1,e.data=n.payload,e.form=n.payload})).addCase(p.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload})).addCase(c.pending,(function(e){e.validateErrors=void 0,e.isLoading=!0})).addCase(c.fulfilled,(function(e,n){e.isLoading=!1,e.data=n.payload,e.form=n.payload,e.readonly=!0,e.validateErrors=void 0})).addCase(c.rejected,(function(e,n){e.isLoading=!1,e.validateErrors=n.payload}))}}),g=y.actions,C=y.reducer;!function(e){e.Russia="Russia",e.Belarus="Belarus",e.Ukraine="Ukraine",e.Kazakhstan="Kazahstan",e.Armenia="Armenia"}(u||(u={}));var m,b=a(3838),R=a(9887),x=a(4415),j=a(7294),E=[{value:u.Armenia,content:u.Armenia},{value:u.Belarus,content:u.Belarus},{value:u.Kazakhstan,content:u.Kazakhstan},{value:u.Russia,content:u.Russia},{value:u.Ukraine,content:u.Ukraine}],O=(0,j.memo)((function(e){var n=e.className,a=e.value,r=e.onChange,o=e.readonly,l=(0,R.$G)("translation").t,i=(0,j.useCallback)((function(e){null==r||r(e)}),[r]);return(0,t.jsx)(x.P,{className:(0,b.A)("",{},[n]),value:a,label:l("Country"),onChange:i,options:E,readonly:o})}));!function(e){e.RUB="RUB",e.EUR="EUR",e.USD="USD"}(m||(m={}));var N=[{value:m.EUR,content:m.EUR},{value:m.RUB,content:m.RUB},{value:m.USD,content:m.USD}],w=(0,j.memo)((function(e){var n=e.className,a=e.value,r=e.onChange,o=e.readonly,l=(0,R.$G)("translation").t,i=(0,j.useCallback)((function(e){null==r||r(e)}),[r]);return(0,t.jsx)(x.P,{className:(0,b.A)("",{},[n]),value:a,label:l("currency"),onChange:i,options:N,readonly:o})})),A=a(9245),k=a(3083),T=a(7559),U=a(6747),P=a(7053);const I={ProfileCard:"wW9jg",editForm:"U9LGH",loading:"t07Zx",error:"i5YK3",avatarWrapper:"bEFNS"};var _=function(){return _=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++)for(var t in n=arguments[a])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},_.apply(this,arguments)},S=function(e){var n,a=e.className,r=e.data,o=e.isLoading,l=e.error,i=e.readonly,u=e.onChangeFirst,c=e.onChangeLastname,s=e.onChangeAge,d=e.onChangeCity,f=e.onChangeUsername,v=e.onChangeAvatar,p=e.onChangeCountry,h=e.onChangeCurrency,y=(0,R.$G)("profile").t,g=((n={})[I.editForm]=!i,n);return o?(0,t.jsx)(U.g,_({max:!0,justify:"center",align:"center",className:(0,b.A)(I.ProfileCard,{},[a,I.loading])},{children:(0,t.jsx)(T.a,{})})):l?(0,t.jsx)(U.g,_({max:!0,className:(0,b.A)(I.ProfileCard,{},[a,I.error])},{children:(0,t.jsx)(P.xv,{theme:P.lg.ERROR,title:y("profile error"),text:y("profile error text"),align:P.PH.CENTER})})):(0,t.jsxs)(U.g,_({gap:"16",max:!0,className:(0,b.A)(I.ProfileCard,g,[a])},{children:[(null==r?void 0:r.avatar)&&(0,t.jsx)(U.U,_({justify:"center",className:I.avatarWrapper},{children:(0,t.jsx)(A.q,{src:r.avatar})})),(0,t.jsx)(k.I,{value:null==r?void 0:r.first,placeholder:y("input firstname"),readonly:i,onChange:u}),(0,t.jsx)(k.I,{className:I.input,value:null==r?void 0:r.lastname,placeholder:y("input lastname"),readonly:i,onChange:c}),(0,t.jsx)(k.I,{className:I.input,value:null==r?void 0:r.age,placeholder:y("input age"),readonly:i,onChange:s}),(0,t.jsx)(k.I,{className:I.input,value:null==r?void 0:r.city,placeholder:y("input city"),readonly:i,onChange:d}),(0,t.jsx)(k.I,{className:I.input,value:null==r?void 0:r.username,placeholder:y("input username"),readonly:i,onChange:f}),(0,t.jsx)(k.I,{className:I.input,value:null==r?void 0:r.avatar,placeholder:y("input avatar"),readonly:i,onChange:v}),(0,t.jsx)(O,{className:I.input,value:null==r?void 0:r.country,readonly:i,onChange:p}),(0,t.jsx)(w,{className:I.input,value:null==r?void 0:r.currency,readonly:i,onChange:h})]}))},D=a(9704),L=a(6974),G=a(9553),W=a(4617),z=a(8381),B=a(115),V=a(7553),F=a(577),M=function(){return M=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++)for(var t in n=arguments[a])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},M.apply(this,arguments)},K=function(e){e.className;var n=(0,R.$G)("profile").t,a=(0,D.v9)(s),r=(0,D.v9)(F.m5),o=(null==a?void 0:a.id)===(null==r?void 0:r.id),l=(0,D.v9)(v),i=(0,W.T)(),u=(0,j.useCallback)((function(){i(g.setReadonly(!1))}),[i]),d=(0,j.useCallback)((function(){i(g.cancelEdit())}),[i]),f=(0,j.useCallback)((function(){i(c())}),[i]);return(0,t.jsxs)(U.U,M({justify:"between",max:!0},{children:[(0,t.jsx)(P.xv,{title:n("profile page")}),o&&(0,t.jsx)(U.U,{children:l?(0,t.jsx)(V.zx,M({theme:V.Wu.OUTLINE,onClick:u},{children:n("edit")})):(0,t.jsxs)(U.U,M({gap:"8"},{children:[(0,t.jsx)(V.zx,M({theme:V.Wu.OUTLINE,onClick:f},{children:n("Save")})),(0,t.jsx)(V.zx,M({theme:V.Wu.OUTLINE_RED,onClick:d},{children:n("Cancel")}))]}))})]}))},Y=function(){return Y=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++)for(var t in n=arguments[a])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},Y.apply(this,arguments)},$={profile:C};const q=function(e){var n,a=e.className,i=(0,R.$G)("profile").t,u=(0,D.v9)(l),c=(0,D.v9)(f),s=(0,D.v9)(d),h=(0,W.T)(),y=(0,D.v9)(v),C=(0,D.v9)(o),m=(0,L.UO)().id,x=((n={})[r.INCORRECT_AGE]=i("incorrect age"),n[r.INCORRECT_CITY]=i("incorrect  city"),n[r.INCORRECT_USER_DATA]=i("incorrect user data"),n[r.NO_DATA]=i("incorrect data"),n[r.SERVER_ERROR]=i("incorrect server error"),n);(0,z.Q)((function(){m&&h(p(m))}));var E=(0,j.useCallback)((function(e){h(g.updateProfile({first:e||""}))}),[h]),O=(0,j.useCallback)((function(e){h(g.updateProfile({lastname:e||""}))}),[h]),N=(0,j.useCallback)((function(e){h(g.updateProfile({age:Number((null==e?void 0:e.replace(/\D/gi,""))||0)}))}),[h]),w=(0,j.useCallback)((function(e){h(g.updateProfile({city:e||""}))}),[h]),A=(0,j.useCallback)((function(e){h(g.updateProfile({username:e||""}))}),[h]),k=(0,j.useCallback)((function(e){h(g.updateProfile({avatar:e||""}))}),[h]),T=(0,j.useCallback)((function(e){h(g.updateProfile({currency:e}))}),[h]),I=(0,j.useCallback)((function(e){h(g.updateProfile({country:e}))}),[h]);return(0,t.jsx)(G.W,Y({reducers:$,removeAfterUnmount:!0},{children:(0,t.jsx)(B.T,Y({className:(0,b.A)("",{},[a])},{children:(0,t.jsxs)(U.g,Y({gap:"16"},{children:[(0,t.jsx)(K,{}),(null==C?void 0:C.length)&&C.map((function(e){return(0,t.jsx)(P.xv,{theme:P.lg.ERROR,text:x[e]},e)})),(0,t.jsx)(S,{data:u,isLoading:c,error:s,readonly:y,onChangeFirst:E,onChangeLastname:O,onChangeAge:N,onChangeCity:w,onChangeUsername:A,onChangeAvatar:k,onChangeCurrency:T,onChangeCountry:I})]}))}))}))}},9553:(e,n,a)=>{a.d(n,{W:()=>l});var r=a(5893),t=a(7294),o=a(9704),l=function(e){var n=e.children,a=e.reducers,l=e.removeAfterUnmount,i=void 0===l||l,u=(0,o.oR)(),c=(0,o.I0)();return(0,t.useEffect)((function(){var e=u.reducerManager.getReducerMap();return Object.entries(a).forEach((function(n){var a=n[0],r=n[1];e[a]||(u.reducerManager.add(a,r),c({type:"@INIT ".concat(a," reducer")}))})),function(){i&&Object.entries(a).forEach((function(e){var n=e[0];e[1],u.reducerManager.remove(n),c({type:"@DESTROY ".concat(n," reducer")})}))}}),[]),(0,r.jsx)(r.Fragment,{children:n})}},9245:(e,n,a)=>{a.d(n,{q:()=>l});var r=a(5893),t=a(3838),o=a(7294);var l=(0,o.memo)((function(e){var n=e.className,a=e.src,l=e.alt,i=void 0===l?"":l,u=e.size,c=void 0===u?150:u,s=(0,o.useMemo)((function(){return{width:c,height:c}}),[c]);return(0,r.jsx)("img",{className:(0,t.A)("ZqPdw",{},[n]),src:a,style:s,alt:i})}))},3083:(e,n,a)=>{a.d(n,{I:()=>u});var r=a(5893),t=a(3838),o=a(7294);var l=a(6747),i=function(){return i=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++)for(var t in n=arguments[a])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},i.apply(this,arguments)},u=(0,o.memo)((function(e){var n,a=e.className,o=e.value,u=void 0===o?"":o,c=e.onChange,s=e.type,d=void 0===s?"text":s,f=e.placeholder,v=e.readonly,p=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]])}return a}(e,["className","value","onChange","type","placeholder","readonly"]),h=((n={}).fTN1P=v,n);return(0,r.jsxs)(l.g,i({gap:"4",max:!0,className:(0,t.A)("LuFDU",h,[a])},{children:[(0,r.jsx)("div",{children:f}),(0,r.jsx)("input",i({type:d,onChange:function(e){null==c||c(e.target.value)},className:"X8EVb",placeholder:f,value:u,readOnly:v},p))]}))}))},4415:(e,n,a)=>{a.d(n,{P:()=>i});var r=a(5893),t=a(7294);var o=a(6747),l=function(){return l=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++)for(var t in n=arguments[a])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},l.apply(this,arguments)},i=function(e){e.className;var n=e.label,a=e.options,i=e.onChange,u=e.value,c=e.readonly,s=(0,t.useMemo)((function(){return null==a?void 0:a.map((function(e){return(0,r.jsx)("option",l({className:"JkXz9",value:e.value},{children:e.content}),e.value)}))}),[a]);return(0,r.jsxs)(o.U,l({gap:"8"},{children:[n&&(0,r.jsx)("div",{children:"".concat(n)}),(0,r.jsx)("select",l({disabled:c,className:"VOKOu",value:u,onChange:function(e){i&&i(e.target.value)}},{children:s}))]}))}}}]);