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