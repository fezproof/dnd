import{S as t,i as e,s as n,e as s,k as a,j as o,K as r,c,d as i,n as l,a as f,m,b as h,E as u,f as d,o as p,x as $,u as g,v,l as x,r as k,L as w,w as j,M as y}from"../chunks/vendor-bb4603cc.js";import{S as b,a as E}from"../chunks/ShardItem-3e01b1e7.js";import{b as M}from"../chunks/paths-45dac81d.js";function S(t,e,n){const s=t.slice();return s[1]=e[n],s}function D(t,e){let n,s,a;return s=new E({props:{fixed:!0,font:e[1].font,image:e[1].image,link:e[1].link,title:e[1].name}}),{key:t,first:null,c(){n=x(),o(s.$$.fragment),this.h()},l(t){n=x(),m(s.$$.fragment,t),this.h()},h(){this.first=n},m(t,e){d(t,n,e),p(s,t,e),a=!0},p(t,n){e=t;const a={};1&n&&(a.font=e[1].font),1&n&&(a.image=e[1].image),1&n&&(a.link=e[1].link),1&n&&(a.title=e[1].name),s.$set(a)},i(t){a||($(s.$$.fragment,t),a=!0)},o(t){g(s.$$.fragment,t),a=!1},d(t){t&&i(n),v(s,t)}}}function I(t){let e,n,s=[],a=new Map,o=t[0];const r=t=>t[1].id;for(let c=0;c<o.length;c+=1){let e=S(t,o,c),n=r(e);a.set(n,s[c]=D(n,e))}return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,a){for(let e=0;e<s.length;e+=1)s[e].m(t,a);d(t,e,a),n=!0},p(t,n){1&n&&(o=t[0],k(),s=w(s,n,r,1,t,o,a,e.parentNode,y,D,e,S),j())},i(t){if(!n){for(let t=0;t<o.length;t+=1)$(s[t]);n=!0}},o(t){for(let e=0;e<s.length;e+=1)g(s[e]);n=!1},d(t){for(let e=0;e<s.length;e+=1)s[e].d(t);t&&i(e)}}}function A(t){let e,n,x,k,w,j;return w=new b({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),{c(){e=s("meta"),n=a(),x=s("div"),k=s("main"),o(w.$$.fragment),this.h()},l(t){const s=r('[data-svelte="svelte-cj3kxh"]',document.head);e=c(s,"META",{name:!0,content:!0}),s.forEach(i),n=l(t),x=c(t,"DIV",{class:!0});var a=f(x);k=c(a,"MAIN",{class:!0});var o=f(k);m(w.$$.fragment,o),o.forEach(i),a.forEach(i),this.h()},h(){document.title="Scroll'd",h(e,"name","description"),h(e,"content","Our friend group loves D&D, and this website has been created to help me and my players appriciate and document our home games."),h(k,"class","flex-1 flex w-full items-stretch justify-center "),h(x,"class","fixed inset-0 h-full w-full flex pt-24")},m(t,s){u(document.head,e),d(t,n,s),d(t,x,s),u(x,k),p(w,k,null),j=!0},p(t,[e]){const n={};17&e&&(n.$$scope={dirty:e,ctx:t}),w.$set(n)},i(t){j||($(w.$$.fragment,t),j=!0)},o(t){g(w.$$.fragment,t),j=!1},d(t){i(e),t&&i(n),t&&i(x),v(w)}}}var N=function(t,e,n,s){return new(n||(n=Promise))((function(a,o){function r(t){try{i(s.next(t))}catch(e){o(e)}}function c(t){try{i(s.throw(t))}catch(e){o(e)}}function i(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,c)}i((s=s.apply(t,e||[])).next())}))};const K=({fetch:t})=>N(void 0,void 0,void 0,(function*(){return t(`${M}/index.json`).then((t=>t.json()))}));function L(t,e,n){let{campaigns:s}=e;return t.$$set=t=>{"campaigns"in t&&n(0,s=t.campaigns)},[s]}class O extends t{constructor(t){super(),e(this,t,L,A,n,{campaigns:0})}}export{O as default,K as load};
