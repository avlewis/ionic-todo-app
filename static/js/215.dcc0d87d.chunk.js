/*! For license information please see 215.dcc0d87d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktodo=self.webpackChunktodo||[]).push([[215],{5215:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return i}});var o=n(1811),i=function(t){var e,n,i,v,l=10*-f,p=0,m=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,h=function(t){l=(0,o.u)(t),g(t)},E=function(){clearTimeout(v),v=void 0,n&&(b(!1),n=void 0)},w=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,k(a(t),t))},g=function(t){k(void 0,t)},k=function(t,e){if(!t||t!==n){clearTimeout(v),v=void 0;var i=(0,o.q)(e),a=i.x,c=i.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||S(n,a,c),b(!0)}if(t){var d=L.get(t);d&&(clearTimeout(d),L.delete(t));var f=r(t)?0:u;t.classList.remove(s),v=setTimeout((function(){S(t,a,c),v=void 0}),f)}n=t}},S=function(t,e,n){p=Date.now(),t.classList.add(s);var o=m&&c(t);o&&o.addRipple&&(T(),i=o.addRipple(e,n))},T=function(){void 0!==i&&(i.then((function(t){return t()})),i=void 0)},b=function(t){T();var e=n;if(e){var o=d-Date.now()+p;if(t&&o>0&&!r(e)){var i=setTimeout((function(){e.classList.remove(s),L.delete(e)}),d);L.set(e,i)}else e.classList.remove(s)}},R=document;R.addEventListener("ionScrollStart",(function(t){e=t.target,E()})),R.addEventListener("ionScrollEnd",(function(){e=void 0})),R.addEventListener("ionGestureCaptured",E),R.addEventListener("touchstart",(function(t){l=(0,o.u)(t),w(t)}),!0),R.addEventListener("touchcancel",h,!0),R.addEventListener("touchend",h,!0),R.addEventListener("mousedown",(function(t){var e=(0,o.u)(t)-f;l<e&&w(t)}),!0),R.addEventListener("mouseup",(function(t){var e=(0,o.u)(t)-f;l<e&&g(t)}),!0),R.addEventListener("contextmenu",(function(t){g(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=215.dcc0d87d.chunk.js.map