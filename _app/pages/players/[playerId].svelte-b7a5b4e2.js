import{S as s,i as a,s as t,e,t as r,k as c,c as n,a as o,g as h,d as l,n as p,b as i,f as m,E as u,h as x,F as d}from"../../chunks/vendor-bb4603cc.js";import{l as f}from"../../chunks/queryLoader-adc3bc9e.js";import"../../chunks/paths-45dac81d.js";function y(s){let a,t,f,y,E,b=s[0].name+"",k=s[0].content+"";return{c(){a=e("header"),t=e("h2"),f=r(b),y=c(),E=e("main"),this.h()},l(s){a=n(s,"HEADER",{class:!0});var e=o(a);t=n(e,"H2",{class:!0});var r=o(t);f=h(r,b),r.forEach(l),e.forEach(l),y=p(s),E=n(s,"MAIN",{class:!0}),o(E).forEach(l),this.h()},h(){i(t,"class","mt-40 text-white text-3xl "),i(a,"class","px-4 max-w-prose mx-auto"),i(E,"class","prose px-4 max-w-prose mx-auto text-gray-100 my-8")},m(s,e){m(s,a,e),u(a,t),u(t,f),m(s,y,e),m(s,E,e),E.innerHTML=k},p(s,[a]){1&a&&b!==(b=s[0].name+"")&&x(f,b),1&a&&k!==(k=s[0].content+"")&&(E.innerHTML=k)},i:d,o:d,d(s){s&&l(a),s&&l(y),s&&l(E)}}}const E=f;function b(s,a,t){let{player:e}=a;return s.$$set=s=>{"player"in s&&t(0,e=s.player)},[e]}class k extends s{constructor(s){super(),a(this,s,b,y,t,{player:0})}}export{k as default,E as load};
