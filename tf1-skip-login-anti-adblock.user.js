// ==UserScript==
// @name         TF1 login and anti-adblock bypass
// @version      0.1
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
        if(document.querySelector('#zonePlayer')) {
            for (var i =0; i < 10; i++) {
                setTimeout(function() {
                    if(document.querySelector('.container .content .btn_favorite')) {
                        document.querySelector('.container .content .btn_favorite').remove();
                        var btn = document.createElement("a");
                        btn.setAttribute('style', 'color: #fff; margin-top: 10px; display: inline-block; font-size: 1.4rem; padding: 14px; text-align: center; border-radius: 4px; border: 1px solid #fff;');
                        btn.setAttribute('onclick', "var iframe = document.createElement('iframe');iframe.setAttribute('src', document.querySelector('#zonePlayer').getAttribute('data-src'));iframe.setAttribute('class', 'iframe_player');document.querySelector('#zonePlayer').replaceWith(iframe);");
                        btn.innerHTML = 'LOGIN/ANTI-ADBLOCK BYPASS';
                        document.querySelector('.container .content').appendChild(btn);
                    }
                    if(document.querySelector('a.large_external_link')) {
                        document.querySelector('a.large_external_link').remove();
                        document.querySelector('a.large_external_link').remove();
                        var btn2 = document.createElement("div");
                        btn2.setAttribute('class', 'large_external_link');
                        btn2.setAttribute('style', 'width:auto;padding: 0 14px;');
                        btn2.setAttribute('onclick', "var iframe = document.createElement('iframe');iframe.setAttribute('src', document.querySelector('#zonePlayer').getAttribute('data-src'));iframe.setAttribute('class', 'iframe_player');document.querySelector('#zonePlayer').replaceWith(iframe);");
                        btn2.innerHTML = 'LOGIN/ANTI-ADBLOCK BYPASS';
                        document.querySelector('nav#header_large').insertBefore(btn2, document.querySelector('nav#header_large nav.large_account'));
                    }
                }, 2*1000*i);
            }
        }
    };
})();
