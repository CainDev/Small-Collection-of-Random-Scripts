// ==UserScript==
// @name         Audience Bot
// @version      0.1
// @description  Increases Audience members on all Jackbox Party Games.
// @author       Cain
// @match        https://jackbox.tv/
// ==/UserScript==

(function() {
    'use strict';

    function Main(){
		// Sometimes the bot gets stuck. Just type manually type the room code out once to fix it.
		
        document.querySelector("#roomcode").value = "XHEF"; // Change to room code.
        document.querySelector("#username").value = Math.floor(Math.random() * Math.floor(9999999));
        document.querySelector("#button-join").click();
        setInterval(function(){location.reload();}, 1500);
    }

    setInterval(Main, 2000);
})();