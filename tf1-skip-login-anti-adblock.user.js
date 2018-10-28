// ==UserScript==
// @name         TF1 login and anti-adblock bypass
// @version      0.8
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
            var div = document.createElement("div");
            div.setAttribute('class', 'needSubscribe');
            var p = document.createElement("p");
            ['normal','cinema'].forEach(function(mode) {
                var text = 'PLAY';
                var btn = document.createElement("a");
                btn.setAttribute('class', 'buttonConnect toConnect');
                btn.setAttribute('style', 'width:auto;padding: 0 14px;');
                var queryDestination = (mode == 'cinema')?'body':'div.playerVideo';
                var onclickCode = "var iframe = document.createElement('iframe');";
                onclickCode += "iframe.setAttribute('src', document.querySelector('#zonePlayer').getAttribute('data-src'));";
                onclickCode += "iframe.setAttribute('class', 'iframe_player');";
                onclickCode += "iframe.setAttribute('style', 'width:100%;height:100%;');";
                onclickCode += "document.querySelector('div.needSubscribe').remove();";
                onclickCode += "document.querySelector('"+queryDestination+"').replaceWith(iframe);";
                if(mode == 'cinema') {
                    onclickCode += "document.querySelector('html').setAttribute('style', 'width:100%;height:100%;');";
                    text += ' + CINEMA MODE';
                }
                btn.setAttribute('onclick', onclickCode);
                btn.innerHTML = text;
                p.appendChild(btn);
                var br = document.createElement("br");
                p.appendChild(br);
            });
            div.appendChild(p);
            document.querySelector('div#zonePlayer').appendChild(div);
            var div2 = document.createElement("div");
            div2.setAttribute('class', 'playerVideo');
            div2.setAttribute('style', 'width:100%;height:100%;');
            document.querySelector('div#zonePlayer').appendChild(div2);
            document.querySelector('div#zonePlayer').style.height = "372px";
            document.querySelector('section#content_video').style.opacity = "1";
        }
    };
})();

