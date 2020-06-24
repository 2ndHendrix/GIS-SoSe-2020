"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let getActionHtmlButton = document.getElementById("getHTMLAction");
    getActionHtmlButton.addEventListener("click", getHTML);
    let getActionJsonButton = document.getElementById("getJSONAction");
    getActionJsonButton.addEventListener("click", getJSON);
    async function getHTML() {
        formData = new FormData(document.forms[0]);
        let dataURL = "https://gis2020vr.herokuapp.com";
        dataURL += "/html";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        dataURL += "?" + query.toString();
        let server = await fetch(dataURL);
        let serverText = await server.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = serverText;
    }
    async function getJSON() {
        formData = new FormData(document.forms[0]);
        let dataURL = "https://gis2020vr.herokuapp.com";
        dataURL += "/json";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        dataURL += "?" + query.toString();
        let server = await fetch(dataURL);
        let serverText = await server.json();
        console.log(serverText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map