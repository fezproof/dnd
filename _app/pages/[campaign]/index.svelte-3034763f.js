import{S as a,i as s,s as t,e,k as r,t as l,c,a as n,d as o,n as i,g as f,b as h,f as d,E as u,h as m,F as g,J as v}from"../../chunks/vendor-5a0f8682.js";import{b as p}from"../../chunks/paths-45dac81d.js";function x(a,s,t){const e=a.slice();return e[1]=s[t],e}function y(a){let s,t,g,v,x,y,E,b,j,w,$,I,D,V,H,k,P,G,M=a[1].data.name+"",R=a[1].data.race+"",z=a[1].data.level+"";return{c(){s=e("a"),t=e("div"),g=e("div"),v=e("img"),E=r(),b=e("div"),j=e("h3"),w=l(M),$=r(),I=e("h4"),D=l(R),V=r(),H=e("h5"),k=l(z),P=r(),this.h()},l(a){s=c(a,"A",{href:!0});var e=n(s);t=c(e,"DIV",{class:!0});var r=n(t);g=c(r,"DIV",{class:!0});var l=n(g);v=c(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(o),E=i(r),b=c(r,"DIV",{class:!0});var h=n(b);j=c(h,"H3",{class:!0});var d=n(j);w=f(d,M),d.forEach(o),$=i(h),I=c(h,"H4",{});var u=n(I);D=f(u,R),u.forEach(o),V=i(h),H=c(h,"H5",{class:!0});var m=n(H);k=f(m,z),m.forEach(o),h.forEach(o),r.forEach(o),P=i(e),e.forEach(o),this.h()},h(){h(v,"class","w-40 h-40 rounded-full object-cover"),v.src!==(x=`${p}${a[1].data.image}`)&&h(v,"src",x),h(v,"alt",y=`${a[1].data.name} image`),h(g,"class","flex-grow flex items-center justify-center"),h(j,"class","text-2xl"),h(H,"class","absolute top-0 right-0 w-8 h-8 rounded-tr-md rounded-bl-md flex items-center justify-center bg-gray-200/30"),h(b,"class","my-2 mx-4"),h(t,"class","relative bg-gray-200/30 backdrop-blur-md hover:bg-gray-200/50 flex flex-col rounded-md h-64 w-52 transition-all"),h(s,"href",G=a[1].slug)},m(a,e){d(a,s,e),u(s,t),u(t,g),u(g,v),u(t,E),u(t,b),u(b,j),u(j,w),u(b,$),u(b,I),u(I,D),u(b,V),u(b,H),u(H,k),u(s,P)},p(a,t){1&t&&v.src!==(x=`${p}${a[1].data.image}`)&&h(v,"src",x),1&t&&y!==(y=`${a[1].data.name} image`)&&h(v,"alt",y),1&t&&M!==(M=a[1].data.name+"")&&m(w,M),1&t&&R!==(R=a[1].data.race+"")&&m(D,R),1&t&&z!==(z=a[1].data.level+"")&&m(k,z),1&t&&G!==(G=a[1].slug)&&h(s,"href",G)},d(a){a&&o(s)}}}function E(a){let s,t,m,E,b,j,w,$,I,D,V,H,k,P=a[0].players,G=[];for(let e=0;e<P.length;e+=1)G[e]=y(x(a,P,e));return{c(){s=e("div"),t=e("img"),E=r(),b=e("div"),j=e("h1"),w=l("Eos Rising"),$=r(),I=e("div"),D=e("h2"),V=l("Players"),H=r(),k=e("div");for(let a=0;a<G.length;a+=1)G[a].c();this.h()},l(a){s=c(a,"DIV",{class:!0});var e=n(s);t=c(e,"IMG",{src:!0,alt:!0,class:!0}),e.forEach(o),E=i(a),b=c(a,"DIV",{class:!0});var r=n(b);j=c(r,"H1",{class:!0});var l=n(j);w=f(l,"Eos Rising"),l.forEach(o),r.forEach(o),$=i(a),I=c(a,"DIV",{class:!0});var h=n(I);D=c(h,"H2",{class:!0});var d=n(D);V=f(d,"Players"),d.forEach(o),H=i(h),k=c(h,"DIV",{class:!0});var u=n(k);for(let s=0;s<G.length;s+=1)G[s].l(u);u.forEach(o),h.forEach(o),this.h()},h(){t.src!==(m=`${p}/eos-rising.jpg`)&&h(t,"src",m),h(t,"alt","eos rising hero"),h(t,"class","h-full w-full object-cover"),h(s,"class","fixed inset-0 z-[-1] h-full w-full"),h(j,"class","text-5xl font-semibold"),h(b,"class","h-72 flex items-center justify-center"),h(D,"class","text-2xl mb-6 font-semibold"),h(k,"class","grid gap-4 grid-flow-col items-start justify-center"),h(I,"class","mx-auto max-w-prose")},m(a,e){d(a,s,e),u(s,t),d(a,E,e),d(a,b,e),u(b,j),u(j,w),d(a,$,e),d(a,I,e),u(I,D),u(D,V),u(I,H),u(I,k);for(let s=0;s<G.length;s+=1)G[s].m(k,null)},p(a,[s]){if(1&s){let t;for(P=a[0].players,t=0;t<P.length;t+=1){const e=x(a,P,t);G[t]?G[t].p(e,s):(G[t]=y(e),G[t].c(),G[t].m(k,null))}for(;t<G.length;t+=1)G[t].d(1);G.length=P.length}},i:g,o:g,d(a){a&&o(s),a&&o(E),a&&o(b),a&&o($),a&&o(I),v(G,a)}}}var b=function(a,s,t,e){return new(t||(t=Promise))((function(r,l){function c(a){try{o(e.next(a))}catch(s){l(s)}}function n(a){try{o(e.throw(a))}catch(s){l(s)}}function o(a){var s;a.done?r(a.value):(s=a.value,s instanceof t?s:new t((function(a){a(s)}))).then(c,n)}o((e=e.apply(a,s||[])).next())}))};const j=({fetch:a,page:s})=>b(void 0,void 0,void 0,(function*(){const t=s.params.campaign;return{props:{result:yield a(`${p}/${t}.json`).then((a=>a.json()))}}}));function w(a,s,t){let{result:e}=s;return a.$$set=a=>{"result"in a&&t(0,e=a.result)},[e]}export default class extends a{constructor(a){super(),s(this,a,w,E,t,{result:0})}}export{j as load};