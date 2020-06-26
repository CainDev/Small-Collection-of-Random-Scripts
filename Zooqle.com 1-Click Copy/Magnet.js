// ==UserScript==
// @name         1-Click Copy Magnet Links
// @namespace    https://zooqle.com/
// @version      0.1
// @description  Copys magnet links instead of opening them.
// @author       Cain
// @match        https://zooqle.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var magnetLink = document.getElementsByClassName("nav nav-pills nav-stacked nav-compact")[0].children[1].children[0];
    var href = magnetLink.href;
    magnetLink.href = "#";
    magnetLink.onclick = function () {
        window.prompt("CTRL + C To Copy! + Enter to Finish", href);
    }
})();