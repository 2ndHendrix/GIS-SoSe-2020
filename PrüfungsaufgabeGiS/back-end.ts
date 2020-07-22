namespace PrüfungsaufgabeGiS {

    window.addEventListener("load", init);

    let formData: FormData;

    function init(_event: Event): void {
        createButtons();

    }

    function createButtons(): void {
        let getData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
        getData.addEventListener("click", getButtonfunction);

    }

    async function getButtonfunction(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://manusfirstapp.herokuapp.com/get";
        // tslint:disable-next-line: no-any
        await fetch(url);
        let response: Response = await fetch(url);
        let response2: string = await response.text();
        (<HTMLDivElement>document.getElementById("serverResponse")).innerHTML = response2;
        console.log(response2);
    }


}