"use strict";var darkToggle=document.querySelector("#dark-mode-toggle"),button=document.querySelectorAll(".box > button"),footer=document.querySelector("#footer"),modalbtn=document.querySelectorAll(".modal > button"),body=document.body;darkToggle.addEventListener("change",(function(){document.body.className=darkToggle.checked?"dark":"",localStorage.setItem("colorMode",body.className)}));for(var getLocalStorage=function(){var e=localStorage.getItem("colorMode");null!=e&&"dark"===e?(darkToggle.checked=!0,body.className=e):null==e&&localStorage.setItem("colorMode",body.className)},disableScrolling=function(){body.style.position="fixed",body.style.overflowY="hidden"},enableScrolling=function(){body.style.position="",body.style.overflowY=""},_loop=function(e){button[e].addEventListener("click",(function(){footer.className="opened";var o=".modal-"+button[e].getAttribute("aria-modal");document.querySelector(o).classList.add("visible"),disableScrolling()})),modalbtn[e].addEventListener("click",(function(){footer.className="";var o=".modal-"+modalbtn[e].getAttribute("aria-modal");document.querySelector(o).classList.remove("visible"),enableScrolling()}))},i=0;i<button.length;i++)_loop(i);getLocalStorage();
//# sourceMappingURL=script.js.map