namespace Aufgabe05 {
    //Attribute erstellen
    interface Artikel {
        showMe: boolean;
        image: string;
        titel: string;
        description: string;
        preis: number;
    }

    //Artikel Musik Sale
    let artikel1: Artikel = {
        showMe: true,
        image: "shirt1.jpg",
        titel: "Shirt Nike",
        description: "Sytlish Nike shirt",
        preis: 29.99,
    };
    let artikel2: Artikel = {
        showMe: true,
        image: "shirt2.jpg",
        titel: "Long sleeve Jumper",
        description: "Sytlish Jumper",
        preis: 49.99,

    };
    let artikel3: Artikel = {
        showMe: true,
        image: "shirt3.jpg",
        titel: "Long sleeve Shirt",
        description: "Sytlish Shirt",
        preis: 40.99,

    };
    let artikel4: Artikel = {
        showMe: true,
        image: "shirt4.jpg",
        titel: "Light blue shirt",
        description: "Sytlish blue shirt",
        preis: 19.99,

    };
    let artikel5: Artikel = {
        showMe: true,
        image: "shirt5.jpg",
        titel: "Half sleeve Jumper",
        description: "Sytlish Jumper",
        preis: 39.99,

    };
    let artikel6: Artikel = {
        showMe: true,
        image: "shirt6.jpg",
        titel: "Long sleeve Jumper",
        description: "Sytlish Jumper",
        preis: 29.99,

    };
    let artikel7: Artikel = {
        showMe: true,
        image: "shirtWomen1.jpg",
        titel: "Pink shirt",
        description: "Sytlish pink shirt",
        preis: 19.99,

    };
    let artikel8: Artikel = {
        showMe: true,
        image: "shirtWomen2.jpg",
        titel: "Purple Shirt",
        description: "Sytlish Purple Shirt",
        preis: 19.99,

    };
    let artikel9: Artikel = {
        showMe: true,
        image: "shirtWomen3.jpg",
        titel: "Light Blue Shirt",
        description: "Sytlish blue shirt",
        preis: 59.99,

    };
    let artikel10: Artikel = {
        showMe: true,
        image: "shirtWomen4.jpg",
        titel: "Black shirt",
        description: "Simple black shirt",
        preis: 7.99,

    };
    let artikel11: Artikel = {
        showMe: true,
        image: "shirtWomen5.jpg",
        titel: "Simple grey shirt",
        description: "Sytlish grey shirt",
        preis: 7.99,

    };
    let artikel12: Artikel = {
        showMe: true,
        image: "shirtWomen6.jpg",
        titel: "Red Shirt",
        description: "Sytlish Red Shirt",
        preis: 29.99,

    };
  
 


    //alle Artikel aus dem Sale
    const allSales: Artikel[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6, artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];
  

    generateTags();
    function generateTags(): void {
        
        for (let index: number = 0; index < allSales.length; index++) {
             //Inhalte festlegen
            let img: HTMLElement = document.createElement("img");
            img.setAttribute("src", allSales[index].image);
            img.setAttribute("alt", "Music Covers");
            let div: HTMLElement = document.createElement("div");
            div.setAttribute("class", "music");
            let pTitel: HTMLElement = document.createElement("p");
            pTitel.setAttribute("class", "text");
            let pAlbum: HTMLElement = document.createElement("p");
            pAlbum.setAttribute("class", "text");
            let pInterpret: HTMLElement = document.createElement("p");
            pInterpret.setAttribute("class", "text");
            let pPrice: HTMLElement = document.createElement("p");
            pPrice.setAttribute("class", "text");
            let button: HTMLElement = document.createElement("a");
            button.setAttribute("title", "In den Warenkorb!");
            button.setAttribute("href", "https://2ndhendrix.github.io/GIS-SoSe-2020/Aufgabe04/styleconcept.html");
            button.setAttribute("class", "fas fa-shopping-basket");
          
            //Inhalte generieren
            document.getElementById("masterSales")?.appendChild(div);
            div.appendChild(img);
            div.appendChild(button).innerHTML = "Preis: " + allSales[index].preis + "€";
            div.appendChild(pTitel).innerHTML = allSales[index].titel;
         

        }
    }
}