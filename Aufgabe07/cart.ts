namespace Augabe07 {
    export class Cart {
        public content: Artikel[] = [];

        constructor() {

        }

        public pushLocalStorage(): void {
            let contentString: string = JSON.stringify(this.content;
            localStorage.setItem("artikel", contentString);
            console.log(localStorage);
        }

        public showArticles(): void {

        }
    }
}