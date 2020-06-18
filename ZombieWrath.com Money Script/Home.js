// ==UserScript==
// @name         Home
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.zombiewrath.com/main.php*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';


    var money = "";
    function SetCash() {
        money = document.evaluate("/html/body/div[2]/table/tbody/tr/td[1]/div/font/table[1]/tbody/tr[2]/td[2]/font", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
        money = money.replace("$", "");
        money = money.replace(",", "");
    }

    function VerifyCash() {
        SetCash();

        if (parseInt(money) < 3500) {
            window.location = "http://www.zombiewrath.com/main.php";
        } else {
            window.location = "http://www.zombiewrath.com/sendmoney.php?&id=10049";
        }
    }

    function makeRequest(questIDCount) {
        const Http = new XMLHttpRequest();
        const url = 'http://www.zombiewrath.com/missioncollect.php?&id=' + questIDCount;
        Http.open("GET", url);
        Http.send();

    }

    let questID = 0;
    function MainBot() {
        while (questID < 100) {
            makeRequest(questID);
            questID++;
            MainBot();
        }
    }

    MainBot();
    setTimeout(VerifyCash, 4000);
})();