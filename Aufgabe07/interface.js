"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    window.addEventListener("load", init);
    Aufgabe05.clickCounter = 0;
    let counterDisplay;
    Aufgabe05.counterPreis = 0;
    let menDiv;
    let womenDiv;
    let categoryJSON = [];
    let category = [];
    let categorys = [];
    function init(_event) {
        communicate("data.json");
        createArtikel();
        loadCategoryListeners();
        counterDisplay = document.querySelector(".divider p");
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        categoryJSON = await response.json();
        loadArtikel(categoryJSON);
    }
    function loadArtikel(_categorys) {
        for (let categoryJSON of _categorys) {
            category = [];
            for (let artikel of categoryJSON) {
                category.push(new Artikel(artikel.name, artikel.description, artikel.img, artikel.preis, artikel.kategorie));
            }
            categorys.push(category);
        }
        for (let category of categorys) {
            let id = categorys.indexOf(category) == 0 ? "#men" : "#women";
            let categoryDiv = document.querySelector(id);
        }
        switch (id) {
            case "#men":
                menDiv = categoryDiv;
                break;
            case "#women":
                womenDiv = categoryDiv;
                break;
        }
    }
    //Erzeugen der Elemente
    function createArtikel() {
        for (let index = 0; index < category.length; index++) {
            //DIV
            let newDiv = document.createElement("div");
            newDiv.id = "div1" + index;
            categoryDiv.appendChild(newDiv);
            //IMG
            let imgElement = document.createElement("img");
            imgElement.src = category[index].img;
            newDiv.appendChild(imgElement);
            //NAME
            let name = document.createElement("p");
            name.innerHTML = category[index].name;
            newDiv.appendChild(name);
            //DESCRIPTION
            let description = document.createElement("p");
            description.innerHTML = category[index].description;
            newDiv.appendChild(description);
            //PREIS
            let newPreis = document.createElement("p");
            newPreis.innerHTML = category[index].preis.toFixed(2) + "€";
            newDiv.appendChild(newPreis);
            //BUY
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "In den Warenkorb";
            kaufen.addEventListener("click", onKaufenClick.bind(category[index]));
            newDiv.appendChild(kaufen);
        }
    }
    Aufgabe05.createArtikel = createArtikel;
    // Funtion kaufen Button
    function onKaufenClick(_event) {
        console.log("clicked");
        Aufgabe05.clickCounter++;
        console.log(Aufgabe05.clickCounter);
        counterDisplay.innerHTML = Aufgabe05.clickCounter <= 0 ? "" : Aufgabe05.clickCounter + "";
        console.log(this.preis);
        Aufgabe05.counterPreis += this.preis;
        console.log(Aufgabe05.counterPreis);
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
    // Kategorien anzeigen
    function onClickCategory(_event) {
        console.log(this.getAttribute("id"));
        switch (this.getAttribute("id")) {
            case "a1":
                showMen();
                break;
            case "a2":
                showWomen();
                break;
            case "start":
                showStart();
                break;
        }
    }
    function showMen() {
        menDiv.style.display = "flex";
        womenDiv.style.display = "none";
    }
    function showWomen() {
        menDiv.style.display = "none";
        womenDiv.style.display = "flex";
    }
    function showStart() {
        menDiv.style.display = "flex";
        womenDiv.style.display = "flex";
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=Interface.js.map
//# sourceMappingURL=interface.js.map