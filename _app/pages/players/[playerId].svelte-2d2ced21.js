import{S as a,i as s,s as e,e as n,t,k as r,c,a as o,g as i,d as l,n as d,b as p,f as h,E as m,h as u,F as x}from"../../chunks/vendor-293ed57d.js";import{l as y}from"../../chunks/index-5651ada8.js";import"../../chunks/paths-45dac81d.js";function f(a){let s,e,y,f,E,k=a[0].name+"",v=a[0].content+"";return{c(){s=n("header"),e=n("h2"),y=t(k),f=r(),E=n("main"),this.h()},l(a){s=c(a,"HEADER",{class:!0});var n=o(s);e=c(n,"H2",{class:!0});var t=o(e);y=i(t,k),t.forEach(l),n.forEach(l),f=d(a),E=c(a,"MAIN",{class:!0}),o(E).forEach(l),this.h()},h(){p(e,"class","mt-40 text-white text-3xl "),p(s,"class","px-4 max-w-prose mx-auto"),p(E,"class","prose px-4 max-w-prose mx-auto text-gray-100 my-8")},m(a,n){h(a,s,n),m(s,e),m(e,y),h(a,f,n),h(a,E,n),E.innerHTML=v},p(a,[s]){1&s&&k!==(k=a[0].name+"")&&u(y,k),1&s&&v!==(v=a[0].content+"")&&(E.innerHTML=v)},i:x,o:x,d(a){a&&l(s),a&&l(f),a&&l(E)}}}const E=y({query:"\n      query GetPlayer($id: ID!) {\n        player(id: $id) {\n          id\n          name\n          image\n          content\n        }\n      }\n    ",variables:({playerId:a})=>({id:a})});function k(a,s,e){let{player:n}=s;return a.$$set=a=>{"player"in a&&e(0,n=a.player)},[n]}class v extends a{constructor(a){super(),s(this,a,k,f,e,{player:0})}}export{v as default,E as load};
