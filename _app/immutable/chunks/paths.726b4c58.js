import{A as c,s as _}from"./scheduler.98dcdc08.js";const e=[];function g(o,l=c){let i;const r=new Set;function n(t){if(_(o,t)&&(o=t,i)){const b=!e.length;for(const s of r)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){n(t(o))}function p(t,b=c){const s=[t,b];return r.add(s),r.size===1&&(i=l(n,f)||c),t(o),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:n,update:f,subscribe:p}}var a;const d=((a=globalThis.__sveltekit_pwrdeb)==null?void 0:a.base)??"/artem-skoropadskyi-portfolio";var u;const k=((u=globalThis.__sveltekit_pwrdeb)==null?void 0:u.assets)??d;export{k as a,d as b,g as w};
