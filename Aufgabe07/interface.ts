namespace Aufgabe07 {
  let warenrechner: number = 0;
  let preisrechner: number = 0;
  let clickCounter: number = 0;
  let counterDisplay: HTMLParagraphElement;
  let counterPreis: number = 0;
  let menDiv: HTMLDivElement;
  let womenDiv: HTMLDivElement;
  // let categorys: Artikel[] = [];

  export let categoryJSON: Artikel[] = [];
  window.addEventListener("load", init);


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

  function rechner(this: Artikel, event: Event): void {
    warenrechner++;
    console.log(warenrechner);
    saveInLocalStorage(this);
    preisrechner += parseFloat((<HTMLButtonElement>event.target)?.getAttribute("preis")!);
    console.log(preisrechner.toFixed(2));

  }

  export interface Artikel {
    img: string;
    name: string;
    description: string;
    preis: number;
    kategorie: string;
  }

  // Initiieren
  function init(): void {
    communicate("data.json");
    loadCategoryListeners();
    counterDisplay = <HTMLParagraphElement>document.querySelector(".divider p");
  }

  async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    categoryJSON = <Artikel[]>await response.json();
    createArticles(categoryJSON);
  }

  // In LocalStorage sichern
  async function saveInLocalStorage(_inputArticle: Artikel): Promise<void> {
    let itemString: string = JSON.stringify(_inputArticle);
    let key: string = "" + _inputArticle.name;
    localStorage.setItem(key, itemString);
    console.log(localStorage);
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


  function createArticles(_categorys: Artikel[]): void {
    for (let index: number = 0; index < _categorys.length; index++) {
      //DIV
      let newDiv: HTMLDivElement = document.createElement("div");
      newDiv.id = "div1" + index;
      //IMG
      let imgElement: HTMLImageElement = document.createElement("img");
      imgElement.src = _categorys[index].img;
      newDiv.appendChild(imgElement);
      //NAME
      let name: HTMLParagraphElement = document.createElement("p");
      name.innerHTML = _categorys[index].name;
      newDiv.appendChild(name);
      //DESCRIPTION
      let description: HTMLParagraphElement = document.createElement("p");
      description.innerHTML = _categorys[index].description;
      newDiv.appendChild(description);
      //PREIS
      let newPreis: HTMLParagraphElement = document.createElement("p");
      newPreis.innerHTML = _categorys[index].preis.toFixed(2) + "€";
      newDiv.appendChild(newPreis);
      //BUY
      let kaufen: HTMLButtonElement = document.createElement("button");
      kaufen.innerHTML = "In den Warenkorb";
      kaufen.addEventListener("click", onKaufenClick.bind(_categorys[index]));
      kaufen.addEventListener("Click", rechner.bind(_categorys[index]));
      newDiv.appendChild(kaufen);

      if (_categorys[index].kategorie == "kategorie_men") {
        document.getElementById("men")?.appendChild(newDiv);
      }
      else {
        document.getElementById("women")?.appendChild(newDiv);
      }
    }
  }
}







//# sourceMappingURL=Interface.js.map