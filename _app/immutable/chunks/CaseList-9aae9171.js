import{S as Y,i as Z,s as ee,k as x,q as L,a as U,l as b,m as $,r as V,h as v,c as j,n as m,K,b as M,G as _,u as G,B as N,L as B,e as O,f as D,g as te,t as H,d as le,w as ae,x as se,y as re,z as ne}from"./index-72c0081a.js";function F(c,t,l){const e=c.slice();return e[3]=t[l],e}function J(c,t,l){const e=c.slice();return e[3]=t[l],e}function P(c){let t,l,e=c[3]+"",a;return{c(){t=x("h2"),l=L("#"),a=L(e),this.h()},l(s){t=b(s,"H2",{class:!0});var f=$(t);l=V(f,"#"),a=V(f,e),f.forEach(v),this.h()},h(){m(t,"class","px-1")},m(s,f){M(s,t,f),_(t,l),_(t,a)},p(s,f){f&1&&e!==(e=s[3]+"")&&G(a,e)},d(s){s&&v(t)}}}function Q(c){let t,l,e=c[3]+"",a;return{c(){t=x("h2"),l=L("#"),a=L(e),this.h()},l(s){t=b(s,"H2",{class:!0});var f=$(t);l=V(f,"#"),a=V(f,e),f.forEach(v),this.h()},h(){m(t,"class","px-1")},m(s,f){M(s,t,f),_(t,l),_(t,a)},p(s,f){f&1&&e!==(e=s[3]+"")&&G(a,e)},d(s){s&&v(t)}}}function oe(c){let t,l,e,a=c[0].meta.title+"",s,f,d,i,q,h,u,o,k,E,I=c[0].meta.tags,g=[];for(let n=0;n<I.length;n+=1)g[n]=P(J(c,I,n));let C=c[0].meta.tags,p=[];for(let n=0;n<C.length;n+=1)p[n]=Q(F(c,C,n));return{c(){t=x("a"),l=x("div"),e=x("h2"),s=L(a),f=U(),d=x("div"),i=x("div");for(let n=0;n<g.length;n+=1)g[n].c();q=U(),h=x("div");for(let n=0;n<p.length;n+=1)p[n].c();u=U(),o=x("img"),this.h()},l(n){t=b(n,"A",{class:!0,href:!0});var w=$(t);l=b(w,"DIV",{class:!0});var r=$(l);e=b(r,"H2",{class:!0});var S=$(e);s=V(S,a),S.forEach(v),f=j(r),d=b(r,"DIV",{class:!0});var R=$(d);i=b(R,"DIV",{class:!0});var z=$(i);for(let y=0;y<g.length;y+=1)g[y].l(z);z.forEach(v),q=j(R),h=b(R,"DIV",{class:!0});var A=$(h);for(let y=0;y<p.length;y+=1)p[y].l(A);A.forEach(v),R.forEach(v),r.forEach(v),u=j(w),o=b(w,"IMG",{class:!0,src:!0,alt:!0}),w.forEach(v),this.h()},h(){m(e,"class","text-orange-500 w-32"),m(i,"class","whitespace-nowrap animate-marquee opacity-0 group-hover:opacity-80 hover:transition-opacity flex flex-row flex-wrap"),m(h,"class","absolute top-0 whitespace-nowrap animate-marquee2 opacity-0 group-hover:opacity-80 hover:transition-opacity flex flex-row flex-wrap"),m(d,"class","relative overflow-x-hidden w-32"),m(l,"class","absolute group-hover:w-52"),m(o,"class","object-none w-32 h-32 group-hover:w-52 ease-in-out duration-300"),K(o.src,k=c[1])||m(o,"src",k),m(o,"alt",""),m(t,"class","underline p-1 w-32 h-32 group hover:w-52 hover:text-2xl ease-in-out duration-300"),m(t,"href",E=c[0].path)},m(n,w){M(n,t,w),_(t,l),_(l,e),_(e,s),_(l,f),_(l,d),_(d,i);for(let r=0;r<g.length;r+=1)g[r].m(i,null);_(d,q),_(d,h);for(let r=0;r<p.length;r+=1)p[r].m(h,null);_(t,u),_(t,o)},p(n,[w]){if(w&1&&a!==(a=n[0].meta.title+"")&&G(s,a),w&1){I=n[0].meta.tags;let r;for(r=0;r<I.length;r+=1){const S=J(n,I,r);g[r]?g[r].p(S,w):(g[r]=P(S),g[r].c(),g[r].m(i,null))}for(;r<g.length;r+=1)g[r].d(1);g.length=I.length}if(w&1){C=n[0].meta.tags;let r;for(r=0;r<C.length;r+=1){const S=F(n,C,r);p[r]?p[r].p(S,w):(p[r]=Q(S),p[r].c(),p[r].m(h,null))}for(;r<p.length;r+=1)p[r].d(1);p.length=C.length}w&2&&!K(o.src,k=n[1])&&m(o,"src",k),w&1&&E!==(E=n[0].path)&&m(t,"href",E)},i:N,o:N,d(n){n&&v(t),B(g,n),B(p,n)}}}function ce(c,t,l){let{caseStudy:e}=t;const a=new Map([["Mechanical Design",new URL(""+new URL("../../../images/Mechanical Design.jfif",import.meta.url).href,self.location).href]]);let s;return a.has(e.meta.image)?s=a.get(e.meta.image):s=new URL(""+new URL("../../../images/placeholder.png",import.meta.url).href,self.location).href,c.$$set=f=>{"caseStudy"in f&&l(0,e=f.caseStudy)},[e,s]}class ie extends Y{constructor(t){super(),Z(this,t,ce,oe,ee,{caseStudy:0})}}function T(c,t,l){const e=c.slice();return e[1]=t[l],e}function W(c){let t,l,e,a,s,f,d=c[0],i=[];for(let h=0;h<d.length;h+=1)i[h]=X(T(c,d,h));const q=h=>H(i[h],1,1,()=>{i[h]=null});return{c(){t=x("div"),l=x("h1"),e=L("Case Studies"),a=U(),s=x("div");for(let h=0;h<i.length;h+=1)i[h].c();this.h()},l(h){t=b(h,"DIV",{class:!0});var u=$(t);l=b(u,"H1",{class:!0});var o=$(l);e=V(o,"Case Studies"),o.forEach(v),a=j(u),s=b(u,"DIV",{class:!0});var k=$(s);for(let E=0;E<i.length;E+=1)i[E].l(k);k.forEach(v),u.forEach(v),this.h()},h(){m(l,"class","text-xl underline "),m(s,"class","grid grid-flow-col col-span-4 p-4"),m(t,"class","relative container mx-auto w-full flex flex-col items-center scroll-auto")},m(h,u){M(h,t,u),_(t,l),_(l,e),_(t,a),_(t,s);for(let o=0;o<i.length;o+=1)i[o].m(s,null);f=!0},p(h,u){if(u&1){d=h[0];let o;for(o=0;o<d.length;o+=1){const k=T(h,d,o);i[o]?(i[o].p(k,u),D(i[o],1)):(i[o]=X(k),i[o].c(),D(i[o],1),i[o].m(s,null))}for(te(),o=d.length;o<i.length;o+=1)q(o);le()}},i(h){if(!f){for(let u=0;u<d.length;u+=1)D(i[u]);f=!0}},o(h){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)H(i[u]);f=!1},d(h){h&&v(t),B(i,h)}}}function X(c){let t,l;return t=new ie({props:{caseStudy:c[1]}}),{c(){ae(t.$$.fragment)},l(e){se(t.$$.fragment,e)},m(e,a){re(t,e,a),l=!0},p(e,a){const s={};a&1&&(s.caseStudy=e[1]),t.$set(s)},i(e){l||(D(t.$$.fragment,e),l=!0)},o(e){H(t.$$.fragment,e),l=!1},d(e){ne(t,e)}}}function he(c){let t,l,e=c[0].length>0&&W(c);return{c(){e&&e.c(),t=O()},l(a){e&&e.l(a),t=O()},m(a,s){e&&e.m(a,s),M(a,t,s),l=!0},p(a,[s]){a[0].length>0?e?(e.p(a,s),s&1&&D(e,1)):(e=W(a),e.c(),D(e,1),e.m(t.parentNode,t)):e&&(te(),H(e,1,1,()=>{e=null}),le())},i(a){l||(D(e),l=!0)},o(a){H(e),l=!1},d(a){e&&e.d(a),a&&v(t)}}}function fe(c,t,l){let{cases:e}=t;return c.$$set=a=>{"cases"in a&&l(0,e=a.cases)},[e]}class _e extends Y{constructor(t){super(),Z(this,t,fe,he,ee,{cases:0})}}export{_e as C};
