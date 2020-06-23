"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    window.addEventListener("load", init);
    let contentDiv;
    let preisGesamt;
    let vollerPreis;
    let löschenButton;
    löschenButton = document.getElementById("löschen");
    löschenButton.addEventListener("click", handleRemoveAll);
    function init(_event) {
        contentDiv = document.querySelector(".warenkorb");
        preisGesamt = document.querySelector("#gesamt");
        document.getElementById("warenkorbWert")?.appendChild(preisGesamt);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        vollerPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let artikelsjson = localStorage.getItem(key);
            let item = JSON.parse(artikelsjson);
            vollerPreis += item.preis;
            getContent(item);
        }
        setPreisGesamt();
    }
    function getContent(_inputArticle) {
        //Div laden
        let newDiv = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);
        //Bild laden
        let bildElement = document.createElement("img");
        newDiv.appendChild(bildElement);
        bildElement.src = _inputArticle.img;
        console.log(bildElement);
        //Überschrift
        let name = document.createElement("h3");
        newDiv.appendChild(name);
        name.innerHTML = _inputArticle.name;
        //Preis berechnen  
        let price = document.createElement("p");
        newDiv.appendChild(price);
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        //Löschen Button
        let kaufen = document.createElement("button");
        newDiv.appendChild(kaufen);
        kaufen.innerHTML = "löschen";
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    //Vollen Preis anzeigen
    function setPreisGesamt() {
        preisGesamt.innerHTML = "" + vollerPreis;
    }
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script_warenkorb.js.map