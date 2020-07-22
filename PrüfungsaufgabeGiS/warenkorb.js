"use strict";
var PrüfungsaufgabeGiS;
(function (PrüfungsaufgabeGiS) {
    window.addEventListener("load", init);
    let contentDiv;
    let preisGesamt;
    let vollerPreis;
    function init(_event) {
        contentDiv = document.querySelector(".order-backend");
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
        newDiv.id = _inputArticle.description;
        console.log(newDiv.id);
        //Bild laden
        let bildElement = document.createElement("img");
        newDiv.appendChild(bildElement);
        bildElement.src = _inputArticle.img;
        console.log(bildElement);
        //Preis berechnen  
        let price = document.createElement("p");
        newDiv.appendChild(price);
        price.innerHTML = "" + _inputArticle.preis.toFixed(2) + "€";
        newDiv.setAttribute("preis", price.innerHTML);
    }
    //Vollen Preis anzeigen
    function setPreisGesamt() {
        preisGesamt.innerHTML = "" + vollerPreis;
    }
})(PrüfungsaufgabeGiS || (PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=warenkorb.js.map