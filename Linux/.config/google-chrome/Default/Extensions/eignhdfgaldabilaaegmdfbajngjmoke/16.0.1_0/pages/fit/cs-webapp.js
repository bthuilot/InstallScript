!function(){"use strict";var e='Object.defineProperty(window, "open", {"value": function() {document.write("<xmp style=display:none>");throw "test";}});';!function t(){if(document.documentElement){var n=document.createElement("script");n.textContent=e,document.documentElement.insertBefore(n,document.documentElement.firstChild)}else setTimeout(t,.01)}()}();