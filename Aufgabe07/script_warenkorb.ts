namespace Aufgabe07 {

    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let preisGesamt: HTMLParagraphElement;
    let vollerPreis: number;
    let löschenButton: HTMLButtonElement;
    löschenButton = <HTMLButtonElement>document.getElementById("löschen");
    löschenButton.addEventListener("click", handleRemoveAll);

    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".warenkorb");
        preisGesamt = <HTMLParagraphElement>document.querySelector("#gesamt");
        document.getElementById("warenkorbWert")?.appendChild(preisGesamt);

        // console.log(localStorage);
        update();
    }

    function update(): void {
        contentDiv.innerHTML = "";
        vollerPreis = 0;
        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let artikelsjson: string = <string>localStorage.getItem(key);

            let item: Artikel = <Artikel>JSON.parse(artikelsjson);

            vollerPreis += item.preis;
            getContent(item);
        }
        setPreisGesamt();
    }


    function getContent(_inputArticle: Artikel): void {

        //Div laden
        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);

        //Bild laden
        let bildElement: HTMLImageElement = document.createElement("img");
        newDiv.appendChild(bildElement);
        bildElement.src = _inputArticle.img;
        console.log(bildElement);


        //Überschrift
        let name: HTMLParagraphElement = document.createElement("h3");
        newDiv.appendChild(name);
        name.innerHTML = _inputArticle.name;


        //Preis berechnen  
        let price: HTMLParagraphElement = document.createElement("p");
        newDiv.appendChild(price);
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", price.innerHTML);

        //Löschen Button
        let kaufen: HTMLButtonElement = document.createElement("button");
        newDiv.appendChild(kaufen);
        kaufen.innerHTML = "löschen";
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }


    function handleRemoveArticle(this: Artikel, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }

    //Vollen Preis anzeigen
    function setPreisGesamt(): void {
        preisGesamt.innerHTML = "" + vollerPreis;
    }


    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
    }
}