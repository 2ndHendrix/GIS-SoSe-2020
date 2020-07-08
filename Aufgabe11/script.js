"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData;
    let getButton = document.getElementById("send");
    getButton.addEventListener("click", sendButtonfunction);
    let sendButton = document.getElementById("get");
    sendButton.addEventListener("click", getButtonfunction);
    async function sendButtonfunction() {
        formData = new FormData(document.forms[0]);
        let url = "https://localhost:8100";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
    // "https://manusfirstapp.herokuapp.com"
    async function getButtonfunction() {
        let url = "https://localhost:8100";
        // tslint:disable-next-line: no-any
        await fetch(url);
        let response = await fetch(url);
        let response2 = await response.text();
        document.getElementById("serverResponse").innerHTML = response2;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//https://gis2020vr.herokuapp.com
//# sourceMappingURL=script.js.map