// ==UserScript==
// @name         Login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Handles Login Page
// @author       You
// @match        http://www.zombiewrath.com/index.php
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function ClickStartPlaying() {
        document.querySelector("#tabs > ul > li:nth-child(2) > a").click();
    }

    function GenRandomNumber() {
        let RandomNumber = Math.ceil(Math.random() * 2147000)
        document.querySelector("#createtextbox").value = RandomNumber;
    }

    function RegisterAccount() {
        let button = document.evaluate("/html/body/div[1]/div/center/div/div[2]/input", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        button.click();

    }

    setTimeout(ClickStartPlaying, 1000);
    setTimeout(GenRandomNumber, 1500);
    setTimeout(RegisterAccount, 2000);
})();