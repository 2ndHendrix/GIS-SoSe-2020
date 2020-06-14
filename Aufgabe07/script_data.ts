namespace Aufgabe07 {

    export interface Artikel {
        img: string;
        name: string;
        description: string;
        preis: number;
        kategorie: string;
      }

    export let articles: Artikel[];
    loadArtikel("data.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        artikel = await JSON.parse(JSON.stringify(jsonArray));
        createArtikel();
    }
}



