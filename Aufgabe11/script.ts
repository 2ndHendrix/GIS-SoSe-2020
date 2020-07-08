namespace Aufgabe11 {

    let formData: FormData;
    let getButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    getButton.addEventListener("click", sendButtonfunction);

    let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    sendButton.addEventListener("click", getButtonfunction);


    async function sendButtonfunction(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://localhost:8100";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }


    // "https://manusfirstapp.herokuapp.com"

    async function getButtonfunction(): Promise<void> {
        let url: string = "https://localhost:8100";
        // tslint:disable-next-line: no-any
        await fetch(url);
        let response: Response = await fetch(url);
        let response2: string = await response.text();
        (<HTMLDivElement>document.getElementById("serverResponse")).innerHTML = response2;
    }

}


//https://gis2020vr.herokuapp.com