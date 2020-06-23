"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let senden = document.getElementById("button");
    senden?.addEventListener("click", handleSenden);
    async function handleSenden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com/";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = antwort.url;
        console.log(antwort2);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map