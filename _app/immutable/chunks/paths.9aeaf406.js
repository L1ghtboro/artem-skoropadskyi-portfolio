import{A as c,s as p}from"./scheduler.98dcdc08.js";const e=[];function g(o,l=c){let i;const n=new Set;function r(t){if(p(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(o))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=l(r,u)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1d68iut)==null?void 0:f.base)??"/artem-skoropadskyi-portfolio";var a;const k=((a=globalThis.__sveltekit_1d68iut)==null?void 0:a.assets)??d;export{k as a,d as b,g as w};
