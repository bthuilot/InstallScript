!function(){"use strict";function e(e){window.parent.postMessage({blackMenuOpenUrl:e},"*")}function n(e){var n=new URL(e),t=n.origin+n.pathname,a=n.search.replace("?","").split("&").filter(function(e){return!e.startsWith("bm_")}).join("&");a.length>2&&(t+="?"+a);var r=n.hash;return r.startsWith("#")&&(r=r.replace("#","")),r.length>1&&(t+="#"+r),t}function t(e){return"A"===e.tagName?e:e===document.body?null:t(e.parentNode)}var a="https://gsuite.google.com"===location.origin&&location.pathname.indexOf("/marketplace")!==-1;if(a){document.addEventListener("mousedown",function(e){var n=t(e.target);n&&n.href.indexOf("bm_")===-1&&(n.href+=location.search)});var r=document.createElement("div");r.addEventListener("click",function(){var t=n(location.href);e(t)}),r.className="bm-open-in-new",document.querySelector("#gb > div:nth-child(2)").appendChild(r)}}();