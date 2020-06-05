
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