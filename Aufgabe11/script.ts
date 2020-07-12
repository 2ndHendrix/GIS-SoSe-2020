namespace Aufgabe11 {
    // let getButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    // let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
   

    window.addEventListener("load", init);

    function init(): void {
        createButtons();
    }

    function createButtons(): void {
        let getButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
        getButton.addEventListener("click", getButtonfunction);

        let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
        sendButton.addEventListener("click", sendButtonfunction);
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

    // "https://gis2020vr.herokuapp.com"
    // "https://manusfirstapp.herokuapp.com"

    async function getButtonfunction(): Promise<void> {
        let url: string = "https://manusfirstapp.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        await fetch(url);
        let response: Response = await fetch(url);
        let response2: string = await response.text();
        (<HTMLDivElement>document.getElementById("serverResponse")).innerHTML = response2;
        console.log(response2);
    }

}
