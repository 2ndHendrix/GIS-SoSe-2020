namespace Aufgabe09 {

    window.addEventListener("load", init);


    function init(): void {
        createButtons();
    }

    function createButtons(): void {
        let buttonActionHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getHTML");
        buttonActionHtml.addEventListener("click", getHTML);

        let buttonActionJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getJSON");
        buttonActionJson.addEventListener("click", getJSON);
    }
    let formData: FormData;


    async function getHTML(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://gis2020vr.herokuapp.com";
        serverURL += "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();

        let response: Response = await fetch(serverURL);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement>document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }

    async function getJSON(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://gis2020vr.herokuapp.com";
        url += "/json";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.json();
        console.log(responseText);

    }
}