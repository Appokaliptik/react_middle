"use strict";(self.webpackChunkreact_middle=self.webpackChunkreact_middle||[]).push([[50],{8838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var a=r(9439),n=r(7294),i=r(1072),o=r(9711),c=r(4187),l=r(9258),s=r(9169),u=r(9728),d=r(4876),v=r(5861),f=r(4687),p=r.n(f),g=r(4268),h=r(2445),m=r(8117),y=function(e){var t;return(null===(t=e.ArticlesPage)||void 0===t?void 0:t.isLoading)||!1},A=function(e){var t;return null===(t=e.ArticlesPage)||void 0===t?void 0:t.error},b=function(e){var t;return(null===(t=e.ArticlesPage)||void 0===t?void 0:t.view)||h.GA.TILE},x=function(e){var t;return(null===(t=e.ArticlesPage)||void 0===t?void 0:t.page)||1},P=function(e){var t,r;return null!==(t=null===(r=e.ArticlesPage)||void 0===r?void 0:r.order)&&void 0!==t?t:"asc"},j=function(e){var t,r;return null!==(t=null===(r=e.ArticlesPage)||void 0===r?void 0:r.sort)&&void 0!==t?t:h.$B.CREATED},w=function(e){var t,r;return null!==(t=null===(r=e.ArticlesPage)||void 0===r?void 0:r.search)&&void 0!==t?t:""},C=function(e){var t,r;return null!==(t=null===(r=e.ArticlesPage)||void 0===r?void 0:r.type)&&void 0!==t?t:m.Iq.ALL},S=r(1283);var T=(0,g.hg)("articlesPage/fetchArticlesList",function(){var e=(0,v.Z)(p().mark((function e(t,r){var n,i,o,c,l,s,u,d,v,f;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.extra,i=r.rejectWithValue,p=(o=r.getState)(),void 0,c=(null===(g=p.ArticlesPage)||void 0===g?void 0:g.limit)||15,l=j(o()),s=P(o()),u=w(o()),d=x(o()),v=C(o()),e.prev=7,t={sort:l,order:s,search:u,type:v},window.history.pushState(null,"",function(e){var t=new URLSearchParams(window.location.search);return Object.entries(e).forEach((function(e){var r=(0,a.Z)(e,2),n=r[0],i=r[1];void 0!==i&&t.set(n,i)})),"?".concat(t.toString())}(t)),e.next=11,n.api.get("/articles",{params:{_expand:"user",_limit:c,_page:d,_sort:l,_order:s,q:u,type_like:v===m.Iq.ALL?void 0:v}});case 11:if((f=e.sent).data){e.next=14;break}throw new Error;case 14:return e.abrupt("return",f.data);case 17:return e.prev=17,e.t0=e.catch(7),e.abrupt("return",i("error"));case 20:case"end":return e.stop()}var t,p,g}),e,null,[[7,17]])})));return function(t,r){return e.apply(this,arguments)}}()),O=(0,g.HF)({selectId:function(e){return e.id}}),k=O.getSelectors((function(e){return e.ArticlesPage||O.getInitialState()})),I=(0,g.oM)({name:"articlesPageSlice",initialState:O.getInitialState({error:void 0,isLoading:!1,ids:[],entities:{},view:h.GA.TILE,hasMore:!0,page:1,limit:15,_inited:!1,order:"asc",search:"",sort:h.$B.CREATED,type:m.Iq.ALL}),reducers:{setView:function(e,t){e.view=t.payload,localStorage.setItem(S.f,t.payload)},setPage:function(e,t){e.page=t.payload},initState:function(e){var t=localStorage.getItem(S.f);e.view=t,e.limit=t===h.GA.LIST?4:15,e._inited=!0},setOrder:function(e,t){e.order=t.payload},setSort:function(e,t){e.sort=t.payload},setSearch:function(e,t){e.search=t.payload},setType:function(e,t){e.type=t.payload}},extraReducers:function(e){e.addCase(T.pending,(function(e,t){e.error=void 0,e.isLoading=!0,t.meta.arg.replace&&O.removeAll(e)})).addCase(T.fulfilled,(function(e,t){e.isLoading=!1,e.hasMore=t.payload.length>=e.limit,t.meta.arg.replace?O.setAll(e,t.payload):O.addMany(e,t.payload)})).addCase(T.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}),L=I.actions,N=I.reducer,E=(0,g.hg)("articlesPage/fetchNextArticlesPage",function(){var e=(0,v.Z)(p().mark((function e(t,r){var a,n,i,o,c;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.getState,n=r.dispatch,t=a(),void 0,i=null===(l=t.ArticlesPage)||void 0===l?void 0:l.hasMore,o=x(a()),c=y(a()),i&&!c&&(n(L.setPage(o+1)),n(T({})));case 5:case"end":return e.stop()}var t,l}),e)})));return function(t,r){return e.apply(this,arguments)}}()),_=(0,g.hg)("articlesPage/initArticlesPage",function(){var e=(0,v.Z)(p().mark((function e(t,r){var a,n,i,o,c,l;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.getState,n=r.dispatch,void 0,(null===(s=a().ArticlesPage)||void 0===s?void 0:s._inited)||(i=t.get("order"),o=t.get("sort"),c=t.get("search"),l=t.get("type"),i&&n(L.setOrder(i)),o&&n(L.setSort(o)),c&&n(L.setSearch(c)),l&&n(L.setType(l)),n(L.initState()),n(T({})));case 3:case"end":return e.stop()}var s}),e)})));return function(t,r){return e.apply(this,arguments)}}());const D={Tabs:"bXYDR"};var Z=r(6425),G=r(9457),M=r(5893),R=(0,n.memo)((function(e){var t=e.className,r=e.tabs,a=e.onTabClick,i=e.value,o=(0,n.useCallback)((function(e){return function(){a(e)}}),[a]);return(0,M.jsx)(G.U,{gap:"8",className:(0,c.A)(D.Tabs,{},[t]),children:r.map((function(e){return(0,M.jsx)(Z.Z,{theme:e.value===i?Z.r.OUTLINED:Z.r.NORMAL,className:D.tab,onClick:o(e),children:e.content},e.value)}))})})),q=(0,n.memo)((function(e){var t=e.className,r=e.value,a=e.onChangeType,o=(0,i.$G)("articles").t,l=(0,n.useMemo)((function(){return[{value:m.Iq.ALL,content:o("All articles")},{value:m.Iq.IT,content:o("IT")},{value:m.Iq.ANALYTICS,content:o("ANALYTICS")},{value:m.Iq.MARKETING,content:o("MARKETING")}]}),[o]),s=(0,n.useCallback)((function(e){a(e.value)}),[a]);return(0,M.jsx)(R,{tabs:l,value:r,onTabClick:s,className:(0,c.A)("",{},[t])})})),U=r(3942),V=r(8312),$=(0,n.memo)((function(e){e.className;var t,r,a=(0,i.$G)("articles").t,o=(0,s.T)(),c=(0,U.v9)(b),l=(0,U.v9)(j),u=(0,U.v9)(P),d=(0,U.v9)(w),v=(0,U.v9)(C),f=(0,n.useCallback)((function(){o(T({replace:!0}))}),[o]),p=(t=f,500,r=(0,n.useRef)(),(0,n.useCallback)((function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];r.current&&clearTimeout(r.current),r.current=setTimeout((function(){t.apply(void 0,a)}),500)}),[t,500])),g=(0,n.useCallback)((function(e){o(L.setView(e))}),[o]),m=(0,n.useCallback)((function(e){o(L.setSort(e)),o(L.setPage(1)),f()}),[o,f]),y=(0,n.useCallback)((function(e){o(L.setOrder(e)),o(L.setPage(1)),f()}),[o,f]),A=(0,n.useCallback)((function(e){o(L.setSearch(e)),o(L.setPage(1)),p()}),[o,p]),x=(0,n.useCallback)((function(e){o(L.setType(e)),o(L.setPage(1)),f()}),[o,f]);return(0,M.jsxs)(G.g,{gap:"16",max:!0,children:[(0,M.jsxs)(G.U,{gap:"16",justify:"between",max:!0,children:[(0,M.jsx)(h.xT,{order:u,sort:l,onChangeOrder:y,onChangeSort:m}),(0,M.jsx)(h.Vv,{view:c,onViewClick:g})]}),(0,M.jsx)(Z.Z,{max:!0,children:(0,M.jsx)(V.I,{onChange:A,value:d,placeholder:a("search")})}),(0,M.jsx)(q,{value:v,onChangeType:x})]})}));var Y=r(1715),B=(0,n.memo)((function(e){var t=e.className,r=(0,i.$G)("articles").t,a=(0,U.v9)(k.selectAll),n=(0,U.v9)(b),o=(0,U.v9)(y);return(0,U.v9)(A)?(0,M.jsx)(Y.xv,{text:r("error load article")}):(0,M.jsx)(h.wD,{view:n,isLoading:o,articles:a,className:t})})),F={ArticlesPage:N},K=function(e){var t=e.className,r=(0,i.$G)("articles").t,v=(0,s.T)(),f=(0,o.lr)(),p=(0,a.Z)(f,1)[0],g=(0,n.useCallback)((function(){v(E())}),[v]);return(0,u.Q)((function(){v(_(p))})),(0,M.jsx)(l.W,{reducers:F,removeAfterUnmount:!1,children:(0,M.jsxs)(d.T,{onScrollEnd:g,className:(0,c.A)("i0h17",{},[t]),children:[r("ArticlesPage header"),(0,M.jsx)($,{}),(0,M.jsx)(B,{})]})})};const W=(0,n.memo)(K)},8312:(e,t,r)=>{r.d(t,{I:()=>v});var a=r(4942),n=r(4925),i=r(4187),o=r(7294);var c=r(9457),l=r(5893),s=["className","value","onChange","type","placeholder","readonly"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=(0,o.memo)((function(e){var t=e.className,r=e.value,o=void 0===r?"":r,u=e.onChange,v=e.type,f=void 0===v?"text":v,p=e.placeholder,g=e.readonly,h=(0,n.Z)(e,s),m=(0,a.Z)({},"fTN1P",g);return(0,l.jsxs)(c.g,{gap:"4",max:!0,className:(0,i.A)("LuFDU",m,[t]),children:[(0,l.jsx)("div",{children:p}),(0,l.jsx)("input",d({type:f,onChange:function(e){null==u||u(e.target.value)},className:"X8EVb",placeholder:p,value:o,readOnly:g},h))]})}))}}]);