// ==UserScript==
// @name         PlayerUp AutoBumper
// @namespace
// @version      0.1
// @description
// @author       https://github.com/CainDev
// @match        https://www.playerup.com/threads/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=playerup.com
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
(function() {
    'use strict';

    Main();
    var prev_thread;
    var curr_thread;
    var bump_interval = 21600;
    /*
      21600 = 6 Hours (Premium Users: Bump loads of times a day)
      28800 = 8 Hours (New Users: Max 3 bumps a day)
    */
    var threads = [
        // Put your thread ids here.
        5681552, 5681551, 5681550
    ];

    async function ThreadCheck() {
        prev_thread = await GM.getValue('prev_thread');
    };

    async function Main() {
        await ThreadCheck();
        curr_thread = prev_thread + 1;
        await GM.setValue('prev_thread', curr_thread);

        if (curr_thread > threads.length) {
            await GM.setValue('prev_thread', 0);
            await new Promise(r => setTimeout(r, (bump_interval * 1000)));
            location.href = "https://www.playerup.com/threads/" + String(threads[0]);
        } else {
            await new Promise(r => setTimeout(r, 6000));
            document.querySelector("#upButtonCountdown").click();
            location.href = "https://www.playerup.com/threads/" + String(threads[curr_thread]);
        }
    }
})();
