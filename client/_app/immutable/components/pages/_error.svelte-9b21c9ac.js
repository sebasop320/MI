import{S,i as q,s as x,k as d,q as b,a as C,l as v,m as $,r as f,h as l,c as y,n as A,b as _,K as m,u as E,C as k,L as H}from"../../chunks/index-b794c41a.js";import{s as K}from"../../chunks/singletons-466ac005.js";const L=()=>{const t=K;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},j={subscribe(t){return L().page.subscribe(t)}};function w(t){let s,r=t[0].status+"",o,n,c=t[0].error.message+"",u,p,i,h;return{c(){s=d("h1"),o=b(r),n=b(": "),u=b(c),p=C(),i=d("a"),h=b("go back"),this.h()},l(e){s=v(e,"H1",{});var a=$(s);o=f(a,r),n=f(a,": "),u=f(a,c),a.forEach(l),p=y(e),i=v(e,"A",{href:!0});var g=$(i);h=f(g,"go back"),g.forEach(l),this.h()},h(){A(i,"href","/")},m(e,a){_(e,s,a),m(s,o),m(s,n),m(s,u),_(e,p,a),_(e,i,a),m(i,h)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=e[0].error.message+"")&&E(u,c)},i:k,o:k,d(e){e&&l(s),e&&l(p),e&&l(i)}}}function z(t,s,r){let o;return H(t,j,n=>r(0,o=n)),[o]}let F=class extends S{constructor(s){super(),q(this,s,z,w,x,{})}};export{F as default};