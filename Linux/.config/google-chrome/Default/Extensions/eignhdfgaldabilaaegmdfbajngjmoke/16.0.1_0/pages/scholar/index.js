cjModules.define(function(){"use strict";return function(e,t){function r(e){var t=cjBasics.urls.create(u,{authuser:g.account.authuser,q:e.q,hl:g.lang});return cjBasics.ajax(t).then(function(e){var t=e.split('id="gs_res_ccl_mid"')[1].replace('">',"blackMenuSplitHere").split("blackMenuSplitHere")[1].split('</div><div id="gs_res_ccl_bot"')[0];return(new DOMParser).parseFromString(t,"text/html")}).then(function(e){console.log(e),window.awesome=e;for(var t=[],r=0;r<e.children.length;r++){var l=e.children[r];"DIV"===l.tagName&&l.querySelector("h3")&&t.push({url:l.querySelector("h3 a")&&l.querySelector("h3 a").href.replace(h,"https://scholar.google.com/"),title:l.querySelector("h3").textContent,subTitle:l.querySelector(".gs_a")&&l.querySelector(".gs_a").textContent,description:l.querySelector(".gs_rs")&&l.querySelector(".gs_rs").textContent,citedBy:l.querySelector(".gs_fl>a:first-child")&&l.querySelector(".gs_fl>a:first-child").textContent,citedByUrl:l.querySelector(".gs_fl>a:first-child")&&l.querySelector(".gs_fl>a:first-child").href,relatedArticles:l.querySelector(".gs_fl>a:nth-child(2)")&&l.querySelector(".gs_fl>a:nth-child(2)").textContent,relatedArticlesUrl:l.querySelector(".gs_fl>a:nth-child(2)")&&l.querySelector(".gs_fl>a:nth-child(2)").href,AllVersions:l.querySelector(".gs_fl>a:nth-child(3):not([onclick]")&&l.querySelector(".gs_fl>a:nth-child(3):not([onclick]").textContent,AllVersionsUrl:l.querySelector(".gs_fl>a:nth-child(3):not([onclick]")&&l.querySelector(".gs_fl>a:nth-child(3):not([onclick]").href})}return t})}function l(e){var t=cjMaterial.createElement("card",{withPadding:!0}),r=cjMaterial.createElement("title",{label:e.title});if(e.url&&r.addEventListener("click",function(){bmRuntime.openTab(e.url)}),t.appendChild(r),e.subTitle){var l=cjMaterial.createElement("secondarytext",{label:e.subTitle});t.appendChild(l)}if(e.description){var n=document.createElement("article");n.textContent=e.description,t.appendChild(n)}return t}function n(e){if(o=e,e)r({q:e,hl:g.lang}).then(function(e){a.textContent="",e.forEach(function(e){var t=l(e);a.appendChild(t)})});else{a.textContent="";var t=cjMaterial.createElement("emptystate",{color:"#4285f4",iconName:"__mdi:search",subLabel:bmRuntime.i18n("cj_i18n_00046","Please enter a search query").toLowerCase()});a.appendChild(t)}}function c(){var r=bmElements.createElement("pageheader",{color:"#fff",light:!0,pageId:"scholar",searchboxProperties:{color:"#4285f4",onSubmit:n,onSubmitAlt:function(e){var t=cjBasics.urls.create(u,{q:e,authuser:g.account.authuser,hl:g.lang});bmRuntime.openTab(t)}}});e.appendChild(r),i(r.searchbox.select),a=cjMaterial.createElement("container",{scrollable:!0,shadow:!0,darker:!0}),e.appendChild(a),n(),t.setOpenInNewHandler(function(){var e={hl:g.lang};"0"!==g.account.authuser&&(e.authuser=g.account.authuser),""!==o&&(e.q=o);var t=cjBasics.urls.create(u,e);bmRuntime.openTab(t)})}var a,i=t.onPageDisplay,o="",s=location.href,u="https://scholar.google.com/scholar",h=s.substring(0,s.lastIndexOf("/")+1);c()}});