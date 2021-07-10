import{S as s,i as t,s as a,e,k as r,t as l,j as n,c as o,a as c,n as f,d as i,g as h,m as u,b as m,M as d,f as p,E as g,o as v,x,u as $,v as E,l as b,r as w,J as j,w as y,K as I}from"../../chunks/vendor-53637221.js";import{S as k,c as M,a as T}from"../../chunks/ShardItem-0abb36f1.js";import{b as D}from"../../chunks/paths-45dac81d.js";function S(s,t,a){const e=s.slice();return e[3]=t[a],e}function H(s,t){let a,e,r;return e=new T({props:{font:t[1].data.font,image:t[3].data.image,link:t[3].slug,title:t[3].data.name}}),{key:s,first:null,c(){a=b(),n(e.$$.fragment),this.h()},l(s){a=b(),u(e.$$.fragment,s),this.h()},h(){this.first=a},m(s,t){p(s,a,t),v(e,s,t),r=!0},p(s,a){t=s},i(s){r||(x(e.$$.fragment,s),r=!0)},o(s){$(e.$$.fragment,s),r=!1},d(s){s&&i(a),E(e,s)}}}function N(s){let t,a,e=[],r=new Map,l=s[0];const n=s=>s[3].slug;for(let o=0;o<l.length;o+=1){let t=S(s,l,o),a=n(t);r.set(a,e[o]=H(a,t))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=b()},l(s){for(let t=0;t<e.length;t+=1)e[t].l(s);t=b()},m(s,r){for(let t=0;t<e.length;t+=1)e[t].m(s,r);p(s,t,r),a=!0},p(s,a){3&a&&(l=s[0],w(),e=j(e,a,n,1,s,l,r,t.parentNode,I,H,t,S),y())},i(s){if(!a){for(let s=0;s<l.length;s+=1)x(e[s]);a=!0}},o(s){for(let t=0;t<e.length;t+=1)$(e[t]);a=!1},d(s){for(let t=0;t<e.length;t+=1)e[t].d(s);s&&i(t)}}}function V(s){let t,a,b,w,j,y,I,T,S,H,V,A,C,O,R,L,P,W,z,G,J,K,q,B,F,Q,U,X,Y,Z,_,ss,ts,as,es=s[1].data.name+"",rs=s[1].excerpt+"";return F=new k({props:{$$slots:{default:[N]},$$scope:{ctx:s}}}),{c(){t=e("div"),a=e("header"),b=e("div"),w=e("img"),y=r(),I=e("div"),T=r(),S=e("div"),H=e("h2"),V=l(es),A=r(),C=e("p"),O=l(rs),R=r(),L=e("a"),P=l("Read more"),W=r(),z=e("main"),G=e("section"),J=e("h3"),K=l("The Misfits"),q=r(),B=e("div"),n(F.$$.fragment),Q=r(),U=e("section"),X=e("h3"),Y=l("The World"),Z=r(),_=e("section"),ss=e("h3"),ts=l("Mission Logs"),this.h()},l(s){t=o(s,"DIV",{class:!0});var e=c(t);a=o(e,"HEADER",{});var r=c(a);b=o(r,"DIV",{class:!0});var l=c(b);w=o(l,"IMG",{src:!0,alt:!0,class:!0}),y=f(l),I=o(l,"DIV",{class:!0}),c(I).forEach(i),l.forEach(i),T=f(r),S=o(r,"DIV",{class:!0});var n=c(S);H=o(n,"H2",{class:!0});var m=c(H);V=h(m,es),m.forEach(i),A=f(n),C=o(n,"P",{class:!0});var d=c(C);O=h(d,rs),d.forEach(i),R=f(n),L=o(n,"A",{href:!0,class:!0});var p=c(L);P=h(p,"Read more"),p.forEach(i),n.forEach(i),r.forEach(i),W=f(e),z=o(e,"MAIN",{});var g=c(z);G=o(g,"SECTION",{class:!0});var v=c(G);J=o(v,"H3",{class:!0});var x=c(J);K=h(x,"The Misfits"),x.forEach(i),q=f(v),B=o(v,"DIV",{class:!0});var $=c(B);u(F.$$.fragment,$),$.forEach(i),v.forEach(i),Q=f(g),U=o(g,"SECTION",{class:!0});var E=c(U);X=o(E,"H3",{class:!0});var j=c(X);Y=h(j,"The World"),j.forEach(i),E.forEach(i),Z=f(g),_=o(g,"SECTION",{class:!0});var k=c(_);ss=o(k,"H3",{class:!0});var M=c(ss);ts=h(M,"Mission Logs"),M.forEach(i),k.forEach(i),g.forEach(i),e.forEach(i),this.h()},h(){w.src!==(j=`${D}${s[1].data.image}`)&&m(w,"src",j),m(w,"alt",`${s[1].data.name} hero`),m(w,"class","absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"),m(I,"class","bg-gradient-to-b from-transparent via-black/40 to-black h-full w-full absolute top-0 right-0 bottom-0 left-0"),m(b,"class","absolute top-0 left-0 right-0 z-[-1] h-full w-full"),m(H,"class","mt-40 text-4xl md:text-6xl lg:text-7xl font-semibold border-b-8 border-orange-main mb-8"),m(C,"class","max-w-prose px-6 mb-6 font-serif text-2xl"),m(L,"href",`${D}${s[1].slug}/info`),m(L,"class",d(M["primary-button"])+" svelte-1wrntcj"),m(S,"class","min-h-screen flex flex-col items-center justify-center"),m(J,"class","section-heading svelte-1wrntcj"),m(B,"class","flex-1 flex w-full items-stretch justify-center px-8"),m(G,"class","h-screen py-12 flex flex-col"),m(X,"class","section-heading svelte-1wrntcj"),m(U,"class","h-96 mx-auto max-w-prose text-center py-12"),m(ss,"class","section-heading svelte-1wrntcj"),m(_,"class","h-96 mx-auto max-w-prose text-center py-12"),m(t,"class",d(s[1].data.font)+" svelte-1wrntcj")},m(s,e){p(s,t,e),g(t,a),g(a,b),g(b,w),g(b,y),g(b,I),g(a,T),g(a,S),g(S,H),g(H,V),g(S,A),g(S,C),g(C,O),g(S,R),g(S,L),g(L,P),g(t,W),g(t,z),g(z,G),g(G,J),g(J,K),g(G,q),g(G,B),v(F,B,null),g(z,Q),g(z,U),g(U,X),g(X,Y),g(z,Z),g(z,_),g(_,ss),g(ss,ts),as=!0},p(s,[t]){const a={};64&t&&(a.$$scope={dirty:t,ctx:s}),F.$set(a)},i(s){as||(x(F.$$.fragment,s),as=!0)},o(s){$(F.$$.fragment,s),as=!1},d(s){s&&i(t),E(F)}}}var A=function(s,t,a,e){return new(a||(a=Promise))((function(r,l){function n(s){try{c(e.next(s))}catch(t){l(t)}}function o(s){try{c(e.throw(s))}catch(t){l(t)}}function c(s){var t;s.done?r(s.value):(t=s.value,t instanceof a?t:new a((function(s){s(t)}))).then(n,o)}c((e=e.apply(s,t||[])).next())}))};const C=({fetch:s,page:t})=>A(void 0,void 0,void 0,(function*(){const a=t.params.campaign;return{props:{result:yield s(`${D}/${a}.json`).then((s=>s.json()))}}}));function O(s,t,a){let{result:e}=t;const{players:r,campaign:l}=e;return s.$$set=s=>{"result"in s&&a(2,e=s.result)},[r,l,e]}export default class extends s{constructor(s){super(),t(this,s,O,V,a,{result:2})}}export{C as load};