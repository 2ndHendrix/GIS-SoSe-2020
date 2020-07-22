"use strict";
var PrüfungsaufgabeGiS;
(function (PrüfungsaufgabeGiS) {
    window.addEventListener("load", init);
    let formData;
    function init(_event) {
        createButtons();
    }
    function createButtons() {
        let getData = document.getElementById("get");
        getData.addEventListener("click", getButtonfunction);
        let buttonHTML = document.getElementById("getHTML");
        buttonHTML.addEventListener("click", getHTML);
    }
    async function getHTML() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://manusfirstapp.herokuapp.com/html";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let responseHTML = await fetch(serverURL);
        let responseText = await responseHTML.text();
        let serverResponse = document.getElementById("serverResponseHTML");
        serverResponse.innerHTML = responseText;
    }
    async function getButtonfunction() {
        formData = new FormData(document.forms[0]);
        let url = "https://manusfirstapp.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        await fetch(url);
        let response = await fetch(url);
        let response2 = await response.text();
        document.getElementById("serverResponse").innerHTML = response2;
        console.log(response2);
    }
})(PrüfungsaufgabeGiS || (PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=back-end.js.map