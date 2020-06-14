"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    loadArtikel("data.json");
    async function loadArtikel(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        Aufgabe07.artikel = await JSON.parse(JSON.stringify(jsonArray));
        createArtikel();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script_data.js.map