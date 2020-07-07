namespace PrüfungsaufgabeGiS {


    let clickCounter: number = 0;
    let counterDisplay: HTMLParagraphElement;
    let counterPreis: number = 0;



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

    export interface Artikel {
        img: string;
        description: string;
        preis: number;
        kategorie: string;
    }

    function init(): void {
        communicate("daten.json");
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        categoryJSON = <Artikel[]>await response.json();
        createArtikel(categoryJSON);
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

    function createArtikel(_categorys: Artikel[]): void {
        for (let index: number = 0; index < _categorys.length; index++) {
            //DIV erstellen
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "div1" + index;
            //IMG aufrufen
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = _categorys[index].img;
            newDiv.appendChild(imgElement);
            //DESCRIPTION aufrufen
            let description: HTMLParagraphElement = document.createElement("h4");
            description.innerHTML = _categorys[index].description;
            newDiv.appendChild(description);
            //PREIS aufrufen
            let newPreis: HTMLParagraphElement = document.createElement("p");
            newPreis.innerHTML = _categorys[index].preis.toFixed(2) + "€";
            newDiv.appendChild(newPreis);
            //Button
            let kaufen: HTMLButtonElement = document.createElement("button");
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
}

//# sourceMappingURL=Interface.js.map