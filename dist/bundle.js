"use strict";function setScrollNav(e,t){var n,s={};document.addEventListener("click",function(e){var t=e.target.getAttribute("href");t&&"#"===e.target.getAttribute("href")[0]&&(e.preventDefault(),document.querySelector(t).scrollIntoView({behavior:"smooth"}))});try{var r=new IntersectionObserver(function(e){e.forEach(function(e){var t=document.querySelectorAll(".active");t&&[].forEach.call(t,function(e){return e.classList.remove("active")}),s[e.target.id]=e.intersectionRatio;var r=0;for(var c in s)if(s[c]>r&&(r=s[c],n=c),1===s[c]){var o=document.querySelector(".active");o&&o.classList.remove("active");var a=document.querySelector('[href="#'.concat(c,'"]'));a.classList.contains("active")||a.classList.add("active")}if(r<1){var i=document.querySelector('[href="#'.concat(n,'"]'));i.classList.contains("active")||i.classList.add("active")}})},{root:t,rootMargin:"-50px 0px -50px 0px",threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});[].forEach.call(e,function(e){r.observe(e)})}catch(e){console.log("The IntersectionObserver API might not be supported by the browser")}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=setScrollNav,require("./index.css");