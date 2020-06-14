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
        for (let category of categorys) {
            let id = categorys.indexOf(category) == 0 ? "#men" : "#women";
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