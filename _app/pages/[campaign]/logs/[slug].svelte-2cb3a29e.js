import{S as a,i as s,s as e,e as n,j as o,k as l,t,c as r,a as i,m as c,n as m,d as g,g as u,b as p,f as d,o as h,E as v,h as f,x,u as $,v as b}from"../../../chunks/vendor-bb4603cc.js";import{l as E}from"../../../chunks/queryLoader-adc3bc9e.js";import{C as k}from"../../../chunks/CampaignHeroImage-1fa14f9e.js";import"../../../chunks/paths-45dac81d.js";function H(a){var s,e,E;let H,j,A,w,I,L,M,C,D,T,U,q=a[0].name+"",y=(null==(s=a[0])?void 0:s.content.prose)+"";return j=new k({props:{imageUrl:null==(e=a[0])?void 0:e.image,imageAlt:`${null==(E=a[0])?void 0:E.name} hero`,imageHeight:900,imageWidth:1600}}),{c(){H=n("header"),o(j.$$.fragment),A=l(),w=n("div"),I=l(),L=n("h2"),M=t(q),D=l(),T=n("main"),this.h()},l(a){H=r(a,"HEADER",{class:!0});var s=i(H);c(j.$$.fragment,s),A=m(s),w=r(s,"DIV",{class:!0}),i(w).forEach(g),I=m(s),L=r(s,"H2",{class:!0});var e=i(L);M=u(e,q),e.forEach(g),s.forEach(g),D=m(a),T=r(a,"MAIN",{class:!0}),i(T).forEach(g),this.h()},h(){var s,e;p(w,"class","absolute inset-0 bg-black/80"),p(L,"class",C=`text-3xl text-orange-main ${null==(e=null==(s=a[0])?void 0:s.campaign)?void 0:e.font} pb-8 relative`),p(H,"class","mt-32 px-8 max-w-prose mx-auto"),p(T,"class","px-8 prose max-w-prose mx-auto pb-24 relative")},m(a,s){d(a,H,s),h(j,H,null),v(H,A),v(H,w),v(H,I),v(H,L),v(L,M),d(a,D,s),d(a,T,s),T.innerHTML=y,U=!0},p(a,[s]){var e,n,o,l,t;const r={};1&s&&(r.imageUrl=null==(e=a[0])?void 0:e.image),1&s&&(r.imageAlt=`${null==(n=a[0])?void 0:n.name} hero`),j.$set(r),(!U||1&s)&&q!==(q=a[0].name+"")&&f(M,q),(!U||1&s&&C!==(C=`text-3xl text-orange-main ${null==(l=null==(o=a[0])?void 0:o.campaign)?void 0:l.font} pb-8 relative`))&&p(L,"class",C),(!U||1&s)&&y!==(y=(null==(t=a[0])?void 0:t.content.prose)+"")&&(T.innerHTML=y)},i(a){U||(x(j.$$.fragment,a),U=!0)},o(a){$(j.$$.fragment,a),U=!1},d(a){a&&g(H),b(j),a&&g(D),a&&g(T)}}}const j=E;function A(a,s,e){let{log:n}=s;return console.log(n.campaign),a.$$set=a=>{"log"in a&&e(0,n=a.log)},[n]}class w extends a{constructor(a){super(),s(this,a,A,H,e,{log:0})}}export{w as default,j as load};
