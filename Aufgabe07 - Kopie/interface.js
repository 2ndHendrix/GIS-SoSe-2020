"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    let warenrechner = 0;
    let preisrechner = 0;
    let clickCounter = 0;
    let counterDisplay;
    let counterPreis = 0;
    let menDiv;
    let womenDiv;
    window.addEventListener("load", init);
    function init() {
        loadCategoryListeners();
        createArticles();
        let url = "data.json";
        communicate(url);
        counterDisplay = document.querySelector(".divider p");
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
    }
    function saveInLocalStorage(_inputArticle) {
        let itemString = JSON.stringify(_inputArticle);
        let key = "" + _inputArticle.name;
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
    function createArticles() {
        let categoryJSON = [];
        let category = [];
        let categorys = [];
        for (let index = 0; index < category.length; index++) {
            //DIV
            let newDiv = document.createElement("div");
            newDiv.id = "div1" + index;
            document.getElementById("men")?.appendChild(newDiv);
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
            kaufen.addEventListener("Click", rechner.bind(categorys[index]));
            newDiv.appendChild(kaufen);
        }
    }
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
    // Daten
    let artikel1 = { img: "shirt1.jpg", name: "Black Shirt Nike", description: "Sytlish Nike shirt", preis: 29.99, kategorie: "kategorie_men" };
    let artikel2 = { img: "shirt2.jpg", name: "Long Sleeve Jumper", description: "Stylish Jumper", preis: 49.99, kategorie: "kategorie_men" };
    let artikel3 = { img: "shirt3.jpg", name: "Long sleeve Shirt", description: "Sytlish Jumper", preis: 40.99, kategorie: "kategorie_men" };
    let artikel4 = { img: "shirt4.jpg", name: "Light Blue Shirt", description: "Stylisch blue Shirt", preis: 19.99, kategorie: "kategorie_men" };
    let artikel5 = { img: "shirt5.jpg", name: "Half sleeve Jumper", description: "Stylish Jumper", preis: 39.99, kategorie: "kategorie_men" };
    let artikel6 = { img: "shirt6.jpg", name: "Long sleeve Jumper", description: "Stylsih Jumper", preis: 29.99, kategorie: "kategorie_men" };
    let artikel7 = { img: "shirtWomen1.jpg", name: "Pink Shirt", description: "Stylisch pink shirt", preis: 19.99, kategorie: "kategorie_women" };
    let artikel8 = { img: "shirtWomen2.jpg", name: "Purple Shirt", description: "Stylisch purple shirt", preis: 19.99, kategorie: "kategorie_women" };
    let artikel9 = { img: "shirtWomen3.jpg", name: "Light blue Shirt", description: "Stylish blue shirt", preis: 59.99, kategorie: "kategorie_women" };
    let artikel10 = { img: "shirtWomen4.jpg", name: "Simple black Shirt", description: "Simple black Shirt", preis: 7.99, kategorie: "kategorie_women" };
    let artikel11 = { img: "shirtWomen5.jpg", name: "Simple grey shirt", description: "Stylsih grey shirt", preis: 7.99, kategorie: "kategorie_women" };
    let artikel12 = { img: "shirtWomen6.jpg", name: "Red shirt", description: "Stylish Red shirt", preis: 29.99, kategorie: "kategorie_women" };
    let artikelMen = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];
    let artikelWomen = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];
    let kategorie = [];
    kategorie.push(artikelMen);
    kategorie.push(artikelWomen);
    for (let category of kategorie) {
        let id = kategorie.indexOf(category) == 0 ? "#men" : "#women";
        let categoryDiv = document.querySelector(id);
        switch (id) {
            case "#men":
                menDiv = categoryDiv;
                break;
            case "#women":
                womenDiv = categoryDiv;
                break;
        }
    }
    function rechner(event) {
        warenrechner++;
        console.log(warenrechner);
        saveInLocalStorage(this);
        preisrechner += parseFloat(event.target?.getAttribute("preis"));
        console.log(preisrechner.toFixed(2));
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=Interface.js.map
//# sourceMappingURL=interface.js.map