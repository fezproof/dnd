import{S as a,i as s,s as e,e as t,j as n,k as o,t as i,c as r,a as l,m,n as c,g as u,d as h,b as d,f as p,o as g,E as v,h as f,x,u as $,v as b}from"../../chunks/vendor-bb4603cc.js";import{l as w}from"../../chunks/queryLoader-adc3bc9e.js";import{C as E}from"../../chunks/CampaignHeroImage-dc0c116d.js";import"../../chunks/paths-45dac81d.js";function H(a){var s,e,w,H;let j,k,A,L,M,C,I,T,U,q=(null==(s=a[0])?void 0:s.name)+"",y=(null==(e=a[0])?void 0:e.content)+"";return k=new E({props:{imageUrl:null==(w=a[0])?void 0:w.image,imageAlt:`${null==(H=a[0])?void 0:H.name} hero`,imageHeight:900,imageWidth:1600}}),{c(){j=t("header"),n(k.$$.fragment),A=o(),L=t("h2"),M=i(q),I=o(),T=t("main"),this.h()},l(a){j=r(a,"HEADER",{class:!0});var s=l(j);m(k.$$.fragment,s),A=c(s),L=r(s,"H2",{class:!0});var e=l(L);M=u(e,q),e.forEach(h),s.forEach(h),I=c(a),T=r(a,"MAIN",{class:!0}),l(T).forEach(h),this.h()},h(){var s;d(L,"class",C=`text-3xl text-white ${null==(s=a[0])?void 0:s.font} pb-8`),d(j,"class","mt-32 px-8 max-w-prose mx-auto"),d(T,"class","px-8 prose max-w-prose mx-auto text-white")},m(a,s){p(a,j,s),g(k,j,null),v(j,A),v(j,L),v(L,M),p(a,I,s),p(a,T,s),T.innerHTML=y,U=!0},p(a,[s]){var e,t,n,o,i;const r={};1&s&&(r.imageUrl=null==(e=a[0])?void 0:e.image),1&s&&(r.imageAlt=`${null==(t=a[0])?void 0:t.name} hero`),k.$set(r),(!U||1&s)&&q!==(q=(null==(n=a[0])?void 0:n.name)+"")&&f(M,q),(!U||1&s&&C!==(C=`text-3xl text-white ${null==(o=a[0])?void 0:o.font} pb-8`))&&d(L,"class",C),(!U||1&s)&&y!==(y=(null==(i=a[0])?void 0:i.content)+"")&&(T.innerHTML=y)},i(a){U||(x(k.$$.fragment,a),U=!0)},o(a){$(k.$$.fragment,a),U=!1},d(a){a&&h(j),b(k),a&&h(I),a&&h(T)}}}const j=w;function k(a,s,e){let{campaign:t}=s;return a.$$set=a=>{"campaign"in a&&e(0,t=a.campaign)},[t]}class A extends a{constructor(a){super(),s(this,a,k,H,e,{campaign:0})}}export{A as default,j as load};