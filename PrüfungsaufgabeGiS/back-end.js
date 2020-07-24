"use strict";
var PrüfungsaufgabeGiS;
(function (PrüfungsaufgabeGiS) {
    window.addEventListener("load", init);
    let getData = document.getElementById("get");
    getData.addEventListener("click", getButtonfunction);
    document.getElementById("buttonDelete")?.addEventListener("click", communicateDelete);
    // tslint:disable-next-line: no-empty
    function init(_event) {
    }
    let formData;
    async function getButtonfunction() {
        formData = new FormData(document.forms[0]);
        // let url: string = "http://localhost:8100/get";
        let url = "https://manusfirstapp.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let response2 = await response.text();
        document.getElementById("serverResponse").innerHTML = response2;
        console.log("response");
    }
    async function communicateDelete() {
        let url = "https://manusfirstapp.herokuapp.com/delete";
        await fetch(url);
    }
})(PrüfungsaufgabeGiS || (PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=back-end.js.map