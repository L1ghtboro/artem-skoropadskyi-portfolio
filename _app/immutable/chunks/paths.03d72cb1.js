import{A as c,s as h}from"./scheduler.98dcdc08.js";const e=[];function g(o,l=c){let i;const n=new Set;function r(t){if(h(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=l(r,f)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var a;const p=((a=globalThis.__sveltekit_1h2s74q)==null?void 0:a.base)??"/artem-skoropadskyi-portfolio";var u;const q=((u=globalThis.__sveltekit_1h2s74q)==null?void 0:u.assets)??p;export{q as a,p as b,g as w};