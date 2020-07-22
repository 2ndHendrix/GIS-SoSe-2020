"use strict";
var PrüfungsaufgabeGiS;
(function (PrüfungsaufgabeGiS) {
    window.addEventListener("load", init);
    let warenrechner = 0;
    let preisrechner = 0;
    let clickCounter = 0;
    let counterPreis = 0;
    let contentDiv;
    let warenkorbLoeschen;
    let preisGesamt;
    let vollerPreis;
    PrüfungsaufgabeGiS.categoryJSON = [];
    function init(_event) {
        generateDeleteAll();
        communicate("daten.json");
        contentDiv = document.getElementById("vorschau");
        preisGesamt = document.getElementById("gesamt");
        // document.getElementById("warenkorbWert")?.appendChild(preisGesamt);
        updatePreview();
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        PrüfungsaufgabeGiS.categoryJSON = await response.json();
        createArtikel(PrüfungsaufgabeGiS.categoryJSON);
    }
    function generateDeleteAll() {
        warenkorbLoeschen = document.getElementById("deleteAll");
        console.log(warenkorbLoeschen);
        warenkorbLoeschen.addEventListener("click", handleRemoveAll);
    }
    // Funktion kaufen Button
    function onKaufenClick(_event) {
        console.log("clicked");
        clickCounter++;
        console.log(clickCounter);
        console.log(this.preis);
        counterPreis += this.preis;
        console.log(counterPreis.toFixed(2));
    }
    async function saveInLocalStorage(_inputArticle) {
        let itemString = JSON.stringify(_inputArticle);
        let key = "" + _inputArticle.description;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
        updatePreview();
    }
    function updatePreview() {
        contentDiv.innerHTML = "";
        vollerPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let artikelsjson = localStorage.getItem(key);
            let item = JSON.parse(artikelsjson);
            showItems(item);
            vollerPreis += item.preis;
        }
        setPreisGesamt();
    }
    function setPreisGesamt() {
        preisGesamt.innerHTML = "" + vollerPreis.toFixed(2) + "€";
    }
    function showItems(_categorys) {
        //DIV erstellen
        let newDiv = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _categorys.description;
        console.log(newDiv.id);
        //getImg from localStorage aufrufen
        let imgElement = document.createElement("img");
        imgElement.src = _categorys.img;
        newDiv.appendChild(imgElement);
        let description = document.createElement("p");
        description.innerHTML = _categorys.description;
        newDiv.appendChild(description);
    }
    // delete All
    function handleRemoveAll(_event) {
        localStorage.clear();
        updatePreview();
    }
    // Artikel löschen
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.description);
        updatePreview();
    }
    // *DONT DELETE* 
    function addIce(_event) {
        console.log("Ice cliced add");
        counterPreis += this.preis;
    }
    // Preisrechner
    function rechner(event) {
        warenrechner++;
        console.log(warenrechner);
        saveInLocalStorage(this);
        preisrechner += parseFloat(event.target?.getAttribute("preis"));
        console.log(preisrechner.toFixed(2));
    }
    // Artikel erstellen
    function createArtikel(_categorys) {
        for (let index = 0; index < _categorys.length; index++) {
            //DIV erstellen
            let newDiv = document.createElement("div");
            newDiv.id = "div1" + index;
            //IMG aufrufen
            let imgElement = document.createElement("img");
            imgElement.src = _categorys[index].img;
            newDiv.appendChild(imgElement);
            //DESCRIPTION aufrufen
            let description = document.createElement("h4");
            description.innerHTML = _categorys[index].description;
            newDiv.appendChild(description);
            //PREIS aufrufen
            let newPreis = document.createElement("p");
            newPreis.innerHTML = _categorys[index].preis.toFixed(2) + "€";
            newDiv.appendChild(newPreis);
            // Waffeln Button
            if (_categorys[index].kategorie == "kategorie_waffel") {
                document.getElementById("waffel")?.appendChild(newDiv);
                // Button auswählen
                let auswahl = document.createElement("button");
                auswahl.innerHTML = "Auswählen";
                auswahl.addEventListener("click", onKaufenClick.bind(_categorys[index]));
                auswahl.addEventListener("click", rechner.bind(_categorys[index]));
                newDiv.appendChild(auswahl);
                // Button löschen
                let abwahl = document.createElement("button");
                abwahl.innerHTML = "Löschen";
                abwahl.addEventListener("click", handleRemoveArticle.bind(_categorys[index]));
                newDiv.appendChild(abwahl);
                updatePreview();
            }
            //Sorten Button +/-
            else if (_categorys[index].kategorie == "kategorie_sorte") {
                document.getElementById("sorte")?.appendChild(newDiv);
                //Button +
                let buttonPlus = document.createElement("button");
                buttonPlus.innerHTML = "Auswählen";
                buttonPlus.addEventListener("click", addIce.bind(_categorys[index]));
                buttonPlus.addEventListener("click", rechner.bind(_categorys[index]));
                newDiv.appendChild(buttonPlus);
                //Button -
                let buttonMinus = document.createElement("button");
                buttonMinus.innerHTML = "Löschen";
                buttonMinus.addEventListener("click", handleRemoveArticle.bind(_categorys[index]));
                newDiv.appendChild(buttonMinus);
                updatePreview();
            }
            // Toppings Button
            else if (_categorys[index].kategorie == "kategorie_topping") {
                document.getElementById("topping")?.appendChild(newDiv);
                // Button auswählen
                let auswahl = document.createElement("button");
                auswahl.innerHTML = "Auswählen";
                auswahl.addEventListener("click", onKaufenClick.bind(_categorys[index]));
                auswahl.addEventListener("click", rechner.bind(_categorys[index]));
                newDiv.appendChild(auswahl);
                // Button löschen
                let abwahl = document.createElement("button");
                abwahl.innerHTML = "Löschen";
                abwahl.addEventListener("click", handleRemoveArticle.bind(_categorys[index]));
                newDiv.appendChild(abwahl);
                updatePreview();
            }
        }
    }
})(PrüfungsaufgabeGiS || (PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=Interface.js.map
//# sourceMappingURL=interface.js.map