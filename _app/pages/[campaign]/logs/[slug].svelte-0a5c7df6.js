import{S as s,i as a,s as t,e as o,t as n,k as e,c as r,a as l,g as c,d as i,n as u,b as h,f as p,E as d,h as m,F as x}from"../../../chunks/vendor-bb4603cc.js";import{l as v}from"../../../chunks/queryLoader-adc3bc9e.js";import"../../../chunks/paths-45dac81d.js";function f(s){var a;let t,v,f,g,b,E,k=s[0].name+"",w=(null==(a=s[0])?void 0:a.content.prose)+"";return{c(){t=o("header"),v=o("h2"),f=n(k),b=e(),E=o("main"),this.h()},l(s){t=r(s,"HEADER",{class:!0});var a=l(t);v=r(a,"H2",{class:!0});var o=l(v);f=c(o,k),o.forEach(i),a.forEach(i),b=u(s),E=r(s,"MAIN",{class:!0}),l(E).forEach(i),this.h()},h(){var a,o;h(v,"class",g=`text-3xl text-white ${null==(o=null==(a=s[0])?void 0:a.campaign)?void 0:o.font} pb-8`),h(t,"class","mt-32 px-8 max-w-prose mx-auto"),h(E,"class","px-8 prose max-w-prose mx-auto")},m(s,a){p(s,t,a),d(t,v),d(v,f),p(s,b,a),p(s,E,a),E.innerHTML=w},p(s,[a]){var t,o,n;1&a&&k!==(k=s[0].name+"")&&m(f,k),1&a&&g!==(g=`text-3xl text-white ${null==(o=null==(t=s[0])?void 0:t.campaign)?void 0:o.font} pb-8`)&&h(v,"class",g),1&a&&w!==(w=(null==(n=s[0])?void 0:n.content.prose)+"")&&(E.innerHTML=w)},i:x,o:x,d(s){s&&i(t),s&&i(b),s&&i(E)}}}const g=v;function b(s,a,t){let{log:o}=a;return s.$$set=s=>{"log"in s&&t(0,o=s.log)},[o]}class E extends s{constructor(s){super(),a(this,s,b,f,t,{log:0})}}export{E as default,g as load};
