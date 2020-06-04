//Interface Men
interface ArtikelMen {
    img: string;
    name: string;
    description: string;
    preis: number;
}

//Artikel Men
let artikel1: ArtikelMen = { img: "shirt1.jpg", name: "Shirt Nike", description: "Sytlish Nike shirt", preis: 29.99 };
let artikel2: ArtikelMen = { img: "shirt2.jpg", name: "Long Sleeve Jumper", description: "Stylish Jumper", preis: 49.99 };
let artikel3: ArtikelMen = { img: "shirt3.jpg", name: "Long sleeve Shirt", description: "Sytlish Jumper", preis: 40.99 };
let artikel4: ArtikelMen = { img: "shirt4.jpg", name: "Light Blue Shirt", description: "Stylisch blue Shirt", preis: 19.99€ };
let artikel5: ArtikelMen = { img: "shirt5.jpg", name: "Half sleeve Jumper", description: "Stylish Jumper", preis: 39.99€ };
let artikel6: ArtikelMen = { img: "shirt6.jpg", name: "Long sleeve Jumper", description: "Stylsih Jumper", preis: 29.99€ };


//Artikel Men Array
let artikelMen: ArtikelMen[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];

//Interface Women
interface ArtikelWomen {
    img: string;
    name: string;
    description: string;
    preis: number;
}

//Artikel Women
let artikel7: ArtikelWomen = { img: "shirtWomen1.jpg", name: "Pink Shirt", description: "Stylisch pink shirt", preis: 19.99 };
let artikel8: ArtikelWomen = { img: "shirtWomen2.jpg", name: "Purple Shirt", description: "Stylisch purple shirt", preis: 19.99 };
let artikel9: ArtikelWomen = { img: "shirtWomen3.jpg", name: "Light blue Shirt", description: "Stylish blue shirt", preis: 59.99 };
let artikel10: ArtikelWomen = { img: "shirtWomen4.jpg", name: "Simple black Shirt", description: "Simple black Shirt", preis: 7.99 };
let artikel11: ArtikelWomen = { img: "shirtWomen5.jpg", name: "Simple grey shirt", description: "Stylsih grey shirt", preis: 7.99 };
let artikel12: ArtikelWomen = { img: "shirtWomen6.jpg", name: "Red shirt", description: "Stylish Red shirt", preis: 29.99 };

//Artikel Women Array
let artikelWomen: ArtikelWomen[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];

//MEN
for (let index: number = 0; index < artikelMen.length; index++) {
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("flex1")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelMen[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelMen[index].name;
    document.getElementById("div1" + index)?.appendChild(name);

    //DESCRIPTION
    let description: HTMLParagraphElement = document.createElement("p");
    description.innerHTML = artikelMen[index].description;
    document.getElementById("div1" + index)?.appendChild(description);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelMen[index].preis;
    document.getElementById("div1" + index)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div1" + index)?.appendChild(kaufen);
}

//WOMEN
for (let index: number = 0; index < artikelWomen.length; index++) {
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div2" + index;
    document.getElementById("flex2")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelWomen[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelWomen[index].name;
    document.getElementById("div2" + index)?.appendChild(name);

    //DESCRIPTION
    let description: HTMLParagraphElement = document.createElement("p");
    description.innerHTML = artikelWomen[index].description;
    document.getElementById("div2" + index)?.appendChild(description);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelWomen[index].preis;
    document.getElementById("div2" + index)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div2" + index)?.appendChild(kaufen);
}