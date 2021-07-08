import{S as s,i as a,s as e,e as t,k as r,t as l,c,a as n,d as o,n as i,g as f,b as h,f as d,F as u,h as g,H as m,I as v}from"../../chunks/vendor-ec0b2bf1.js";import{b as p}from"../../chunks/paths-45dac81d.js";function x(s,a,e){const t=s.slice();return t[1]=a[e],t}function b(s){let a,e,m,v,p,x,b,y,E,j,w,I,D,V,H,$,k,P,G=s[1].data.name+"",M=s[1].data.race+"",R=s[1].data.level+"";return{c(){a=t("a"),e=t("div"),m=t("div"),v=t("img"),b=r(),y=t("div"),E=t("h3"),j=l(G),w=r(),I=t("h4"),D=l(M),V=r(),H=t("h5"),$=l(R),k=r(),this.h()},l(s){a=c(s,"A",{href:!0});var t=n(a);e=c(t,"DIV",{class:!0});var r=n(e);m=c(r,"DIV",{class:!0});var l=n(m);v=c(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(o),b=i(r),y=c(r,"DIV",{class:!0});var h=n(y);E=c(h,"H3",{class:!0});var d=n(E);j=f(d,G),d.forEach(o),w=i(h),I=c(h,"H4",{});var u=n(I);D=f(u,M),u.forEach(o),V=i(h),H=c(h,"H5",{class:!0});var g=n(H);$=f(g,R),g.forEach(o),h.forEach(o),r.forEach(o),k=i(t),t.forEach(o),this.h()},h(){h(v,"class","w-40 h-40 rounded-full object-cover"),v.src!==(p=s[1].data.image)&&h(v,"src",p),h(v,"alt",x=`${s[1].data.name} image`),h(m,"class","flex-grow flex items-center justify-center"),h(E,"class","text-2xl"),h(H,"class","absolute top-0 right-0 w-8 h-8 rounded-tr-md rounded-bl-md flex items-center justify-center bg-gray-200/30"),h(y,"class","my-2 mx-4"),h(e,"class","relative bg-gray-200/30 backdrop-blur-md hover:bg-gray-200/50 flex flex-col rounded-md h-64 w-52 transition-all"),h(a,"href",P=s[1].slug)},m(s,t){d(s,a,t),u(a,e),u(e,m),u(m,v),u(e,b),u(e,y),u(y,E),u(E,j),u(y,w),u(y,I),u(I,D),u(y,V),u(y,H),u(H,$),u(a,k)},p(s,e){1&e&&v.src!==(p=s[1].data.image)&&h(v,"src",p),1&e&&x!==(x=`${s[1].data.name} image`)&&h(v,"alt",x),1&e&&G!==(G=s[1].data.name+"")&&g(j,G),1&e&&M!==(M=s[1].data.race+"")&&g(D,M),1&e&&R!==(R=s[1].data.level+"")&&g($,R),1&e&&P!==(P=s[1].slug)&&h(a,"href",P)},d(s){s&&o(a)}}}function y(s){let a,e,g,p,y,E,j,w,I,D,V,H,$,k=s[0].players,P=[];for(let t=0;t<k.length;t+=1)P[t]=b(x(s,k,t));return{c(){a=t("div"),e=t("img"),p=r(),y=t("div"),E=t("h1"),j=l("Eos Rising"),w=r(),I=t("div"),D=t("h2"),V=l("Players"),H=r(),$=t("div");for(let s=0;s<P.length;s+=1)P[s].c();this.h()},l(s){a=c(s,"DIV",{class:!0});var t=n(a);e=c(t,"IMG",{src:!0,alt:!0,class:!0}),t.forEach(o),p=i(s),y=c(s,"DIV",{class:!0});var r=n(y);E=c(r,"H1",{class:!0});var l=n(E);j=f(l,"Eos Rising"),l.forEach(o),r.forEach(o),w=i(s),I=c(s,"DIV",{class:!0});var h=n(I);D=c(h,"H2",{class:!0});var d=n(D);V=f(d,"Players"),d.forEach(o),H=i(h),$=c(h,"DIV",{class:!0});var u=n($);for(let a=0;a<P.length;a+=1)P[a].l(u);u.forEach(o),h.forEach(o),this.h()},h(){e.src!==(g="eos-rising.jpg")&&h(e,"src","eos-rising.jpg"),h(e,"alt","eos rising hero"),h(e,"class","h-full w-full object-cover"),h(a,"class","fixed inset-0 z-[-1] h-full w-full"),h(E,"class","text-5xl font-semibold"),h(y,"class","h-72 flex items-center justify-center"),h(D,"class","text-2xl mb-6 font-semibold"),h($,"class","grid gap-4 grid-flow-col items-start justify-center"),h(I,"class","mx-auto max-w-prose")},m(s,t){d(s,a,t),u(a,e),d(s,p,t),d(s,y,t),u(y,E),u(E,j),d(s,w,t),d(s,I,t),u(I,D),u(D,V),u(I,H),u(I,$);for(let a=0;a<P.length;a+=1)P[a].m($,null)},p(s,[a]){if(1&a){let e;for(k=s[0].players,e=0;e<k.length;e+=1){const t=x(s,k,e);P[e]?P[e].p(t,a):(P[e]=b(t),P[e].c(),P[e].m($,null))}for(;e<P.length;e+=1)P[e].d(1);P.length=k.length}},i:m,o:m,d(s){s&&o(a),s&&o(p),s&&o(y),s&&o(w),s&&o(I),v(P,s)}}}var E=function(s,a,e,t){return new(e||(e=Promise))((function(r,l){function c(s){try{o(t.next(s))}catch(a){l(a)}}function n(s){try{o(t.throw(s))}catch(a){l(a)}}function o(s){var a;s.done?r(s.value):(a=s.value,a instanceof e?a:new e((function(s){s(a)}))).then(c,n)}o((t=t.apply(s,a||[])).next())}))};const j=({fetch:s,page:a})=>E(void 0,void 0,void 0,(function*(){const e=a.params.campaign;return{props:{result:yield s(`${p}/${e}.json`).then((s=>s.json()))}}}));function w(s,a,e){let{result:t}=a;return s.$$set=s=>{"result"in s&&e(0,t=s.result)},[t]}export default class extends s{constructor(s){super(),a(this,s,w,y,e,{result:0})}}export{j as load};
