namespace Aufgabe08 {

    let senden: HTMLElement = <HTMLElement>document.getElementById("button");
    senden?.addEventListener("click", handleSenden);

    async function handleSenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        
        let url: string = "https://gispraktikum2020.herokuapp.com/";

        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwort2: string = antwort.url;
        console.log(antwort2);

        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
 }