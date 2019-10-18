// JavaScript Document

      
        function CheckOnlineStatus(msg) {
            var status = document.getElementById("status");
            var condition = navigator.onLine ?  : "Internet connection is unavailable"; 
            var state = document.getElementById("state");
            state.innerHTML = condition;
        }

        function Pageloaded() {
           CheckOnlineStatus("load");
           document.body.addEventListener("online", function () {
           CheckOnlineStatus("online")
           }, false);
           document.body.addEventListener("offline", function () {
           CheckOnlineStatus("offline")
           }, false);
        }

  