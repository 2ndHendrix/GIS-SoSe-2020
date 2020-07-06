"use strict";
var PrüfungsaufgabeGiS;
(function (PrüfungsaufgabeGiS) {
    let waffelDiv;
    let sorteDiv;
    let toppingDiv;
    let clickCounter = 0;
    let counterDisplay;
    let counterPreis = 0;
    let warenrechner = 0;
    let preisrechner = 0;
    PrüfungsaufgabeGiS.categoryJSON = [];
    window.addEventListener("load", init);
    // Funtion kaufen Button
    function onKaufenClick(_event) {
        console.log("clicked");
        clickCounter++;
        console.log(clickCounter);
        counterDisplay.innerHTML = clickCounter <= 0 ? "" : clickCounter + "";
        console.log(this.preis);
        counterPreis += this.preis;
        console.log(counterPreis);
    }
    function rechner(event) {
        warenrechner++;
        console.log(warenrechner);
        saveInLocalStorage(this);
        preisrechner += parseFloat(event.target?.getAttribute("preis"));
        console.log(preisrechner.toFixed(2));
    }
    function init() {
        communicate("daten.json");
        loadCategoryListeners();
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        PrüfungsaufgabeGiS.categoryJSON = await response.json();
        createArtikel(PrüfungsaufgabeGiS.categoryJSON);
    }
    // In LocalStorage sichern
    async function saveInLocalStorage(_inputArticle) {
        let itemString = JSON.stringify(_inputArticle);
        let key = "" + _inputArticle.description;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }
    // Kategorien laden
    function loadCategoryListeners() {
        let navButton;
        let navMenü = document.querySelector(".menü");
        let navLength = navMenü.children.length;
        for (let index = 1; index < navLength; index++) {
            navButton = document.querySelector(".menü a:nth-child(" + index + ")");
            navButton.addEventListener("click", onClickCategory.bind(navButton));
        }
        console.log(navLength);
    }
    function onClickCategory(_event) {
        console.log(this.getAttribute("id"));
        switch (this.getAttribute("id")) {
            case "a1":
                showWaffel();
                break;
            case "a2":
                showSorte();
                break;
            case "a3":
                showTopping();
            case "start":
                showStart();
                break;
        }
    }
    function showWaffel() {
        waffelDiv.style.display = "flex";
        sorteDiv.style.display = "none";
        toppingDiv.style.display = "none";
    }
    function showSorte() {
        waffelDiv.style.display = "none";
        sorteDiv.style.display = "flex";
        toppingDiv.style.display = "none";
    }
    function showTopping() {
        waffelDiv.style.display = "none";
        sorteDiv.style.display = "none";
        toppingDiv.style.display = "flex";
    }
    function showStart() {
        waffelDiv.style.display = "flex";
        sorteDiv.style.display = "flex";
        toppingDiv.style.display = "flex";
    }
    /* function showIce(_categorys: Artikel[]): void{
         for (let index: number = 0; index < _categorys.length; index++) {
         
         }
     }*/
    function createArtikel(_categorys) {
        for (let index = 0; index < _categorys.length; index++) {
            //DIV
            let newDiv = document.createElement("div");
            newDiv.id = "div1" + index;
            //IMG
            let imgElement = document.createElement("img");
            imgElement.src = _categorys[index].img;
            newDiv.appendChild(imgElement);
            //DESCRIPTION
            let description = document.createElement("p");
            description.innerHTML = _categorys[index].description;
            newDiv.appendChild(description);
            //PREIS
            let newPreis = document.createElement("p");
            newPreis.innerHTML = _categorys[index].preis.toFixed(2) + "€";
            newDiv.appendChild(newPreis);
            //BUY
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "In den Warenkorb";
            kaufen.addEventListener("click", onKaufenClick.bind(_categorys[index]));
            kaufen.addEventListener("click", rechner.bind(_categorys[index]));
            newDiv.appendChild(kaufen);
            if (_categorys[index].kategorie == "kategorie_waffel") {
                document.getElementById("waffel")?.appendChild(newDiv);
            }
            else {
                document.getElementById("kategorie_sorte")?.appendChild(newDiv);
            }
        }
    }
})(PrüfungsaufgabeGiS || (PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=Interface.js.map
//# sourceMappingURL=interface.js.map