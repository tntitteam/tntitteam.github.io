(this["webpackJsonptest-react-app"]=this["webpackJsonptest-react-app"]||[]).push([[0],{368:function(e,t,c){},369:function(e,t,c){},425:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(16),j=c.n(a),i=(c(368),c(193)),f=c(15),o=(c.p,c(369),c(225)),b=c.n(o),O=c(339),u=c.n(O),s=c(349),d=c.n(s),l=c(340),x=c.n(l),h=c(347),w=c.n(h),p=c(237),R=c.n(p),m=c(236),g=c.n(m),S=c(341),k=c.n(S),_=c(342),v=c.n(_),C=c(344),P=c.n(C),E=c(345),F=c.n(E),y=c(346),D=c.n(y),I=c(350),L=c.n(I),M=c(343),T=c.n(M),A=c(348),B=c.n(A),J=c(351),z=c.n(J),N=c(238),V=c.n(N),W=c(239),q=c.n(W),G=c(240),H=c.n(G),K=c(456),Q=c(352),U=c(427),X=c(322),Y=c(18),Z={Add:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(u.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(x.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(k.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(R.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(v.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(T.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(P.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(D.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(R.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(w.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(g.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(B.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(d.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(L.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(z.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Save:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(V.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ErrorShow:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DoneOutline:Object(n.forwardRef)((function(e,t){return Object(Y.jsx)(H.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};function $(e){var t=Object(n.useState)({closed:!0}),c=Object(i.a)(t,2),r=c[0],a=c[1];Object(n.useEffect)((function(){fetch("/error_status?id="+e.file_id.toString()).then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);var j=Object(n.useState)({checked:r.closed}),f=Object(i.a)(j,2),o=f[0],b=f[1];return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(K.a,{checked:o.checked,onClick:function(){return function(t){var c;c=o.checked?"closed":"open",fetch("/set_error_status?id="+e.file_id.toString()+"&closed="+c),b({checked:!o.checked})}()},color:"primary",name:"checked",inputProps:{"aria-label":"primary checkbox"}}),Object(Y.jsx)(Q.a,{height:400,width:300,itemSize:46,itemCount:200,children:function(e){var t=e.index,c=e.style;return Object(Y.jsx)(U.a,{button:!0,style:c,children:Object(Y.jsx)(X.a,{primary:"Item ".concat(t+1)})},t)}})]})}var ee=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("/epcis").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),Object(Y.jsx)("div",{style:{maxWidth:"100%"},children:Object(Y.jsx)(b.a,{icons:Z,columns:[{title:"aif",field:"aif_timestamp"},{title:"Message",field:"message_id"},{title:"File",field:"filename"},{title:"Documnent",field:"business_document"},{title:"Error",field:"error_status"},{title:"File id",field:"file_id"}],data:c,title:"EPCIS Monitoring",actions:[{icon:function(){return Object(Y.jsx)(V.a,{})},tooltip:"Open file",onClick:function(e,t){window.open("http://10.167.92.182:5000/files?file="+t.filename,"_blank")}}],detailPanel:[function(e){return{icon:function(){return"-"==e.error_status?Object(Y.jsx)(H.a,{}):Object(Y.jsx)(q.a,{})},disabled:"-"==e.error_status,tooltip:"Show error",render:function(e){return Object(Y.jsx)($,{file_id:e.file_id})}}}]})})},te=function(e){e&&e instanceof Function&&c.e(6).then(c.bind(null,832)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,j=t.getTTFB;c(e),n(e),r(e),a(e),j(e)}))};j.a.render(Object(Y.jsx)(r.a.StrictMode,{children:Object(Y.jsx)(ee,{})}),document.getElementById("root")),te()}},[[425,1,3]]]);
//# sourceMappingURL=main.f5fa6ecd.chunk.js.map