
namespace PrüfungsaufgabeGiS {
    let warenrechner: number = 0;
    let preisrechner: number = 0;
    let clickCounter: number = 0;
    let counterPreis: number = 0;
    let contentDiv: HTMLDivElement;
    let warenkorbLoeschen: HTMLButtonElement;

    let preisGesamt: HTMLParagraphElement;
    let vollerPreis: number;

    export let categoryJSON: Artikel[] = [];
    window.addEventListener("load", init);

    export interface Artikel {
        img: string;
        description: string;
        preis: number;
        kategorie: string;
    }

    function init(_event: Event): void {
        generateDeleteAll();
        communicate("daten.json");
        
        contentDiv = <HTMLDivElement>document.getElementById("vorschau");
        preisGesamt = <HTMLParagraphElement>document.getElementById("gesamt");
       // document.getElementById("warenkorbWert")?.appendChild(preisGesamt);

        
        createButtons();
        updatePreview();

    }

    function createButtons(): void {

        let sendData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
        sendData.addEventListener("click", sendButtonfunction); 
    }

    let formData: FormData;

    async function sendButtonfunction(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://manusfirstapp.herokuapp.com/send";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }


    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        categoryJSON = <Artikel[]>await response.json();
        createArtikel(categoryJSON);
    }

    function generateDeleteAll(): void {
        warenkorbLoeschen = <HTMLButtonElement>document.getElementById("deleteAll");
        console.log(warenkorbLoeschen);
        warenkorbLoeschen.addEventListener("click", handleRemoveAll);
    }

    // Funktion kaufen Button
    function onKaufenClick(this: Artikel, _event: MouseEvent): void {
        console.log("clicked");
        clickCounter++;
        console.log(clickCounter);
        console.log(this.preis);
        counterPreis += this.preis;
        console.log(counterPreis.toFixed(2));
    }


    async function saveInLocalStorage(_inputArticle: Artikel): Promise<void> {
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle.description;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
        updatePreview();
    }

    function updatePreview(): void {
        contentDiv.innerHTML = "";
        vollerPreis = 0;

        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let artikelsjson: string = <string>localStorage.getItem(key);
            let item: Artikel = <Artikel>JSON.parse(artikelsjson);

            showItems(item);

            vollerPreis += item.preis;

        }
        setPreisGesamt();

    }

    function setPreisGesamt(): void {
        preisGesamt.innerHTML = "" + vollerPreis.toFixed(2) + "€";
    }

    function showItems(_categorys: Artikel): void {

        //DIV erstellen
        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _categorys.description;
        console.log(newDiv.id);

        //getImg from localStorage aufrufen
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = _categorys.img;
        newDiv.appendChild(imgElement);

        let description: HTMLParagraphElement = document.createElement("p");
        description.innerHTML = _categorys.description;
        newDiv.appendChild(description);

    }

    // delete All
    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        updatePreview();
    }

    // Artikel löschen
    function handleRemoveArticle(this: Artikel, _event: Event): void {
        localStorage.removeItem(this.description);
        updatePreview();
    }
    // *DONT DELETE* 
    function addIce(this: Artikel, _event: MouseEvent): void {
        console.log("Ice cliced add");
        counterPreis += this.preis;
    }

    // Preisrechner
    function rechner(this: Artikel, event: Event): void {
        warenrechner++;
        console.log(warenrechner);
        saveInLocalStorage(this);
        preisrechner += parseFloat((<HTMLButtonElement>event.target)?.getAttribute("preis")!);
        console.log(preisrechner.toFixed(2));
    }

    // Artikel erstellen
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
            // Waffeln Button
            if (_categorys[index].kategorie == "kategorie_waffel") {
                document.getElementById("waffel")?.appendChild(newDiv);

                // Button auswählen
                let auswahl: HTMLButtonElement = document.createElement("button");
                auswahl.innerHTML = "Auswählen";
                auswahl.addEventListener("click", onKaufenClick.bind(_categorys[index]));
                auswahl.addEventListener("click", rechner.bind(_categorys[index]));
                newDiv.appendChild(auswahl);

                // Button löschen
                let abwahl: HTMLButtonElement = document.createElement("button");
                abwahl.innerHTML = "Löschen";
                abwahl.addEventListener("click", handleRemoveArticle.bind(_categorys[index]));
                newDiv.appendChild(abwahl);
                updatePreview();
            }
            //Sorten Button +/-
            else if (_categorys[index].kategorie == "kategorie_sorte") {
                document.getElementById("sorte")?.appendChild(newDiv);

                //Button +
                let buttonPlus: HTMLButtonElement = document.createElement("button");
                buttonPlus.innerHTML = "Auswählen";
                buttonPlus.addEventListener("click", addIce.bind(_categorys[index]));
                buttonPlus.addEventListener("click", rechner.bind(_categorys[index]));
                newDiv.appendChild(buttonPlus);

                //Button -
                let buttonMinus: HTMLButtonElement = document.createElement("button");
                buttonMinus.innerHTML = "Löschen";
                buttonMinus.addEventListener("click", handleRemoveArticle.bind(_categorys[index]));
                newDiv.appendChild(buttonMinus);
                updatePreview();

            }
            // Toppings Button
            else if (_categorys[index].kategorie == "kategorie_topping") {
                document.getElementById("topping")?.appendChild(newDiv);
                // Button auswählen
                let auswahl: HTMLButtonElement = document.createElement("button");
                auswahl.innerHTML = "Auswählen";
                auswahl.addEventListener("click", onKaufenClick.bind(_categorys[index]));
                auswahl.addEventListener("click", rechner.bind(_categorys[index]));
                newDiv.appendChild(auswahl);

                // Button löschen
                let abwahl: HTMLButtonElement = document.createElement("button");
                abwahl.innerHTML = "Löschen";
                abwahl.addEventListener("click", handleRemoveArticle.bind(_categorys[index]));
                newDiv.appendChild(abwahl);
                updatePreview();
            }

        }
    }
}

//# sourceMappingURL=Interface.js.map