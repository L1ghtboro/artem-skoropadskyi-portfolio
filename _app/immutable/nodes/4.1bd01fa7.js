import{s as me,f as C,a as S,l as le,g as E,h as L,c as P,d as h,m as se,j as k,i as B,v as p,n as he,x as de,A as Z,e as oe,r as _e}from"../chunks/scheduler.98dcdc08.js";import{S as ue,i as pe,b as D,d as I,m as V,a as _,t as v,e as y,g as re,c as ne}from"../chunks/index.bc2cb9f6.js";import{e as O,U as G,u as ve,o as we}from"../chunks/UIcon.e657b9f6.js";import{A as xe}from"../chunks/Analytics.c081821a.js";import{c as be,d as ae,g as Q,e as ke}from"../chunks/params.e9e4b034.js";import{C as Ce}from"../chunks/Card.23865a3e.js";import{C as Ee}from"../chunks/CardLogo.d328c2ce.js";import{C as De,a as K}from"../chunks/ChipIcon.4beb9609.js";import{b as W}from"../chunks/paths.4843fabf.js";import{S as Ie}from"../chunks/SearchPage.13d6c749.js";import{i as Ve}from"../chunks/index.97b3c5e0.js";function ie(a,t,r){const e=a.slice();return e[5]=t[r],e}function ye(a){let t,r;return t=new G({props:{icon:"i-carbon-building"}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,n){V(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function Le(a){let t,r;return t=new G({props:{icon:"i-carbon-location"}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,n){V(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function Se(a){let t,r;return t=new G({props:{icon:"i-carbon-hourglass"}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,n){V(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function ce(a){let t,r;return t=new K({props:{logo:Q(a[5].logo),name:a[5].name,href:`${W}/skills/${a[5].slug}`}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,n){V(t,e,n),r=!0},p(e,n){const l={};n&1&&(l.logo=Q(e[5].logo)),n&1&&(l.name=e[5].name),n&1&&(l.href=`${W}/skills/${e[5].slug}`),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function Pe(a){let t,r,e,n,l,i,$,o,s,f,d,j,g,b,A,q,ee,F,z=a[0].shortDescription+"",J,te,N,H;r=new Ee({props:{src:Q(a[0].logo),alt:a[0].company,size:75}}),i=new De({props:{title:a[0].name}}),s=new K({props:{name:`Company: ${a[0].company}`,$$slots:{default:[ye]},$$scope:{ctx:a}}}),d=new K({props:{name:`Location: ${a[0].location}`,$$slots:{default:[Le]},$$scope:{ctx:a}}}),g=new K({props:{name:`Contract: ${a[0].contract}`,$$slots:{default:[Se]},$$scope:{ctx:a}}});let U=O(a[0].skills),u=[];for(let c=0;c<U.length;c+=1)u[c]=ce(ie(a,U,c));const ge=c=>v(u[c],1,1,()=>{u[c]=null});return{c(){t=C("div"),D(r.$$.fragment),e=S(),n=C("div"),l=C("h3"),D(i.$$.fragment),$=S(),o=C("div"),D(s.$$.fragment),f=S(),D(d.$$.fragment),j=S(),D(g.$$.fragment),b=S(),A=C("div"),q=le(a[1]),ee=S(),F=C("div"),J=le(z),te=S(),N=C("div");for(let c=0;c<u.length;c+=1)u[c].c();this.h()},l(c){t=E(c,"DIV",{class:!0});var m=L(t);I(r.$$.fragment,m),e=P(m),n=E(m,"DIV",{class:!0});var w=L(n);l=E(w,"H3",{class:!0});var X=L(l);I(i.$$.fragment,X),X.forEach(h),$=P(w),o=E(w,"DIV",{class:!0});var M=L(o);I(s.$$.fragment,M),f=P(M),I(d.$$.fragment,M),j=P(M),I(g.$$.fragment,M),M.forEach(h),b=P(w),A=E(w,"DIV",{class:!0});var R=L(A);q=se(R,a[1]),R.forEach(h),ee=P(w),F=E(w,"DIV",{class:!0});var T=L(F);J=se(T,z),T.forEach(h),te=P(w),N=E(w,"DIV",{class:!0});var x=L(N);for(let Y=0;Y<u.length;Y+=1)u[Y].l(x);x.forEach(h),w.forEach(h),m.forEach(h),this.h()},h(){k(l,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(o,"class","row flex-wrap m-b-2 gap-1 text-0.9em font-300"),k(A,"class","text-[var(--accent-text)] text-[0.9em] font-200"),k(F,"class","experience-description"),k(N,"class","flex flex-row flex-wrap mt-5"),k(n,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(c,m){B(c,t,m),V(r,t,null),p(t,e),p(t,n),p(n,l),V(i,l,null),p(n,$),p(n,o),V(s,o,null),p(o,f),V(d,o,null),p(o,j),V(g,o,null),p(n,b),p(n,A),p(A,q),p(n,ee),p(n,F),p(F,J),p(n,te),p(n,N);for(let w=0;w<u.length;w+=1)u[w]&&u[w].m(N,null);H=!0},p(c,m){const w={};m&1&&(w.src=Q(c[0].logo)),m&1&&(w.alt=c[0].company),r.$set(w);const X={};m&1&&(X.title=c[0].name),i.$set(X);const M={};m&1&&(M.name=`Company: ${c[0].company}`),m&256&&(M.$$scope={dirty:m,ctx:c}),s.$set(M);const R={};m&1&&(R.name=`Location: ${c[0].location}`),m&256&&(R.$$scope={dirty:m,ctx:c}),d.$set(R);const T={};if(m&1&&(T.name=`Contract: ${c[0].contract}`),m&256&&(T.$$scope={dirty:m,ctx:c}),g.$set(T),(!H||m&1)&&z!==(z=c[0].shortDescription+"")&&he(J,z),m&1){U=O(c[0].skills);let x;for(x=0;x<U.length;x+=1){const Y=ie(c,U,x);u[x]?(u[x].p(Y,m),_(u[x],1)):(u[x]=ce(Y),u[x].c(),_(u[x],1),u[x].m(N,null))}for(re(),x=U.length;x<u.length;x+=1)ge(x);ne()}},i(c){if(!H){_(r.$$.fragment,c),_(i.$$.fragment,c),_(s.$$.fragment,c),_(d.$$.fragment,c),_(g.$$.fragment,c);for(let m=0;m<U.length;m+=1)_(u[m]);H=!0}},o(c){v(r.$$.fragment,c),v(i.$$.fragment,c),v(s.$$.fragment,c),v(d.$$.fragment,c),v(g.$$.fragment,c),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)v(u[m]);H=!1},d(c){c&&h(t),y(r),y(i),y(s),y(d),y(g),de(u,c)}}}function Ae(a){let t,r;return t=new Ce({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${W}/experience/${a[0].slug}`,color:a[0].color,$$slots:{default:[Pe]},$$scope:{ctx:a}}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,n){V(t,e,n),r=!0},p(e,[n]){const l={};n&1&&(l.href=`${W}/experience/${e[0].slug}`),n&1&&(l.color=e[0].color),n&257&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function Me(a,t,r){let{experience:e}=t;const n=be(e.period.from,e.period.to),l=`${ae(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,i=e.period.to?`${ae(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",$=`${l} - ${i} · ${n}`;return a.$$set=o=>{"experience"in o&&r(0,e=o.experience)},[e,$]}class je extends ue{constructor(t){super(),pe(this,t,Me,Ae,me,{experience:0})}}function fe(a,t,r){const e=a.slice();return e[4]=t[r],e[6]=r,e}function Be(a){let t,r,e=[],n=new Map,l,i,$=O(a[0]);const o=s=>s[4].slug;for(let s=0;s<$.length;s+=1){let f=fe(a,$,s),d=o(f);n.set(d,e[s]=$e(d,f))}return{c(){t=C("div"),r=S();for(let s=0;s<e.length;s+=1)e[s].c();l=oe(),this.h()},l(s){t=E(s,"DIV",{class:!0}),L(t).forEach(h),r=P(s);for(let f=0;f<e.length;f+=1)e[f].l(s);l=oe(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(s,f){B(s,t,f),B(s,r,f);for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(s,f);B(s,l,f),i=!0},p(s,f){f&1&&($=O(s[0]),re(),e=ve(e,f,o,1,s,$,n,l.parentNode,we,$e,l,fe),ne())},i(s){if(!i){for(let f=0;f<$.length;f+=1)_(e[f]);i=!0}},o(s){for(let f=0;f<e.length;f+=1)v(e[f]);i=!1},d(s){s&&(h(t),h(r),h(l));for(let f=0;f<e.length;f+=1)e[f].d(s)}}}function Ne(a){let t,r,e,n,l="Could not find anything...",i;return r=new G({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),D(r.$$.fragment),e=S(),n=C("p"),n.textContent=l,this.h()},l($){t=E($,"DIV",{class:!0});var o=L(t);I(r.$$.fragment,o),e=P(o),n=E(o,"P",{class:!0,"data-svelte-h":!0}),_e(n)!=="svelte-1jyyf6v"&&(n.textContent=l),o.forEach(h),this.h()},h(){k(n,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m($,o){B($,t,o),V(r,t,null),p(t,e),p(t,n),i=!0},p:Z,i($){i||(_(r.$$.fragment,$),i=!0)},o($){v(r.$$.fragment,$),i=!1},d($){$&&h(t),y(r)}}}function $e(a,t){let r,e,n,l,i,$,o,s,f,d,j;return i=new G({props:{icon:"i-carbon-condition-point",classes:""}}),s=new je({props:{experience:t[4]}}),{key:a,first:null,c(){r=C("div"),e=C("div"),n=S(),l=C("div"),D(i.$$.fragment),$=S(),o=C("div"),D(s.$$.fragment),f=S(),this.h()},l(g){r=E(g,"DIV",{class:!0});var b=L(r);e=E(b,"DIV",{class:!0}),L(e).forEach(h),n=P(b),l=E(b,"DIV",{class:!0});var A=L(l);I(i.$$.fragment,A),A.forEach(h),$=P(b),o=E(b,"DIV",{class:!0});var q=L(o);I(s.$$.fragment,q),q.forEach(h),f=P(b),b.forEach(h),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(l,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(o,"class","flex-1 col items-stretch"),k(r,"class",d=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(g,b){B(g,r,b),p(r,e),p(r,n),p(r,l),V(i,l,null),p(r,$),p(r,o),V(s,o,null),p(r,f),j=!0},p(g,b){t=g;const A={};b&1&&(A.experience=t[4]),s.$set(A),(!j||b&1&&d!==(d=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",d)},i(g){j||(_(i.$$.fragment,g),_(s.$$.fragment,g),j=!0)},o(g){v(i.$$.fragment,g),v(s.$$.fragment,g),j=!1},d(g){g&&h(r),y(i),y(s)}}}function Ue(a){let t,r,e,n;const l=[Ne,Be],i=[];function $(o,s){return o[0].length===0?0:1}return r=$(a),e=i[r]=l[r](a),{c(){t=C("div"),e.c(),this.h()},l(o){t=E(o,"DIV",{class:!0});var s=L(t);e.l(s),s.forEach(h),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(o,s){B(o,t,s),i[r].m(t,null),n=!0},p(o,s){let f=r;r=$(o),r===f?i[r].p(o,s):(re(),v(i[f],1,1,()=>{i[f]=null}),ne(),e=i[r],e?e.p(o,s):(e=i[r]=l[r](o),e.c()),_(e,1),e.m(t,null))},i(o){n||(_(e),n=!0)},o(o){v(e),n=!1},d(o){o&&h(t),i[r].d()}}}function qe(a){let t,r,e,n;return t=new xe({}),e=new Ie({props:{title:a[1],$$slots:{default:[Ue]},$$scope:{ctx:a}}}),e.$on("search",a[2]),{c(){D(t.$$.fragment),r=S(),D(e.$$.fragment)},l(l){I(t.$$.fragment,l),r=P(l),I(e.$$.fragment,l)},m(l,i){V(t,l,i),B(l,r,i),V(e,l,i),n=!0},p(l,[i]){const $={};i&129&&($.$$scope={dirty:i,ctx:l}),e.$set($)},i(l){n||(_(t.$$.fragment,l),_(e.$$.fragment,l),n=!0)},o(l){v(t.$$.fragment,l),v(e.$$.fragment,l),n=!1},d(l){l&&h(r),y(t,l),y(e,l)}}}function Fe(a,t,r){const{items:e,title:n}=ke;let l=[...e];return[l,n,$=>{const o=$.detail.search;if(Ve(o)){r(0,l=e);return}r(0,l=e.filter(s=>s.name.toLowerCase().includes(o)||s.company.toLowerCase().includes(o)||s.description.toLowerCase().includes(o)))}]}class We extends ue{constructor(t){super(),pe(this,t,Fe,qe,me,{})}}export{We as component};