namespace PrüfungsaufgabeGiS {

    window.addEventListener("load", init);
    let contentDiv: HTMLDivElement;
    let preisGesamt: HTMLParagraphElement;
    let vollerPreis: number;


    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".order-backend");
        preisGesamt = <HTMLParagraphElement>document.querySelector("#gesamt");
        document.getElementById("warenkorbWert")?.appendChild(preisGesamt);

        console.log(localStorage);
        update();
    }

    let sendData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    sendData.addEventListener("click", sendButtonfunction); 


    let formData: FormData;

    async function sendButtonfunction(): Promise<void> {
        formData = new FormData(document.forms[0]);
         // let url: string = "http://localhost:8100/send";
        let url: string = "https://manusfirstapp.herokuapp.com/send";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        console.log(url);
        await fetch(url);
        console.log("gesendet");

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
        newDiv.id = _inputArticle.description;
        console.log(newDiv.id);

        //Bild laden
        let bildElement: HTMLImageElement = document.createElement("img");
        newDiv.appendChild(bildElement);
        bildElement.src = _inputArticle.img;
        console.log(bildElement);

        //Preis berechnen  
        let price: HTMLParagraphElement = document.createElement("p");
        newDiv.appendChild(price);
        price.innerHTML = "" + _inputArticle;
        newDiv.setAttribute("preis", price.innerHTML);
    }

    //Vollen Preis anzeigen
    function setPreisGesamt(): void {
        preisGesamt.innerHTML = "" + vollerPreis.toFixed(2) + "€";
    }
}