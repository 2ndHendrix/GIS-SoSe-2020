  namespace Aufgabe05 {
  
  interface ArtikelMen {
    img: string;
    name: string;
    description: string;
    preis: number;
    kategorie: string;
}

//Artikel Men
let artikel1: ArtikelMen = { img: "shirt1.jpg", name: "Shirt Nike", description: "Sytlish Nike shirt", preis: 29.99, kategorie: "kategorie_men" };
let artikel2: ArtikelMen = { img: "shirt2.jpg", name: "Long Sleeve Jumper", description: "Stylish Jumper", preis: 49.99, kategorie: "kategorie_men" };
let artikel3: ArtikelMen = { img: "shirt3.jpg", name: "Long sleeve Shirt", description: "Sytlish Jumper", preis: 40.99, kategorie: "kategorie_men" };
let artikel4: ArtikelMen = { img: "shirt4.jpg", name: "Light Blue Shirt", description: "Stylisch blue Shirt", preis: 19.99, kategorie: "kategorie_men" };
let artikel5: ArtikelMen = { img: "shirt5.jpg", name: "Half sleeve Jumper", description: "Stylish Jumper", preis: 39.99, kategorie: "kategorie_men" };
let artikel6: ArtikelMen = { img: "shirt6.jpg", name: "Long sleeve Jumper", description: "Stylsih Jumper", preis: 29.99, kategorie: "kategorie_men" };

let artikelMen: ArtikelMen[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6,];


interface ArtikelWoMen {
    img: string;
    name: string;
    description: string;
    preis: number;
    kategorie: string;
}

//Artikel Women
let artikel7: ArtikelWoMen = { img: "shirtWomen1.jpg", name: "Pink Shirt", description: "Stylisch pink shirt", preis: 19.99, kategorie: "kategorie_women"};
let artikel8: ArtikelWoMen = { img: "shirtWomen2.jpg", name: "Purple Shirt", description: "Stylisch purple shirt", preis: 19.99, kategorie: "kategorie_women"};
let artikel9: ArtikelWoMen = { img: "shirtWomen3.jpg", name: "Light blue Shirt", description: "Stylish blue shirt", preis: 59.99, kategorie: "kategorie_women" };
let artikel10: ArtikelWoMen = { img: "shirtWomen4.jpg", name: "Simple black Shirt", description: "Simple black Shirt", preis: 7.99, kategorie: "kategorie_women" };
let artikel11: ArtikelWoMen = { img: "shirtWomen5.jpg", name: "Simple grey shirt", description: "Stylsih grey shirt", preis: 7.99, kategorie: "kategorie_women" };
let artikel12: ArtikelWoMen = { img: "shirtWomen6.jpg", name: "Red shirt", description: "Stylish Red shirt", preis: 29.99, kategorie: "kategorie_women" };

let artikelWomen: ArtikelWoMen[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];


//MEN
for (let index = 0; index < artikelMen.length; index++) {
    //DIV
    let newDiv = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("flex1")?.appendChild(newDiv);
    //IMG
    let imgElement = document.createElement("img");
    imgElement.src = artikelMen[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);
    //NAME
    let name = document.createElement("p");
    name.innerHTML = artikelMen[index].name;
    document.getElementById("div1" + index)?.appendChild(name);
    //DESCRIPTION
    let description = document.createElement("p");
    description.innerHTML = artikelMen[index].description;
    document.getElementById("div1" + index)?.appendChild(description);
    //PREIS
    let newPreis: HTMLParagraphElement = document.createElement("p");
    newPreis.innerHTML = artikelMen[index].preis.toFixed(2) + "€";
    document.getElementById("div1" + index)?.appendChild(newPreis);
    //BUY
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div1" + index)?.appendChild(kaufen);
}
//WOMEN
for (let index = 0; index < artikelWomen.length; index++) {
    //DIV
    let newDiv = document.createElement("div");
    newDiv.id = "div2" + index;
    document.getElementById("flex2")?.appendChild(newDiv);
    //IMG
    let imgElement = document.createElement("img");
    imgElement.src = artikelWomen[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);
    //NAME
    let name = document.createElement("p");
    name.innerHTML = artikelWomen[index].name;
    document.getElementById("div2" + index)?.appendChild(name);
    //DESCRIPTION
    let description = document.createElement("p");
    description.innerHTML = artikelWomen[index].description;
    document.getElementById("div2" + index)?.appendChild(description);
    //PREIS
    let newPreis: HTMLParagraphElement = document.createElement("p");
    newPreis.innerHTML = artikelWomen[index].preis.toFixed(2) + "€";
    document.getElementById("div1" + index)?.appendChild(newPreis);
    //BUY
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div2" + index)?.appendChild(kaufen);
}
  }

//# sourceMappingURL=Interface.js.map