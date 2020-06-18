// ==UserScript==
// @name         MedicJail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.zombiewrath.com/mediccamp.php
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function LogOut() {
        window.location = "http://www.zombiewrath.com/logout.php";
    }

    LogOut();
})();