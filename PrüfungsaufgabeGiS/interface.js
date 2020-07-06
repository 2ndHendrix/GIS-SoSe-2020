"use strict";
var PrüfungsaufgabeGiS;
(function (PrüfungsaufgabeGiS) {
    let clickCounter = 0;
    let counterDisplay;
    let counterPreis = 0;
    PrüfungsaufgabeGiS.categoryJSON = [];
    window.addEventListener("load", init);
    // Funktion kaufen Button
    function onKaufenClick(_event) {
        console.log("clicked");
        clickCounter++;
        console.log(clickCounter);
        counterDisplay.innerHTML = clickCounter <= 0 ? "" : clickCounter + "";
        console.log(this.preis);
        counterPreis += this.preis;
        console.log(counterPreis);
    }
    function init() {
        communicate("daten.json");
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        PrüfungsaufgabeGiS.categoryJSON = await response.json();
        createArtikel(PrüfungsaufgabeGiS.categoryJSON);
    }
    // In LocalStorage sichern
    /* async function saveInLocalStorage(_inputArticle: Artikel): Promise<void> {
         let itemString: string = JSON.stringify(_inputArticle);
         let key: string = "" + _inputArticle.description;
         localStorage.setItem(key, itemString);
         console.log(localStorage);
     }
     */
    // Kategorien laden
    /* function showIce(_categorys: Artikel[]): void{
         for (let index: number = 0; index < _categorys.length; index++) {
         
         }
     }*/
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
            //Button
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Auswählen";
            kaufen.addEventListener("click", onKaufenClick.bind(_categorys[index]));
            newDiv.appendChild(kaufen);
            if (_categorys[index].kategorie == "kategorie_waffel") {
                document.getElementById("waffel")?.appendChild(newDiv);
            }
            else if (_categorys[index].kategorie == "kategorie_sorte") {
                document.getElementById("sorte")?.appendChild(newDiv);
            }
            else if (_categorys[index].kategorie == "kategorie_topping") {
                document.getElementById("topping")?.appendChild(newDiv);
            }
        }
    }
})(PrüfungsaufgabeGiS || (PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=Interface.js.map
//# sourceMappingURL=interface.js.map