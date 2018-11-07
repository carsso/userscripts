// ==UserScript==
// @name         TF1 login and anti-adblock bypass
// @version      0.9
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
            document.querySelector('div#zonePlayer').innerHTML = "";
            document.querySelector('div#zonePlayer').style.height = "372px";
            document.querySelector('section#content_video').style.opacity = "1";
            var playerVideo = document.createElement("div");
            playerVideo.setAttribute('class', 'playerVideo');
            playerVideo.setAttribute('style', 'width:100%;height:100%;');
            document.querySelector('div#zonePlayer').appendChild(playerVideo);
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', document.querySelector('#zonePlayer').getAttribute('data-src'));
            iframe.setAttribute('class', 'iframe_player');
            iframe.setAttribute('style', 'width:100%;height:100%;');
            document.querySelector('div.playerVideo').replaceWith(iframe);
        }
    };
})();

