"use strict";
var PrüfungsaufgabeGiS;
(function (PrüfungsaufgabeGiS) {
    window.addEventListener("load", init);
    function init(_event) {
        createButtons();
    }
    function createButtons() {
        let getData = document.getElementById("get");
        getData.addEventListener("click", getButtonfunction);
        let buttonHTML = document.getElementById("getHTML");
        buttonHTML.addEventListener("click", getHTML);
    }
    let formData;
    async function getButtonfunction() {
        let url = "https://manusfirstapp.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        await fetch(url);
        let response = await fetch(url);
        let response2 = await response.text();
        document.getElementById("serverResponse").innerHTML = response2;
        console.log(response2);
    }
    async function getHTML() {
        let serverURL = "https://manusfirstapp.herokuapp.com";
        serverURL += "/html";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let response = await fetch(serverURL);
        let responseText = await response.text();
        let serverResponse = document.getElementById("serverResponseHTML");
        serverResponse.innerHTML = responseText;
    }
})(PrüfungsaufgabeGiS || (PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=back-end.js.map