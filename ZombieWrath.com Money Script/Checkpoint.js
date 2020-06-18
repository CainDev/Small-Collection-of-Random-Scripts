// ==UserScript==
// @name         Checkpoint
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.zombiewrath.com/checkpoint.php*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function HandleCheckpoint() {
        document.querySelector("body > div:nth-child(3) > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > div.style2 > div > div:nth-child(10) > a > b").click();
    }

    function ResumeMoney() {
        window.location = "http://www.zombiewrath.com/sendmoney.php?&id=10049";
    }

    setTimeout(HandleCheckpoint, 1000);
    setTimeout(ResumeMoney, 2000);
})();