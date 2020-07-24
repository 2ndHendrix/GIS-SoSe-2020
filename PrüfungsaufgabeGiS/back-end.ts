namespace PrüfungsaufgabeGiS {

    window.addEventListener("load", init);

    let getData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    getData.addEventListener("click", getButtonfunction);

    document.getElementById("delete")?.addEventListener("click", communicateDelete);

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

    async function communicateDelete(_click: MouseEvent): Promise <void> { 
        // let url: string = "http://localhost:8100";
        let url: string = "https://compaktdisk.herokuapp.com";
        let formData: FormData = new FormData(document.forms[0]);
        
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
               
        url += "/delete";
        url += "?" + query.toString();
        //console.log(url);
        
        let response: Response = await fetch(url);
        console.log(response);
       // response.innerHTML = "Database cleared";
        }

    
}