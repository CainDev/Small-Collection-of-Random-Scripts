// ==UserScript==
// @name         Steamunlocked.net Link Fixer
// @namespace    github.com/gothboiclique
// @version      0.1
// @description  Replaces their broken links with working ones.
// @author       Cain
// @match        https://steamunlocked.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName('btn-download')[0].href = document.getElementsByClassName('btn-download')[0].href.replace("https://linksunlocked.com/?token=", "https://uploadhaven.com/download/");
})();