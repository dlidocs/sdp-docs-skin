!function(){"use strict";for(var e=document.querySelector(".toc-menu-content"),i=document.querySelectorAll("h2"),t=0;t<i.length;t++){var n=i[t],o=document.createElement("li");o.classList="toc header";var c=document.createElement("a");c.innerText=n.innerText,c.href="#"+d(n),c.classList="toc header-link",c.id=d(n)+"-link",o.appendChild(c),e.appendChild(o)}var r,l=document.querySelector("article").parentNode;function d(e){return e.id}function a(){document.querySelector(".progress-container").style.width=document.querySelector(".toolbar").offsetWidth+"px",s()}function s(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*1*100;document.getElementById("myBar").style.width=e+"%"}window.addEventListener("scroll",function(){for(var e,t=l.offsetTop,n=i.length-1;0<=n;n--){if(i[n].getBoundingClientRect().top<t){e=i[n];break}}if(e&&e!==r){var o=document.getElementById(d(e)+"-link");if(o.classList.add("active"),o.parentNode.classList.add("active"),r){var c=document.getElementById(d(r)+"-link");c.classList.remove("active"),c.parentNode.classList.remove("active")}r=e}r&&!e&&((c=document.getElementById(d(r)+"-link")).classList.remove("active"),c.parentNode.classList.remove("active"),r=void 0)}),a(),window.onresize=function(){a()},window.onscroll=function(){s()}}();
!function(){"use strict";for(var e=document.querySelectorAll(".button.versions"),t=0;t<e.length;t++){var n=e[t].getAttribute("component"),i=localStorage.getItem(n+"-pinned-version");if(i=i&&i.trim())e[t].innerText=i,e[t].style.display="inline-block",document.getElementById("nav-"+n+"-"+i).style.display="inline-block";else{var o=e[t].innerText.trim();e[t].style.display="inline-block",localStorage.setItem(n+"-pinned-version",o.trim()),document.getElementById("nav-"+n+"-"+o).style.display="inline-block"}}function r(e){var t=e.target,n=t.getAttribute("component"),i=t.getAttribute("version"),o=document.getElementById("versions-button-"+n),r=o.innerText.trim();o.innerText=i.trim(),o._tippy.hide(),localStorage.setItem(n+"-pinned-version",i.trim()),document.getElementById("nav-"+n+"-"+r).style.display="none",document.getElementById("nav-"+n+"-"+i).style.display="inline-block"}tippy(".button.versions",{content:function(e){var t=e.getAttribute("data-template");return document.getElementById("tippy-popover-"+t).innerHTML},onShown:function(e){for(var t=e.popper.querySelectorAll("div.version-option"),n=0;n<t.length;n++)t[n].addEventListener("click",r)},trigger:"click",placement:"bottom",interactive:"true",distance:1,offset:"-40, 5",theme:"versions",arrow:!1})}();
!function(){"use strict";for(var e=document.querySelectorAll(".nav-menu h3.title"),t=0;t<e.length;t++){e[t].addEventListener("click",function(){var e=m(this,"[component-nav-trees]");console.log("component navs -> "),console.log(e),this.classList.contains("expanded")?(this.classList.remove("expanded"),e.style.display="none"):(this.classList.add("expanded"),e.style.display="block")})}var n=document.querySelector(".nav-container"),i=document.querySelector(".nav-toggle");i.addEventListener("click",function(e){if(i.classList.contains("is-active"))return v(e);var t=document.documentElement;t.classList.add("is-clipped--nav"),i.classList.add("is-active"),n.classList.add("is-active"),t.addEventListener("click",v),u(e)}),n.addEventListener("click",u);var a=n.querySelector("[data-panel=menu]");if(a){var s,c,o=n.querySelector(".nav"),l=a.querySelector(".is-current-page");l?(function(e){var t,n=e.parentNode;for(;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}(l),function(e,t){var n=e.getBoundingClientRect(),i=n.height,a=window.getComputedStyle(o);"sticky"===a.position&&(i-=n.top-parseFloat(a.top));e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-i)+t.offsetTop)}(a,l.querySelector(".nav-link"))):a.scrollTop=0,(s=a,c=".nav-item-toggle",[].slice.call(s.querySelectorAll(c))).forEach(function(e){var t=e.parentElement;e.addEventListener("click",d.bind(t));var n=function(e,t){var n;if("nextElementSibling"in e)n=e.nextElementSibling;else for(n=e;(n=n.nextSibling)&&1!==n.nodeType;);return n&&t?n[n.matches?"matches":"msMatchesSelector"](t)&&n:n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",d.bind(t)))});var r=o.querySelector(".context");r&&r.addEventListener("click",function(){var e=o.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),o.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),a.addEventListener("mousedown",function(e){1<e.detail&&e.preventDefault()})}function d(){this.classList.toggle("is-active")}function v(e){var t=document.documentElement;t.classList.remove("is-clipped--nav"),i.classList.remove("is-active"),n.classList.remove("is-active"),t.removeEventListener("click",v),u(e)}function u(e){e.stopPropagation()}function m(e,t){var n=e.nextElementSibling;if(!t)return n;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=window.location.hash)&&(o=document.getElementById(n.slice(1)))&&(i.bind(o)(),setTimeout(i.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=e.hash.slice(1))&&(n=document.getElementById(t))&&e.addEventListener("click",i.bind(n))})}();
!function(){"use strict";var e=document.querySelector(".page-versions .version-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")})}}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});
!function(){"use strict";var e=document.querySelectorAll(".doc .listingblock code"),o=document.createElement("i");o.className="la la-copy clipboard";for(var t=0;t<e.length;t++){var n=o.cloneNode(!0);n.addEventListener("mouseover",function(e){console.log(e.target)}),e[t].insertBefore(n,e[t].childNodes[0])}new ClipboardJS(".la.la-copy.clipboard",{text:function(e){return e.parentNode.innerText}}).on("success",function(e){e.trigger._tippy.setContent("copied!")}),tippy.delegate(".doc .listingblock code",{target:".la.la-copy.clipboard",content:"copy to clipboard",animation:"shift-away",theme:"clipboard",delay:[500,0],placement:"bottom",hideOnClick:!1,onHidden:function(e){e.setContent("copy to clipboard")}})}();