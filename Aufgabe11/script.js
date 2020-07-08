"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    // let getButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    // let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    let formData;
    let getButton;
    let sendButton;
    init();
    getButton = document.querySelector("#get");
    sendButton = document.querySelector("#send");
    //onClickButton wird bei einem Click auf den Button ausgeführt
    getButton.addEventListener("click", sendButtonfunction.bind(getButton));
    sendButton.addEventListener("click", getButtonfunction.bind(sendButton));
    function init() {
        getButton.addEventListener("click", sendButtonfunction);
        sendButton.addEventListener("click", getButtonfunction);
    }
    async function sendButtonfunction() {
        formData = new FormData(document.forms[0]);
        let url = "http://localhost:8100/send";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
    // "https://manusfirstapp.herokuapp.com"
    async function getButtonfunction() {
        let url = "http://localhost:8100/get";
        // tslint:disable-next-line: no-any
        await fetch(url);
        let response = await fetch(url);
        let response2 = await response.text();
        document.getElementById("serverResponse").innerHTML = response2;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//https://gis2020vr.herokuapp.com
//# sourceMappingURL=script.js.map