"use strict";function setScrollNav(e,t){var n,i={};document.addEventListener("click",function(e){var t=e.target.getAttribute("href"),r=document.querySelector(t);t&&"#"===e.target.getAttribute("href")[0]&&(e.preventDefault(),r.scrollIntoView({behavior:"smooth"}))});try{var r=new IntersectionObserver(function(e){e.forEach(function(e){var t=document.querySelectorAll(".active");[].forEach.call(t,function(e){return e.classList.remove("active")}),i[e.target.id]=e.intersectionRatio;var r=0;for(var c in i)if(i[c]>r&&(r=i[c],n=c),.5<i[c]){var o=document.querySelector('[href="#'.concat(c,'"]'));o.classList.contains("active")||o.classList.add("active")}if(r<=.5){var a=document.querySelector('[href="#'.concat(n,'"]'));a.classList.contains("active")||a.classList.add("active")}})},{root:t,threshold:[0,.1,.2,.3,.4,.5]});[].forEach.call(e,function(e){r.observe(e)})}catch(e){console.log("The IntersectionObserver API might not be supported by the browser")}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=setScrollNav,require("./index.css");