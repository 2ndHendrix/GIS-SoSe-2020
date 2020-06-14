namespace Aufgabe05 {


  window.addEventListener("load", init);
  let clickCounter: number = 0;
  let counterDisplay: HTMLParagraphElement;
  let counterPreis: number = 0;

  let menDiv: HTMLDivElement;
  let womenDiv: HTMLDivElement;


  interface Artikel {
    img: string;
    name: string;
    description: string;
    preis: number;
    kategorie: string;
  }

  let categoryJSON: Artikel[][] = [];
  let category: Artikel[] = [];
  let categorys: Artikel[][] = [];

  function init(_event: Event): void {
    communicate("data.json");
    createArtikel();
    loadCategoryListeners();
    counterDisplay = <HTMLParagraphElement>document.querySelector(".divider p");

  }

  async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    categoryJSON = <Artikel[][]>await response.json();
    loadArtikel(categoryJSON);
  }


  function loadArtikel(_categorys: Artikel[][]): void {
    for (let categoryJSON of categorys) {
      category = [];
      for (let Artikel of categoryJSON) {
        category.push(new Artikel(Artikel.name, Artikel.description, Artikel.img, Artikel.preis, Artikel.kategorie));
      }
      categorys.push(category);

      let kategorie: Artikel[][] = [];
      kategorie.push(artikelMen);
      kategorie.push(artikelWomen);




      for (let category of kategorie) {
        let id: string = kategorie.indexOf(category) == 0 ? "#men" : "#women";
        let categoryDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(id);
      }
      switch (id) {
        case "#men":
          menDiv = categoryDiv;
          break;
        case "#women":
          womenDiv = categoryDiv;
          break;
      }
    }

    //Erzeugen der Elemente
    function createArtikel(): void {

      for (let index: number = 0; index < category.length; index++) {
        //DIV
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div1" + index;
        categoryDiv.appendChild(newDiv);
        //IMG
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = category[index].img;
        newDiv.appendChild(imgElement);
        //NAME
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = category[index].name;
        newDiv.appendChild(name);
        //DESCRIPTION
        let description: HTMLParagraphElement = document.createElement("p");
        description.innerHTML = category[index].description;
        newDiv.appendChild(description);
        //PREIS
        let newPreis: HTMLParagraphElement = document.createElement("p");
        newPreis.innerHTML = category[index].preis.toFixed(2) + "€";
        newDiv.appendChild(newPreis);
        //BUY
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "In den Warenkorb";
        kaufen.addEventListener("click", onKaufenClick.bind(category[index]));
        newDiv.appendChild(kaufen);
      }
    }
  }




  // Funtion kaufen Button
  function onKaufenClick(this: Artikel, _event: MouseEvent): void {
    console.log("clicked");
    clickCounter++;
    console.log(clickCounter);
    counterDisplay.innerHTML = clickCounter <= 0 ? "" : clickCounter + "";
    console.log(this.preis);
    counterPreis += this.preis;
    console.log(counterPreis);
  }
  // Kategorien laden
  function loadCategoryListeners(): void {
    let navButton: HTMLAnchorElement;
    let navMenü: HTMLDivElement = <HTMLDivElement>document.querySelector(".menü");
    let navLength: number = navMenü.children.length;
    for (let index: number = 1; index < navLength; index++) {
      navButton = <HTMLAnchorElement>document.querySelector(".menü a:nth-child(" + index + ")");
      navButton.addEventListener("click", onClickCategory.bind(navButton));
    }
    console.log(navLength);
  }
  // Kategorien anzeigen
  function onClickCategory(this: HTMLAnchorElement, _event: MouseEvent): void {
    console.log(this.getAttribute("id"));
    switch (this.getAttribute("id")) {
      case "a1":
        showMen();
        break;
      case "a2":
        showWomen();
        break;
      case "start":
        showStart();
        break;
    }
  }
  function showMen(): void {
    menDiv.style.display = "flex";
    womenDiv.style.display = "none";
  }
  function showWomen(): void {
    menDiv.style.display = "none";
    womenDiv.style.display = "flex";

  }
  function showStart(): void {
    menDiv.style.display = "flex";
    womenDiv.style.display = "flex";
  }

}

//# sourceMappingURL=Interface.js.map