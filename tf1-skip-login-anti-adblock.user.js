// ==UserScript==
// @name         TF1 login and anti-adblock bypass
// @version      0.3
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
                    if(document.querySelector('#program_nav nav ul li.follow button')) {
                        document.querySelector('#program_nav nav ul li.follow button').remove();
                        var btn = document.createElement("a");
                        btn.setAttribute('style', 'color: #fff;');
                        btn.setAttribute('onclick', "var iframe = document.createElement('iframe');iframe.setAttribute('src', document.querySelector('#zonePlayer').getAttribute('data-src')+'?useHD=1');iframe.setAttribute('class', 'iframe_player');iframe.setAttribute('style', 'width:100%;height:100%;');document.querySelector('body').replaceWith(iframe);document.querySelector('html').setAttribute('style', 'width:100%;height:100%;');");
                        btn.innerHTML = 'LOGIN/ANTI-ADBLOCK BYPASS';
                        document.querySelector('#program_nav nav ul li.follow').appendChild(btn);
                    }
                    if(document.querySelector('a.large_external_link')) {
                        document.querySelector('a.large_external_link').remove();
                        var btn2 = document.createElement("div");
                        btn2.setAttribute('class', 'large_external_link');
                        btn2.setAttribute('style', 'width:auto;padding: 0 14px;');
                        btn2.setAttribute('onclick', "var iframe = document.createElement('iframe');iframe.setAttribute('src', document.querySelector('#zonePlayer').getAttribute('data-src')+'?useHD=1');iframe.setAttribute('class', 'iframe_player');iframe.setAttribute('style', 'width:100%;height:100%;');document.querySelector('body').replaceWith(iframe);document.querySelector('html').setAttribute('style', 'width:100%;height:100%;');");
                        btn2.innerHTML = 'LOGIN/ANTI-ADBLOCK BYPASS';
                        document.querySelector('nav#header_large').insertBefore(btn2, document.querySelector('nav#header_large nav.large_account'));
                    }
                }, 2*1000*i);
            }
        }
    };
})();

