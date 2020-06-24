"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    window.addEventListener("load", init);
    function init() {
        createButtons();
    }
    function createButtons() {
        let buttonActionHtml = document.getElementById("getHTML");
        buttonActionHtml.addEventListener("click", getHTML);
        let buttonActionJson = document.getElementById("getJSON");
        buttonActionJson.addEventListener("click", getJSON);
    }
    let formData;
    async function getHTML() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://gis2020vr.herokuapp.com";
        serverURL += "/html";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let response = await fetch(serverURL);
        let responseText = await response.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    async function getJSON() {
        formData = new FormData(document.forms[0]);
        let url = "https://gis2020vr.herokuapp.com";
        url += "/json";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map