function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function l(t,n,e,o,r,c,i){const a=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(a){const r=u(n,e,o,i);t.p(r,a)}}let s,f=!1;function d(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function h(t,n){f?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const t=d(1,r+1,(t=>n[e[t]].claim_order),n[u].claim_order)-1;o[u]=e[t]+1;const c=t+1;e[c]=u,r=Math.max(c,r)}const c=[],i=[];let a=n.length-1;for(let u=e[r]+1;0!=u;u=o[u-1]){for(c.push(n[u-1]);a>=u;a--)i.push(n[a]);a--}for(;a>=0;a--)i.push(n[a]);c.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let u=0,l=0;u<i.length;u++){for(;l<c.length&&i[u].claim_order>=c[l].claim_order;)l++;const n=l<c.length?c[l]:null;t.insertBefore(i[u],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){f&&!e?h(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function _(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function y(){return $(" ")}function b(){return $("")}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t){return Array.from(t.childNodes)}function v(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(n(c))return e(c),t.splice(o,1),r||(t.claim_info.last_index=o),c}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(n(c))return e(c),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,c}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function E(t,n,e,o){return v(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):g(n)))}function A(t,n){return v(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>$(n)),!0)}function k(t){return A(t," ")}function N(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function S(t,n=document.body){return Array.from(n.querySelectorAll(t))}function j(t){s=t}function B(){if(!s)throw new Error("Function called outside component initialization");return s}function C(t){B().$$.on_mount.push(t)}function O(t){B().$$.after_update.push(t)}function q(t,n){B().$$.context.set(t,n)}const I=[],M=[],T=[],z=[],F=Promise.resolve();let D=!1;function G(t){T.push(t)}let H=!1;const P=new Set;function J(){if(!H){H=!0;do{for(let t=0;t<I.length;t+=1){const n=I[t];j(n),K(n.$$)}for(j(null),I.length=0;M.length;)M.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];P.has(n)||(P.add(n),n())}T.length=0}while(I.length);for(;z.length;)z.pop()();D=!1,H=!1,P.clear()}}function K(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}const L=new Set;let Q;function R(){Q={r:0,c:[],p:Q}}function U(){Q.r||r(Q.c),Q=Q.p}function V(t,n){t&&t.i&&(L.delete(t),t.i(n))}function W(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),Q.c.push((()=>{L.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function X(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],a=n[c];if(a){for(const t in i)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[c]=a}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function Y(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,n){t&&t.l(n)}function nt(t,n,o,i){const{fragment:a,on_mount:u,on_destroy:l,after_update:s}=t.$$;a&&a.m(n,o),i||G((()=>{const n=u.map(e).filter(c);l?l.push(...n):r(n),t.$$.on_mount=[]})),s.forEach(G)}function et(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){-1===t.$$.dirty[0]&&(I.push(t),D||(D=!0,F.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function rt(n,e,c,i,a,u,l=[-1]){const d=s;j(n);const h=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:e.context||[]),callbacks:o(),dirty:l,skip_bound:!1};let p=!1;if(h.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&ot(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),e.target){if(e.hydrate){f=!0;const t=w(e.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();e.intro&&V(n.$$.fragment),nt(n,e.target,e.anchor,e.customElement),f=!1,J()}j(d)}class ct{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=[];function at(n,e=t){let o;const r=[];function c(t){if(i(n,t)&&(n=t,o)){const t=!it.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),it.push(t,n)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,a=t){const u=[i,a];return r.push(u),1===r.length&&(o=e(c)||t),i(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{C as A,n as B,at as C,a as D,S as E,h as F,l as G,t as H,_ as I,ct as S,w as a,x as b,E as c,m as d,g as e,p as f,A as g,N as h,rt as i,Z as j,y as k,b as l,tt as m,k as n,nt as o,X as p,Y as q,R as r,i as s,$ as t,W as u,et as v,U as w,V as x,q as y,O as z};
