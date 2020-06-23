namespace Aufgabe08 {

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", communiacate);

    async function communiacate(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020vr.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);

        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }

}