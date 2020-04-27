// ==UserScript==
// @name         Plan Restart Bot
// @namespace    https://freehourboost.com/
// @version      0.1
// @description  Restarts plans automatically.
// @author       Joel
// @match        https://freehourboost.com/panel/
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  /*
  To find Plan IDs right click and "Inspect Element" on the start/stop button of
  your desired plan, grab the "data-planid" number and copy and paste it below.
  */
  var plansIDs = ["848322", "487382", "3489328"];

  /*
  To make it scrape all the plans you have just set the variable allPlans = true;
  */
  var allPlans = true;
  var scrapedPlanIDs = [];
  var x = 8;
  var planID;

  function ScrapePlans() {
    // Checks how many plans there is and adds them to an array.
    try {
      planID = document.evaluate("/html/body/div[2]/div[2]/div[2]/div/div/div[" + x + "]/div/div[3]/table/tbody/tr/td[4]/a", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.id;
      scrapedPlanIDs.push(planID);
      x++;
      ScrapePlans();
    } catch {
      scrapedPlanIDs.forEach(x => console.log(x));
    }
  }

  function RunPauseScripts() {
    if (allPlans) {
      scrapedPlanIDs.forEach(id => document.querySelector("#" + id).click());
    } else {
      plansIDs.forEach(id => document.querySelector("#startstopbtn_" + id).click());
    }
  }

  function Script() {
    if (allPlans) {
      ScrapePlans();
      RunPauseScripts();
      setTimeout(RunPauseScripts, 5000);
    } else {
      RunPauseScripts();
      setTimeout(RunPauseScripts, 5000);
    }
  }

  Script();
})();
