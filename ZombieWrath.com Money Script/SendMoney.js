// ==UserScript==
// @name         SendMoney
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.zombiewrath.com/sendmoney.php?&id=*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let money = "";
    function SetCash() {
        money = document.querySelector("body > div:nth-child(3) > table > tbody > tr > td.style2 > div > font > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > font").innerText;
        money = money.replace("$", "");
        money = money.replace(",", "");
    }

    function VerifyCash() {
        SetCash();
        if (parseInt(money) < 3500) {
            window.location = "http://www.zombiewrath.com/main.php";
        }
    }

    function SendMoney() {
        document.querySelector("#textbox").value = money;
        document.querySelector("#Submit").click();
    }

    function LogOut() {
        window.location = "http://www.zombiewrath.com/logout.php";
    }

    setTimeout(VerifyCash, 1250);
    setTimeout(SendMoney, 2500);
    setTimeout(LogOut, 3500);
})();