import{S as a,i as s,s as e,e as l,j as n,k as o,t,c as r,a as i,m,n as c,d as u,g as d,b as g,f as v,o as p,E as h,h as f,x,u as $,v as b}from"../../../../chunks/vendor-9068e311.js";import{l as E}from"../../../../chunks/queryLoader-adc3bc9e.js";import{C as k}from"../../../../chunks/CampaignHeroImage-10a42999.js";import"../../../../chunks/paths-45dac81d.js";function H(a){var s,e,E,H,j;let A,w,I,L,M,C,D,T,U,q,y,N=(null==(s=a[0])?void 0:s.name)+"",R=(null==(E=null==(e=a[0])?void 0:e.content)?void 0:E.prose)+"";return w=new k({props:{imageUrl:null==(H=a[0])?void 0:H.image,imageAlt:`${null==(j=a[0])?void 0:j.name} hero`,imageHeight:900,imageWidth:1600}}),{c(){A=l("header"),n(w.$$.fragment),I=o(),L=l("div"),M=o(),C=l("h2"),D=t(N),U=o(),q=l("main"),this.h()},l(a){A=r(a,"HEADER",{class:!0});var s=i(A);m(w.$$.fragment,s),I=c(s),L=r(s,"DIV",{class:!0}),i(L).forEach(u),M=c(s),C=r(s,"H2",{class:!0});var e=i(C);D=d(e,N),e.forEach(u),s.forEach(u),U=c(a),q=r(a,"MAIN",{class:!0}),i(q).forEach(u),this.h()},h(){var s,e;g(L,"class","absolute inset-0 bg-black/80"),g(C,"class",T=`text-3xl text-orange-main ${null==(e=null==(s=a[0])?void 0:s.campaign)?void 0:e.font} pb-8 relative`),g(A,"class","mt-32 px-8 max-w-prose mx-auto"),g(q,"class","px-8 prose max-w-prose mx-auto pb-24 relative")},m(a,s){v(a,A,s),p(w,A,null),h(A,I),h(A,L),h(A,M),h(A,C),h(C,D),v(a,U,s),v(a,q,s),q.innerHTML=R,y=!0},p(a,[s]){var e,l,n,o,t,r,i;const m={};1&s&&(m.imageUrl=null==(e=a[0])?void 0:e.image),1&s&&(m.imageAlt=`${null==(l=a[0])?void 0:l.name} hero`),w.$set(m),(!y||1&s)&&N!==(N=(null==(n=a[0])?void 0:n.name)+"")&&f(D,N),(!y||1&s&&T!==(T=`text-3xl text-orange-main ${null==(t=null==(o=a[0])?void 0:o.campaign)?void 0:t.font} pb-8 relative`))&&g(C,"class",T),(!y||1&s)&&R!==(R=(null==(i=null==(r=a[0])?void 0:r.content)?void 0:i.prose)+"")&&(q.innerHTML=R)},i(a){y||(x(w.$$.fragment,a),y=!0)},o(a){$(w.$$.fragment,a),y=!1},d(a){a&&u(A),b(w),a&&u(U),a&&u(q)}}}const j=E;function A(a,s,e){let{log:l}=s;return a.$$set=a=>{"log"in a&&e(0,l=a.log)},[l]}class w extends a{constructor(a){super(),s(this,a,A,H,e,{log:0})}}export{w as default,j as load};
