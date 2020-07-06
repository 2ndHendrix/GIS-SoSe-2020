namespace PrüfungsaufgabeGiS {

    let waffelDiv: HTMLDivElement;
    let sorteDiv: HTMLDivElement;
    let toppingDiv: HTMLDivElement;

    let clickCounter: number = 0;
    let counterDisplay: HTMLParagraphElement;
    let counterPreis: number = 0;
    let warenrechner: number = 0;
    let preisrechner: number = 0;


    export let categoryJSON: Artikel[] = [];
    window.addEventListener("load", init);

    // Funktion kaufen Button
    function onKaufenClick(this: Artikel, _event: MouseEvent): void {
        console.log("clicked");
        clickCounter++;
        console.log(clickCounter);
        counterDisplay.innerHTML = clickCounter <= 0 ? "" : clickCounter + "";
        console.log(this.preis);
        counterPreis += this.preis;
        console.log(counterPreis);
    }

    function rechner(this: Artikel, event: Event): void {
        warenrechner++;
        console.log(warenrechner);
        saveInLocalStorage(this);
        preisrechner += parseFloat((<HTMLButtonElement>event.target)?.getAttribute("preis")!);
        console.log(preisrechner.toFixed(2));
    }

    export interface Artikel {
        img: string;
        description: string;
        preis: number;
        kategorie: string;
    }

    function init(): void {
        communicate("daten.json");
        loadCategoryListeners();
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        categoryJSON = <Artikel[]>await response.json();
        createArtikel(categoryJSON);
    }

    // In LocalStorage sichern
    async function saveInLocalStorage(_inputArticle: Artikel): Promise<void> {
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle.description;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }

    // Kategorien laden
    function loadCategoryListeners(): void {
        let navButton: HTMLAnchorElement;
        let navMenü: HTMLDivElement = <HTMLDivElement>document.querySelector(".menü");
        let navLength: number = navMenü.children.length;
        for (let index: number = 1; index < navLength; index++) {
            navButton = <HTMLAnchorElement>document.querySelector(".menü a:nth-child(" + index + ")");
            navButton.addEventListener("click", onClickCategory.bind(navButton));
        }
        console.log(navLength);
    }


    function onClickCategory(this: HTMLAnchorElement, _event: MouseEvent): void {
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

    function showWaffel(): void {
        waffelDiv.style.display = "flex";
        sorteDiv.style.display = "none";
        toppingDiv.style.display = "none";

    }
    function showSorte(): void {
        waffelDiv.style.display = "none";
        sorteDiv.style.display = "flex";
        toppingDiv.style.display = "none";

    }
    function showTopping(): void {
        waffelDiv.style.display = "none";
        sorteDiv.style.display = "none";
        toppingDiv.style.display = "flex";
    }

    function showStart(): void {
        waffelDiv.style.display = "flex";
        sorteDiv.style.display = "flex";
        toppingDiv.style.display = "flex";
    }

    /* function showIce(_categorys: Artikel[]): void{
         for (let index: number = 0; index < _categorys.length; index++) {
         
         }
     }*/

    function createArtikel(_categorys: Artikel[]): void {
        for (let index: number = 0; index < _categorys.length; index++) {
            //DIV
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "div1" + index;
            //IMG
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = _categorys[index].img;
            newDiv.appendChild(imgElement);
            //DESCRIPTION
            let description: HTMLParagraphElement = document.createElement("p");
            description.innerHTML = _categorys[index].description;
            newDiv.appendChild(description);
            //PREIS
            let newPreis: HTMLParagraphElement = document.createElement("p");
            newPreis.innerHTML = _categorys[index].preis.toFixed(2) + "€";
            newDiv.appendChild(newPreis);
            //Button
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Auswählen";
            kaufen.addEventListener("click", onKaufenClick.bind(_categorys[index]));
            kaufen.addEventListener("click", rechner.bind(_categorys[index]));
            newDiv.appendChild(kaufen);

            if (_categorys[index].kategorie == "kategorie_waffel") {
                document.getElementById("waffel")?.appendChild(newDiv);
            }
            if (_categorys[index].kategorie == "kategorie_sorte") {
                document.getElementById("sorte")?.appendChild(newDiv);
            }
            else {
                document.getElementById("kategorie_topping")?.appendChild(newDiv);
            }
        }
    }
}


//# sourceMappingURL=Interface.js.map