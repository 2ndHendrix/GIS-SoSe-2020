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
    let sendData = document.getElementById("send");
    sendData.addEventListener("click", sendButtonfunction);
    let formData;
    async function sendButtonfunction() {
        formData = new FormData(document.forms[0]);
        // let url: string = "http://localhost:8100/send";
        let url = "https://manusfirstapp.herokuapp.com/send";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        await fetch(url);
        console.log("gesendet");
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
        price.innerHTML = "" + _inputArticle;
        newDiv.setAttribute("preis", price.innerHTML);
    }
    //Vollen Preis anzeigen
    function setPreisGesamt() {
        preisGesamt.innerHTML = "" + vollerPreis.toFixed(2) + "€";
    }
})(PrüfungsaufgabeGiS || (PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=warenkorb.js.map