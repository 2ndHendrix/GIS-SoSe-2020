"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    // let getButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    // let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    window.addEventListener("load", init);
    function init() {
        createButtons();
    }
    function createButtons() {
        let getButton = document.getElementById("get");
        getButton.addEventListener("click", getButtonfunction);
        let sendButton = document.getElementById("send");
        sendButton.addEventListener("click", sendButtonfunction);
    }
    let formData;
    async function sendButtonfunction() {
        formData = new FormData(document.forms[0]);
        let url = "https://gis2020vr.herokuapp.com/send";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
    //  "https://gis2020vr.herokuapp.com"
    // "https://manusfirstapp.herokuapp.com"
    async function getButtonfunction() {
        let url = "https://gis2020vr.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        await fetch(url);
        let response = await fetch(url);
        let response2 = await response.text();
        document.getElementById("serverResponse").innerHTML = response2;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map