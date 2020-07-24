"use strict";
var PrüfungsaufgabeGiS;
(function (PrüfungsaufgabeGiS) {
    window.addEventListener("load", init);
    let getData = document.getElementById("get");
    getData.addEventListener("click", getButtonfunction);
    document.getElementById("delete")?.addEventListener("click", communicateDelete);
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
    async function communicateDelete(_click) {
        // let url: string = "http://localhost:8100";
        let url = "https://compaktdisk.herokuapp.com";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "/delete";
        url += "?" + query.toString();
        //console.log(url);
        let response = await fetch(url);
        console.log(response);
        // response.innerHTML = "Database cleared";
    }
})(PrüfungsaufgabeGiS || (PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=back-end.js.map