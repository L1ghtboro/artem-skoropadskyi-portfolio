import{n as a,s as _}from"./scheduler.7a274a43.js";const e=[];function d(o,l=a){let i;const n=new Set;function r(t){if(_(o,t)&&(o=t,i)){const f=!e.length;for(const s of n)s[1](),e.push(s,o);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function b(t){r(t(o))}function h(t,f=a){const s=[t,f];return n.add(s),n.size===1&&(i=l(r,b)||a),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:b,subscribe:h}}var c;const p=((c=globalThis.__sveltekit_1haghfi)==null?void 0:c.base)??"/artem-skoropadskyi-portfolio";var u;const k=((u=globalThis.__sveltekit_1haghfi)==null?void 0:u.assets)??p;export{k as a,p as b,d as w};
