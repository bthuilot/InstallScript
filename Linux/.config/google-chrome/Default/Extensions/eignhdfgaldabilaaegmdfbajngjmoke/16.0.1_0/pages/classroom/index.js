cjModules.define(function(){"use strict";return function(e){function t(e){var t=e.split("/c/")[1];bmRuntime.openTab("https://classroom.google.com/u/"+g.account.authuser+"/c/"+t)}function n(){return g.cache.getItem("bm__cache__classroom__courses__response")}function o(e){var t=e||{};if(t.noCache!==!0)return n().then(function(e){return t.noCache=!0,e?{items:e,freshRequest:function(){return o(t)}}:o(t)});var a=cjBasics.urls.create("https://classroom.googleapis.com/v1/courses",{courseStates:["ACTIVE","PROVISIONED"],fields:"courses(alternateLink,name,section)",pageSize:"50"});return g.request(a,{fetchAs:"json"},{scope:["https://www.googleapis.com/auth/classroom.courses.readonly"]}).then(function(e){return g.cache.setItem("bm__cache__classroom__courses__response",e),e},function(e){return g.cache.remove("bm__cache__classroom__courses__response"),e.body&&e.body.indexOf("@NotGoogleAppsUser")!==-1?Promise.reject({error:"notGoogleAppsUser"}):Promise.reject(e)})}function a(e){var n=cjMaterial.createElement("item"),o=cjMaterial.createElement("icon",{withShell:!0,symbol:e.name[0]});n.appendChild(o);var a=document.createElement("div");a.className="cj-md-item__body",n.appendChild(a);var c=document.createElement("div");if(c.className="cj-md-item__header",c.textContent=e.name,a.appendChild(c),"section"in e){var s=cjMaterial.createElement("secondarytext",{label:e.section});a.appendChild(s)}return n.addEventListener("click",function(){t(e.alternateLink)}),n}function c(){var t=cjMaterial.createElement("emptystate",{color:"#4b4b4b",label:bmRuntime.i18n("cj_i18n_00087","No courses found"),iconName:"__mdi:class"});i.appendChild(t),bmRuntime.toggleLoading("off",e)}function s(t){if(i.textContent="",t.courses&&t.courses.length>0){var n=cjMaterial.createElement("list");t.courses.forEach(function(e){var t=a(e);n.appendChild(t)}),i.appendChild(n)}else c();t.freshRequest?t.freshRequest().then(s):bmRuntime.toggleLoading("off",e)}function r(){bmRuntime.toggleLoading("on",e);var t=bmElements.createElement("pageheader",{color:"#4b4b4b",pageId:"classroom",pageTitle:bmRuntime.i18n("cj_i18n_00305","Classroom")});e.appendChild(t),i=cjMaterial.createElement("container",{scrollable:!0,shadow:!0}),e.appendChild(i),o().then(s)["catch"](l)}var i,l=function(){var t=!1;return function(n){if(n&&t===!1&&"notAuthorized"===n.error){t=!0;var o=bmElements.createElement("fulldialog",{serviceLogo:{label:bmRuntime.i18n("cj_i18n_00305","Classroom")},iconName:"classroom",message:bmRuntime.i18n("cj_i18n_00237","To use Classroom, you need to give access to display your Classroom classes"),actionLabel:bmRuntime.i18n("cj_i18n_00224","Give permission"),action:n.authorize});e.appendChild(o)}}}();r()}});