namespace PrüfungsaufgabeGiS {

    window.addEventListener("load", init);

    let getData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    getData.addEventListener("click", getButtonfunction);

/*    let deleteButton: HTMLButtonElement = <HTMLButtonElement>.document.getElementById("deleteButton");
    deleteButton.addEventListener("click", buttonDeleteFunction);

    */

    // tslint:disable-next-line: no-empty
    function init(_event: Event): void {

    }

    let formData: FormData;


    async function getButtonfunction(): Promise<void> {
        formData = new FormData(document.forms[0]);
       // let url: string = "http://localhost:8100/get";
        let url: string = "https://manusfirstapp.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response: Response = await fetch(url);
        let response2: string = await response.text();
        (<HTMLDivElement>document.getElementById("serverResponse")).innerHTML = response2;
        console.log("response");
        }

       /* async function buttonDeleteFunction(): Promise<void> {

        } */
}