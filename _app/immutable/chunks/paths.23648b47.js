import{A as b,s as p}from"./scheduler.98dcdc08.js";const e=[];function g(o,u=b){let i;const n=new Set;function r(t){if(p(o,t)&&(o=t,i)){const a=!e.length;for(const s of n)s[1](),e.push(s,o);if(a){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(o))}function _(t,a=b){const s=[t,a];return n.add(s),n.size===1&&(i=u(r,c)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:c,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1d6alsj)==null?void 0:f.base)??"/artem-skoropadskyi-portfolio";var l;const k=((l=globalThis.__sveltekit_1d6alsj)==null?void 0:l.assets)??d;export{k as a,d as b,g as w};
