!function(){"use strict";function e(){for(var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",t=Date.now().toString()+"-",n=0;n<12;n++)t+=e[Math.floor(Math.random()*e.length)];return t}function t(e){var t="https://"+e+".google.com/cjg-originrequest/"+i,n=document.createElement("iframe");return n.src=t,n.style.display="none",new Promise(function(t){window.addEventListener("message",function r(o){o.data.cjgOriginrequestReady&&o.data.extensionId===i&&o.data.subdomain===e&&t(n),window.removeEventListener("message",r)}),document.body.appendChild(n)})}function n(e){return s[e]||(s[e]=t(e)),s[e]}function r(t,r,o){var s=o&&o.subdomain||"www",a="https://"+s+".google.com/cjg-originrequest/"+i;return n(s).then(function(n){return new Promise(function(o,s){var d=e();window.addEventListener("message",function(e){var t=e.data;if(t.requestId===d&&t.extensionId===i){if(t.error)return void s(t.error);var n=t.result;if("json"===r.fetchAs)try{o(JSON.parse(n))}catch(a){s(a)}else o("xml"===r.fetchAs?(new DOMParser).parseFromString(n,"text/xml"):"html"===r.fetchAs?(new DOMParser).parseFromString(n,"text/html"):n)}}),n.contentWindow.postMessage({method:"cjgOriginrequest",extensionId:i,ajax:{url:t,method:r.method,body:r.body,headers:r.headers,credentials:r.credentials},requestId:d},a)})})}var o=window.browser||window.chrome,i=o.i18n.getMessage("@@extension_id"),s={};Object.defineProperty(window,"cjgOriginrequest",{value:r})}();