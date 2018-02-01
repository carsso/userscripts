// ==UserScript==
// @name         TF1 login and anti-adblock bypass
// @version      0.5
// @description  TF1 login and anti-adblock bypass
// @author       Carsso
// @updateURL    https://openuserjs.org/meta/Carsso/TF1_login_and_anti-adblock_bypass.meta.js
// @homepageURL  https://github.com/carsso/userscripts
// @include      https://www.tf1.fr/*
// @grant        none
// @license      MIT
//
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function () {
        if(document.querySelector('div#zonePlayer')) {
            document.querySelector('div#zonePlayer div.needAdBlockDisabled p').remove();
            document.querySelector('div#zonePlayer div.needSubscribe p').remove();
            var btn3 = document.createElement("a");
            btn3.setAttribute('class', 'buttonConnect toConnect');
            btn3.setAttribute('style', 'width:auto;padding: 0 14px;');
            btn3.setAttribute('onclick', "var iframe = document.createElement('iframe');iframe.setAttribute('src', document.querySelector('#zonePlayer').getAttribute('data-src')+'?useHD=1');iframe.setAttribute('class', 'iframe_player');iframe.setAttribute('style', 'width:100%;height:100%;');document.querySelector('body').replaceWith(iframe);document.querySelector('html').setAttribute('style', 'width:100%;height:100%;');");
            btn3.innerHTML = 'LOGIN/ANTI-ADBLOCK BYPASS';
            var p3 = document.createElement("p");
            p3.appendChild(btn3);
            document.querySelector('div#zonePlayer div.needAdBlockDisabled').appendChild(p3);
            document.querySelector('div#zonePlayer div.needSubscribe').appendChild(p3);
        }
    };
})();

