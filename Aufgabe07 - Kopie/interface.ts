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


  // Daten
  let artikel1: Artikel = { img: "shirt1.jpg", name: "Black Shirt Nike", description: "Sytlish Nike shirt", preis: 29.99, kategorie: "kategorie_men" };
  let artikel2: Artikel = { img: "shirt2.jpg", name: "Long Sleeve Jumper", description: "Stylish Jumper", preis: 49.99, kategorie: "kategorie_men" };
  let artikel3: Artikel = { img: "shirt3.jpg", name: "Long sleeve Shirt", description: "Sytlish Jumper", preis: 40.99, kategorie: "kategorie_men" };
  let artikel4: Artikel = { img: "shirt4.jpg", name: "Light Blue Shirt", description: "Stylisch blue Shirt", preis: 19.99, kategorie: "kategorie_men" };
  let artikel5: Artikel = { img: "shirt5.jpg", name: "Half sleeve Jumper", description: "Stylish Jumper", preis: 39.99, kategorie: "kategorie_men" };
  let artikel6: Artikel = { img: "shirt6.jpg", name: "Long sleeve Jumper", description: "Stylsih Jumper", preis: 29.99, kategorie: "kategorie_men" };
  let artikel7: Artikel = { img: "shirtWomen1.jpg", name: "Pink Shirt", description: "Stylisch pink shirt", preis: 19.99, kategorie: "kategorie_women" };
  let artikel8: Artikel = { img: "shirtWomen2.jpg", name: "Purple Shirt", description: "Stylisch purple shirt", preis: 19.99, kategorie: "kategorie_women" };
  let artikel9: Artikel = { img: "shirtWomen3.jpg", name: "Light blue Shirt", description: "Stylish blue shirt", preis: 59.99, kategorie: "kategorie_women" };
  let artikel10: Artikel = { img: "shirtWomen4.jpg", name: "Simple black Shirt", description: "Simple black Shirt", preis: 7.99, kategorie: "kategorie_women" };
  let artikel11: Artikel = { img: "shirtWomen5.jpg", name: "Simple grey shirt", description: "Stylsih grey shirt", preis: 7.99, kategorie: "kategorie_women" };
  let artikel12: Artikel = { img: "shirtWomen6.jpg", name: "Red shirt", description: "Stylish Red shirt", preis: 29.99, kategorie: "kategorie_women" };

  let artikelMen: Artikel[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];
  let artikelWomen: Artikel[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];

  let kategorie: Artikel[][] = [];
  kategorie.push(artikelMen);
  kategorie.push(artikelWomen);

  for (let category of kategorie) {
    let id: string = kategorie.indexOf(category) == 0 ? "#men" : "#women";
    let categoryDiv: HTMLDivElement = <HTMLDivElement>document.querySelector(id);

    switch (id) {
      case "#men":
        menDiv = categoryDiv;
        break;
      case "#women":
        womenDiv = categoryDiv;
        break;
    }


    function init(_event: Event): void {
      communicate(URL);
      loadCategoryListeners();
      createArticles();
      counterDisplay = <HTMLParagraphElement>document.querySelector(".divider p");
    }


    async function communicate(_url: RequestInfo): Promise<void> {
      let response: Response = await fetch(_url);
     console.log("Response", response);
    }

    //Erzeugen der Elemente

    function createArticles() : void {
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