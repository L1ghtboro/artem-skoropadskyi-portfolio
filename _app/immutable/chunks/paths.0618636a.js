import{n as c,s as p}from"./scheduler.7a274a43.js";const e=[];function k(o,l=c){let i;const n=new Set;function r(t){if(p(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(o))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=l(r,u)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1kduiqn)==null?void 0:f.base)??"/artem-skoropadskyi-portfolio";var a;const g=((a=globalThis.__sveltekit_1kduiqn)==null?void 0:a.assets)??d;export{g as a,d as b,k as w};
