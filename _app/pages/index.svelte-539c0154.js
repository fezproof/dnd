import{S as t,i as n,s,e,j as a,c as r,a as o,m as c,d as i,b as l,f,o as h,x as u,u as p,v as m,l as $,p as g,q as d,r as x,J as v,w,B as j,K as y}from"../chunks/vendor-193e2de1.js";import{b as k}from"../chunks/paths-45dac81d.js";import{S,a as b}from"../chunks/ShardsContainer-640084e6.js";function M(t,n,s){const e=t.slice();return e[1]=n[s],e}function N(t,n){let s,e,r;const o=[{fixed:!0},n[1]];let l={};for(let a=0;a<o.length;a+=1)l=j(l,o[a]);return e=new b({props:l}),{key:t,first:null,c(){s=$(),a(e.$$.fragment),this.h()},l(t){s=$(),c(e.$$.fragment,t),this.h()},h(){this.first=s},m(t,n){f(t,s,n),h(e,t,n),r=!0},p(t,s){n=t;const a=1&s?g(o,[o[0],d(n[1])]):{};e.$set(a)},i(t){r||(u(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){t&&i(s),m(e,t)}}}function q(t){let n,s,e=[],a=new Map,r=t[0];const o=t=>t[1].link;for(let c=0;c<r.length;c+=1){let n=M(t,r,c),s=o(n);a.set(s,e[c]=N(s,n))}return{c(){for(let t=0;t<e.length;t+=1)e[t].c();n=$()},l(t){for(let n=0;n<e.length;n+=1)e[n].l(t);n=$()},m(t,a){for(let n=0;n<e.length;n+=1)e[n].m(t,a);f(t,n,a),s=!0},p(t,s){1&s&&(r=t[0],x(),e=v(e,s,o,1,t,r,a,n.parentNode,y,N,n,M),w())},i(t){if(!s){for(let t=0;t<r.length;t+=1)u(e[t]);s=!0}},o(t){for(let n=0;n<e.length;n+=1)p(e[n]);s=!1},d(t){for(let n=0;n<e.length;n+=1)e[n].d(t);t&&i(n)}}}function A(t){let n,s,$;return s=new S({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){n=e("main"),a(s.$$.fragment),this.h()},l(t){n=r(t,"MAIN",{class:!0});var e=o(n);c(s.$$.fragment,e),e.forEach(i),this.h()},h(){l(n,"class","flex-1 flex w-full items-stretch justify-center")},m(t,e){f(t,n,e),h(s,n,null),$=!0},p(t,[n]){const e={};17&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){$||(u(s.$$.fragment,t),$=!0)},o(t){p(s.$$.fragment,t),$=!1},d(t){t&&i(n),m(s)}}}var B=function(t,n,s,e){return new(s||(s=Promise))((function(a,r){function o(t){try{i(e.next(t))}catch(n){r(n)}}function c(t){try{i(e.throw(t))}catch(n){r(n)}}function i(t){var n;t.done?a(t.value):(n=t.value,n instanceof s?n:new s((function(t){t(n)}))).then(o,c)}i((e=e.apply(t,n||[])).next())}))};const C=({fetch:t})=>B(void 0,void 0,void 0,(function*(){const{campaigns:n}=yield t(`${k}/campaigns.json`).then((t=>t.json()));return{props:{campaigns:n}}}));function E(t,n,s){let{campaigns:e}=n;return t.$$set=t=>{"campaigns"in t&&s(0,e=t.campaigns)},[e]}export default class extends t{constructor(t){super(),n(this,t,E,A,s,{campaigns:0})}}export{C as load};