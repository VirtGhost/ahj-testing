!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();var t=document.querySelector(".validate-button"),r=document.querySelector(".card-number-input"),n=document.querySelector(".error-message-container");function c(){n.innerHTML="";var e=document.querySelector(".active");e&&e.classList.remove("active")}t.addEventListener("click",(function(e){e.preventDefault(),c();var t=r.value,a=document.createElement("p");if(function(e){for(var t=0,r=0;r<e.length;r++){var n=parseInt(e[r],10);(e.length-r)%2==0&&(n*=2)>9&&(n-=9),t+=n}return t%10==0}(t)&&""!==t){var i=function(e){return/^2/.test(e)?".mir":/^3[0|6|8]/.test(e)?".diners-club":/^3[1|5]/.test(e)?".jcb":/^3[4|7]/.test(e)?".american-express":/^4/.test(e)?".visa":/^5[1-5]/.test(e)?".mastercard":/^6[0]/.test(e)?".discover":null}(t);document.querySelector(i).classList.add("active"),a.className="valid-message",a.textContent="Card number VALID",n.appendChild(a)}else a.className="error-message",a.textContent="Invalid card number",n.appendChild(a)})),r.addEventListener("input",(function(){c()}));e.p}();