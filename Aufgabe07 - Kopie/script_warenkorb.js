"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    window.addEventListener("load", init);
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    function init(_event) {
        contentDiv = document.querySelector(".warenkorb");
        pGesamtpreis = document.querySelector("#gesamt");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let artikelsjson = localStorage.getItem(key);
            let item = JSON.parse(artikelsjson);
            gesamtPreis += item.preis;
            erstelleInhalt(item);
        }
        setGesamtpreis();
    }
    function erstelleInhalt(_inputArticle) {
        //Div erstellen
        let newDiv = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);
        //Bild erstellen
        let bildElement = document.createElement("img");
        newDiv.appendChild(bildElement);
        bildElement.src = _inputArticle.img;
        console.log(bildElement);
        //Namen geben
        let name = document.createElement("h3");
        newDiv.appendChild(name);
        name.innerHTML = _inputArticle.name;
        //Preis festlegen
        let price = document.createElement("p");
        newDiv.appendChild(price);
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        //Button
        let kaufen = document.createElement("button");
        newDiv.appendChild(kaufen);
        kaufen.innerHTML = "Löschen";
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    //Gesamtpreis in Header plazieren
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis;
    }
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script_warenkorb.js.map