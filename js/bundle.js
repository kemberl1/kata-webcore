!function(e){function t(t){for(var o,c,a=t[0],s=t[1],l=t[2],d=0,f=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={0:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;i.push([4,1]),n()}([,,,,function(e,t,n){e.exports=n(6)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(5);var o=n(2),r=n(3);function i(){function e(){document.body.classList.remove("modal--open")}document.body.addEventListener("click",(function(t){var n=t.target,o=n.closest(".open-button"),r=document.querySelector(".blur-overlay");if(o){var i=o.dataset.target,c=document.querySelector('.aside-window[data-id="'.concat(i,'"]'));if(c)if("container1"===i||"container2"===i?(c.classList.toggle("form-open"),r.classList.toggle("blur-active")):(c.classList.toggle("window--open"),r.classList.toggle("blur-active")),c.classList.contains("window--open")||c.classList.contains("form-open"))document.querySelectorAll(".aside-window").forEach((function(e){e!==c&&(e.classList.remove("window--open","form-open"),r.classList.add("blur-active"))})),document.body.classList.add("modal--open");else e()}else{var a=document.querySelectorAll(".aside-window");n.closest(".aside-window")||a.forEach((function(t){t.classList.add("reverse-animation"),setTimeout((function(){t.classList.remove("window--open","form-open","reverse-animation")}),250),r.classList.remove("blur-active"),e()}))}})),window.addEventListener("resize",(function(){window.innerWidth>1439&&document.querySelectorAll(".aside-window").forEach((function(t){t.classList.remove("window--open"),e()}))})),document.querySelectorAll("a").forEach((function(e){e.addEventListener("click",(function(t){e.getAttribute("href").startsWith(".")&&t.preventDefault()}))}))}o.a.use([r.b,r.a]),document.addEventListener("DOMContentLoaded",(function(){!function(){var e=[];function t(){var t=document.querySelectorAll(".swiper");window.innerWidth>760?(e.forEach((function(e){e.destroy(!0,!0),console.log("swiper полностью удален")})),e=[]):t.forEach((function(t){e.find((function(e){return e.el===t}))||e.push(new o.a(t,{direction:"horizontal",loop:!1,slidesPerView:"auto",spaceBetween:16,slideToClickedSlides:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2500,disableOnInteraction:!0},allowTouchMove:!0}))}))}window.addEventListener("load",t),window.addEventListener("resize",t)}(),document.querySelectorAll(".button__show-more").forEach((function(e){e.addEventListener("click",(function(){var t=e.parentNode.querySelector(".content-container");t.classList.toggle("content-container-show--full"),e.classList.toggle("button__show-more--open"),t.classList.contains("content-container-show--full")?setTimeout((function(){e.textContent="Скрыть"}),300):setTimeout((function(){e.textContent="Читать далее"}),1100)}))})),i()}))}]);