"use strict";var darkToggle=document.querySelector("#dark-mode-toggle"),button=document.querySelectorAll(".box > button"),footer=document.querySelector("#footer"),modalbtn=document.querySelectorAll(".modal > button");darkToggle.addEventListener("change",(function(){document.body.className=darkToggle.checked?"dark":""}));for(var _loop=function(e){button[e].addEventListener("click",(function(t){footer.className="opened";var o=".modal-"+button[e].getAttribute("aria-modal");document.querySelector(o).classList.add("visible")})),modalbtn[e].addEventListener("click",(function(t){footer.className="";var o=".modal-"+modalbtn[e].getAttribute("aria-modal");document.querySelector(o).classList.remove("visible")}))},i=0;i<button.length;i++)_loop(i);
//# sourceMappingURL=script.js.map