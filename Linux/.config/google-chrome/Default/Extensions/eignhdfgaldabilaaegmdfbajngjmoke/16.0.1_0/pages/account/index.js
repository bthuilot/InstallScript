cjModules.define(function(){"use strict";return function(e){function t(){var e=document.createElement("div");e.className="account-top",e.dataset.authuser=g.account.authuser,e.dataset.pageid=g.account.pageid;var t=cjMaterial.createElement("icon",{withShell:!0,color:"#fff",size:72,url:g.account.photo+"?sz="+(cjBasics.isRetina?"144":"72")});e.appendChild(t);var a=document.createElement("div");a.className="account-details";var n=document.createElement("div");n.className="account-name",n.textContent=g.account.name,a.appendChild(n);var c=document.createElement("div");c.className="account-email",c.textContent="none"===g.account.pageid?g.account.email:"Brand Account",a.appendChild(c);var i=cjMaterial.createElement("button",{label:bmRuntime.i18n("cj_i18n_00419","My account"),onClick:function(){bmRuntime.servicePageData.gsettings?bmRuntime.changeToPage("gsettings"):bmRuntime.openTab("https://myaccount.google.com/u/"+g.account.authuser+"/b/"+g.account.pageid+"/")}});a.appendChild(i);var o=cjMaterial.createElement("button",{label:bmRuntime.i18n("cj_i18n_00161","About me"),onClick:function(){bmRuntime.servicePageData.aboutme?bmRuntime.changeToPage("aboutme"):bmRuntime.openTab("https://aboutme.google.com/u/"+g.account.authuser+"/b/"+g.account.pageid+"/")}});return a.appendChild(o),e.appendChild(a),e}function a(e){var t=cjMaterial.createElement("item");t.dataset.authuser=e.authuser,t.dataset.pageid=e.pageid;var a=cjMaterial.createElement("icon",{withShell:!0,color:"#fff",size:40,url:e.photo+"?sz="+(cjBasics.isRetina?"80":"40")});t.appendChild(a);var n=document.createElement("div");n.className="cj-md-item__body";var c=document.createElement("div");c.className="cj-md-item__header",c.textContent=e.name,n.appendChild(c);var i=document.createElement("div");return i.className="cj-md-secondarytext",i.textContent="none"===e.pageid?e.email:bmRuntime.i18n("cj_i18n_00363","Brand account"),n.appendChild(i),t.appendChild(n),t}function n(e,t){var n=a(e);return n.addEventListener("click",function(){n.classList.contains("active")?t.classList.remove("on"):g.accounts.change(e)}),n}function c(a){var c=t();e.appendChild(c);for(var i=cjMaterial.createElement("container",{scrollable:!0,shadow:!0}),l=cjMaterial.createElement("list"),u=0;u<a.length;u++)if(g.account.key!==a[u].key&&(o||"none"===a[u].pageid)){var d=n(a[u],i);l.appendChild(d)}i.appendChild(l),e.appendChild(i);var m=document.createElement("div");m.className="account-bottom";var r=cjMaterial.createElement("button",{label:bmRuntime.i18n("cj_i18n_00361","Add account"),onClick:g.accounts.add});m.appendChild(r);var s=cjMaterial.createElement("button",{label:bmRuntime.i18n("cj_i18n_00362","Sign out all accounts"),onClick:g.accounts.signout});m.appendChild(s),e.appendChild(m)}function i(){g.initialized.then(function(){return g.accounts.list()}).then(c)}var o=bmRuntime.portalOnSide||bmRuntime.servicePageData[bmRuntime.standaloneService].gplusPages;if(!bmRuntime.portalOnSide){var l=cjMaterial.createElement("iconbutton",{iconName:"__mdi:close",onClick:function(){e.classList.remove("on")}});l.classList.add("bm-close-popup-button"),e.appendChild(l)}i()}});