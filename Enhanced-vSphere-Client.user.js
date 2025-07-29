// ==UserScript==
// @name         Enhanced vSphere Client
// @namespace    https://openuserjs.org/users/Carsso
// @version      0.3
// @description  Enhance your vSphere Client - Supports vCenter 7.0, 8.0
// @author       Carsso
// @updateURL    https://openuserjs.org/meta/Carsso/Enhanced_vSphere_Client.meta.js
// @downloadURL  https://openuserjs.org/install/Carsso/Enhanced_vSphere_Client.user.js
// @homepageURL  https://github.com/carsso/userscripts
// @match        *://*/ui/*
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

// ==OpenUserJS==
// @author Carsso
// ==/OpenUserJS==

(function () {
    'use strict';
    if (document.querySelector('main-app#main-app-div.main-container')) {
        (new MutationObserver(check)).observe(document, { childList: true, subtree: true });

        function check(changes, observer) {
            //if (document.querySelector('vsc-app-main-layout .vui-panel object-navigator-view .inventory-tree vsc-inventory-tree-view')) {
            if (document.querySelector('vsc-app-main-layout .vui-panel object-navigator-view')) {
                observer.disconnect();
                console.log('Enhancing vSphere Client...');
                var titleElem = document.querySelector('vsc-app-main-layout .branding .title[data-test-id="vsphere.core.controlcenter.domainView"]')
                if (titleElem) {
                    titleElem.innerHTML = titleElem.innerHTML.replace(/vSphere Client/g, 'Enhanced vSphere Client');
                }
                GM_addStyle(`
                    vsc-inventory-tree-view clr-tabs.tab-content {
                        line-height: 1rem !important;
                    }
                    vsc-inventory-tree-view .clr-treenode-caret {
                        height: 1rem !important;
                    }
                    vsc-inventory-tree-view .cdk-tree-node {
                        line-height: 1rem !important;
                    }
                    vsc-inventory-tree-view .clr-treenode-caret {
                        flex: 0 0 0.8rem;
                        width: 0.8rem;
                    }
                `);
                document.querySelector('.column-switch-wrapper button').dispatchEvent(new Event('click'));
                setTimeout(function(){
                    var labels = document.querySelectorAll('.column-switch .switch-content label');
                    for (let label of labels) {
                        if (label.innerHTML === "Serveur"
                            || label.innerHTML === "Server"
                            || label.innerHTML === "Mise en file d'attente pendant"
                            || label.innerHTML === "Queued For") {
                            var input = document.getElementById(label.htmlFor);
                            input.checked = false;
                            input.dispatchEvent(new Event('change'));
                        }
                    }
                    document.querySelector('.column-switch-wrapper button').dispatchEvent(new Event('click'));
                }, 10);
            }
        }
    }
})();
