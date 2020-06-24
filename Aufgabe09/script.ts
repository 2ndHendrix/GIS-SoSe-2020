namespace Aufgabe09 {

    let formData: FormData;
    let getActionHtmlButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getHTMLAction");
    getActionHtmlButton.addEventListener("click", getHTML);

    let getActionJsonButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getJSONAction");
    getActionJsonButton.addEventListener("click", getJSON);


    async function getHTML(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let dataURL: string = "https://gis2020vr.herokuapp.com";
        dataURL += "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        dataURL += "?" + query.toString();

        let server: Response = await fetch(dataURL);
        let serverText: string = await server.text();
        let serverResponse: HTMLElement = <HTMLElement>document.getElementById("serverResponse");
        serverResponse.innerHTML = serverText;
    }

    async function getJSON(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let dataURL: string = "https://gis2020vr.herokuapp.com";
        dataURL += "/json";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        dataURL += "?" + query.toString();

        let server: Response = await fetch(dataURL);
        let serverText: string = await server.json();
        console.log(serverText);
    }

}