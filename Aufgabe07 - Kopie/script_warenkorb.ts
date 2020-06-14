namespace Aufgabe07 {

    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;

    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".warenkorb");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#gesamt");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

        console.log(localStorage);
        update();
    }

    function update(): void {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let artikelsjson: string = <string>localStorage.getItem(key);

            let item: Artikel = <Artikel>JSON.parse(artikelsjson);

            gesamtPreis += item.preis;
            erstelleInhalt(item);
        }
        setGesamtpreis();
    }

 
    function erstelleInhalt(_inputArticle: Artikel): void {
        //Div erstellen
      
        
        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);
        //Bild erstellen
        
      
        let bildElement: HTMLImageElement = document.createElement("img");
        newDiv.appendChild(bildElement);
        bildElement.src = _inputArticle.img;
        console.log(bildElement);
        //Namen geben
     
        
        let name: HTMLParagraphElement = document.createElement("h3");
        newDiv.appendChild(name);
        name.innerHTML = _inputArticle.name;
        //Preis festlegen
    
        
        let price: HTMLParagraphElement = document.createElement("p");
        newDiv.appendChild(price);
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        //Button
       
        let kaufen: HTMLButtonElement  = document.createElement("button");
        newDiv.appendChild(kaufen);
        kaufen.innerHTML = "Löschen";
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }


    function handleRemoveArticle(this: Artikel, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }

    //Gesamtpreis in Header plazieren
    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis;
    }


    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
    }
}