"use strict";(self.webpackChunkreact_middle=self.webpackChunkreact_middle||[]).push([[50],{8838:(e,a,t)=>{t.r(a),t.d(a,{default:()=>B});var s=t(7294),r=t(9887),l=t(9711),c=t(4187),i=t(8205),o=t(9169),n=t(9728),d=t(4876),g=t(4268),u=t(2445),h=t(8117);const m=e=>e.ArticlesPage?.isLoading||!1,p=e=>e.ArticlesPage?.error,v=e=>e.ArticlesPage?.view||u.GA.TILE,A=e=>e.ArticlesPage?.page||1,y=e=>e.ArticlesPage?.order??"asc",x=e=>e.ArticlesPage?.sort??u.$B.CREATED,C=e=>e.ArticlesPage?.search??"",P=e=>e.ArticlesPage?.type??h.Iq.ALL;var T=t(1283);const S=(0,g.hg)("articlesPage/fetchArticlesList",(async(e,a)=>{const{extra:t,rejectWithValue:s,getState:r}=a,l=r().ArticlesPage?.limit||15,c=x(r()),i=y(r()),o=C(r()),n=A(r()),d=P(r());try{g={sort:c,order:i,search:o,type:d},window.history.pushState(null,"",function(e){const a=new URLSearchParams(window.location.search);return Object.entries(e).forEach((e=>{let[t,s]=e;void 0!==s&&a.set(t,s)})),`?${a.toString()}`}(g));const e=await t.api.get("/articles",{params:{_expand:"user",_limit:l,_page:n,_sort:c,_order:i,q:o,type_like:d===h.Iq.ALL?void 0:d}});if(!e.data)throw new Error;return e.data}catch(e){return s("error")}var g})),I=(0,g.HF)({selectId:e=>e.id}),L=I.getSelectors((e=>e.ArticlesPage||I.getInitialState())),b=(0,g.oM)({name:"articlesPageSlice",initialState:I.getInitialState({error:void 0,isLoading:!1,ids:[],entities:{},view:u.GA.TILE,hasMore:!0,page:1,limit:15,_inited:!1,order:"asc",search:"",sort:u.$B.CREATED,type:h.Iq.ALL}),reducers:{setView:(e,a)=>{e.view=a.payload,localStorage.setItem(T.f,a.payload)},setPage:(e,a)=>{e.page=a.payload},initState:e=>{const a=localStorage.getItem(T.f);e.view=a,e.limit=a===u.GA.LIST?4:15,e._inited=!0},setOrder:(e,a)=>{e.order=a.payload},setSort:(e,a)=>{e.sort=a.payload},setSearch:(e,a)=>{e.search=a.payload},setType:(e,a)=>{e.type=a.payload}},extraReducers:e=>{e.addCase(S.pending,((e,a)=>{e.error=void 0,e.isLoading=!0,a.meta.arg.replace&&I.removeAll(e)})).addCase(S.fulfilled,((e,a)=>{e.isLoading=!1,e.hasMore=a.payload.length>=e.limit,a.meta.arg.replace?I.setAll(e,a.payload):I.addMany(e,a.payload)})).addCase(S.rejected,((e,a)=>{e.isLoading=!1,e.error=a.payload}))}}),{actions:j,reducer:w}=b,N=(0,g.hg)("articlesPage/fetchNextArticlesPage",(async(e,a)=>{const{getState:t,dispatch:s}=a,r=t().ArticlesPage?.hasMore,l=A(t()),c=m(t());r&&!c&&(s(j.setPage(l+1)),s(S({})))})),f=(0,g.hg)("articlesPage/initArticlesPage",(async(e,a)=>{const{getState:t,dispatch:s}=a;if(!t().ArticlesPage?._inited){const a=e.get("order"),t=e.get("sort"),r=e.get("search"),l=e.get("type");a&&s(j.setOrder(a)),t&&s(j.setSort(t)),r&&s(j.setSearch(r)),l&&s(j.setType(l)),s(j.initState()),s(S({}))}}));var k=t(3942);const E={Tabs:"bXYDR"};var _=t(6425),G=t(9457),M=t(5893);const R=(0,s.memo)((e=>{const{className:a,tabs:t,onTabClick:r,value:l}=e,i=(0,s.useCallback)((e=>()=>{r(e)}),[r]);return(0,M.jsx)(G.U,{gap:"8",className:(0,c.A)(E.Tabs,{},[a]),children:t.map((e=>(0,M.jsx)(_.Z,{theme:e.value===l?_.r.OUTLINED:_.r.NORMAL,className:E.tab,onClick:i(e),children:e.content},e.value)))})})),q=(0,s.memo)((e=>{const{className:a,value:t,onChangeType:l}=e,{t:i}=(0,r.$G)("articles"),o=(0,s.useMemo)((()=>[{value:h.Iq.ALL,content:i("All articles")},{value:h.Iq.IT,content:i("IT")},{value:h.Iq.ANALYTICS,content:i("ANALYTICS")},{value:h.Iq.MARKETING,content:i("MARKETING")}]),[i]),n=(0,s.useCallback)((e=>{l(e.value)}),[l]);return(0,M.jsx)(R,{tabs:o,value:t,onTabClick:n,className:(0,c.A)("",{},[a])})}));var O=t(8312);const $=(0,s.memo)((e=>{const{className:a}=e,{t}=(0,r.$G)("articles"),l=(0,o.T)(),c=(0,k.v9)(v),i=(0,k.v9)(x),n=(0,k.v9)(y),d=(0,k.v9)(C),g=(0,k.v9)(P),h=(0,s.useCallback)((()=>{l(S({replace:!0}))}),[l]),m=function(e,a){const t=(0,s.useRef)();return(0,s.useCallback)((function(){for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];t.current&&clearTimeout(t.current),t.current=setTimeout((()=>{e(...s)}),500)}),[e,500])}(h),p=(0,s.useCallback)((e=>{l(j.setView(e))}),[l]),A=(0,s.useCallback)((e=>{l(j.setSort(e)),l(j.setPage(1)),h()}),[l,h]),T=(0,s.useCallback)((e=>{l(j.setOrder(e)),l(j.setPage(1)),h()}),[l,h]),I=(0,s.useCallback)((e=>{l(j.setSearch(e)),l(j.setPage(1)),m()}),[l,m]),L=(0,s.useCallback)((e=>{l(j.setType(e)),l(j.setPage(1)),h()}),[l,h]);return(0,M.jsxs)(G.g,{gap:"16",max:!0,children:[(0,M.jsxs)(G.U,{gap:"16",justify:"between",max:!0,children:[(0,M.jsx)(u.xT,{order:n,sort:i,onChangeOrder:T,onChangeSort:A}),(0,M.jsx)(u.Vv,{view:c,onViewClick:p})]}),(0,M.jsx)(_.Z,{max:!0,children:(0,M.jsx)(O.I,{onChange:I,value:d,placeholder:t("search")})}),(0,M.jsx)(q,{value:g,onChangeType:L})]})}));var D=t(1715);const U=(0,s.memo)((e=>{const{className:a}=e,{t}=(0,r.$G)("articles"),s=(0,k.v9)(L.selectAll),l=(0,k.v9)(v),c=(0,k.v9)(m);return(0,k.v9)(p)?(0,M.jsx)(D.xv,{text:t("error load article")}):(0,M.jsx)(u.wD,{view:l,isLoading:c,articles:s,className:a})})),V={ArticlesPage:w},Y=e=>{const{className:a}=e,{t}=(0,r.$G)("articles"),g=(0,o.T)(),[u]=(0,l.lr)(),h=(0,s.useCallback)((()=>{g(N())}),[g]);return(0,n.Q)((()=>{g(f(u))})),(0,M.jsx)(i.W,{reducers:V,removeAfterUnmount:!1,children:(0,M.jsxs)(d.T,{onScrollEnd:h,className:(0,c.A)("i0h17",{},[a]),children:[t("ArticlesPage header"),(0,M.jsx)($,{}),(0,M.jsx)(U,{})]})})},B=(0,s.memo)(Y)},8312:(e,a,t)=>{t.d(a,{I:()=>i});var s=t(7294),r=t(4187);var l=t(9457),c=t(5893);const i=(0,s.memo)((e=>{const{className:a,value:t="",onChange:s,type:i="text",placeholder:o,readonly:n,...d}=e,g={fTN1P:n};return(0,c.jsxs)(l.g,{gap:"4",max:!0,className:(0,r.A)("LuFDU",g,[a]),children:[(0,c.jsx)("div",{children:o}),(0,c.jsx)("input",{type:i,onChange:e=>{s?.(e.target.value)},className:"X8EVb",placeholder:o,value:t,readOnly:n,...d})]})}))}}]);