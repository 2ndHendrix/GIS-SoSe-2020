"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let submit = document.getElementById("button");
    submit.addEventListener("click", communicate);
    async function communicate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://2ndHendrix.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let requestURL = await response.text();
        console.log(requestURL);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map