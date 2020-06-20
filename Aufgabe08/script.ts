namespace Aufgabe08 {
    let formData: FormData;
    let buttonAction: HTMLButtonElement = <HTMLButtonElement> document.getElementById("actionGo");
    buttonAction.addEventListener("click", handleClick);

    async function handleClick(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://2ndHendrix.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();

        let response: Response = await fetch(serverURL);
        let responseText: string = await response.text();
        console.log(responseText);
    }

}