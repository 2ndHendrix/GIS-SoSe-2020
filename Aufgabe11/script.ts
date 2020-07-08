namespace Aufgabe11 {
    // let getButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    // let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    let formData: FormData;
    let getButton: HTMLButtonElement;
    let sendButton: HTMLButtonElement;

    window.addEventListener("load", init);

    getButton = <HTMLButtonElement>document.querySelector("#get");
    sendButton = <HTMLButtonElement>document.querySelector("#send");
    //onClickButton wird bei einem Click auf den Button ausgeführt



    function init(): void {
        getButton.addEventListener("click", sendButtonfunction.bind(getButton));
        sendButton.addEventListener("click", getButtonfunction.bind(sendButton));

    }

    init();

    async function sendButtonfunction(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://manusfirstapp.herokuapp.com/send";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }


    // "https://manusfirstapp.herokuapp.com"

    async function getButtonfunction(): Promise<void> {
        let url: string = "https://manusfirstapp.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        await fetch(url);
        let response: Response = await fetch(url);
        let response2: string = await response.text();
        (<HTMLDivElement>document.getElementById("serverResponse")).innerHTML = response2;
    }

}


//https://gis2020vr.herokuapp.com