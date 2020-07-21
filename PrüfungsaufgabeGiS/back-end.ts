namespace PrüfungsaufgabeGiS {

    window.addEventListener("load", init);

    function init(_event: Event): void {
                createButtons();
    }

    function createButtons(): void {
        let getData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
        getData.addEventListener("click", getButtonfunction);

        let buttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getHTML");
        buttonHTML.addEventListener("click", getHTML);

    }
    let formData: FormData;

    async function getButtonfunction(): Promise<void> { 
        let url: string = "https://manusfirstapp.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        await fetch(url);
        let response: Response = await fetch(url);
        let response2: string = await response.text();
        (<HTMLDivElement>document.getElementById("serverResponse")).innerHTML = response2;
        console.log(response2);
    }

    async function getHTML(): Promise<void> {
        let serverURL: string = "https://manusfirstapp.herokuapp.com";
        serverURL += "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();

        let response: Response = await fetch(serverURL);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement>document.getElementById("serverResponseHTML");
        serverResponse.innerHTML = responseText;
    }

}