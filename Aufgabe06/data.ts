//Interface
namespace Aufgabe06 {
    interface Artikel {
    img: string;
    name: string;
    description: string;
    preis: number;
}

//Artikel Men
const artikel1: Artikel = { img: "shirt1.jpg", name: "Shirt Nike", description: "Sytlish Nike shirt", preis: 29.99 };
const artikel2: Artikel = { img: "shirt2.jpg", name: "Long Sleeve Jumper", description: "Stylish Jumper", preis: 49.99 };
const artikel3: Artikel = { img: "shirt3.jpg", name: "Long sleeve Shirt", description: "Sytlish Jumper", preis: 40.99 };
const artikel4: Artikel = { img: "shirt4.jpg", name: "Light Blue Shirt", description: "Stylisch blue Shirt", preis: 19.99 };
const artikel5: Artikel = { img: "shirt5.jpg", name: "Half sleeve Jumper", description: "Stylish Jumper", preis: 39.99 };
const artikel6: Artikel = { img: "shirt6.jpg", name: "Long sleeve Jumper", description: "Stylsih Jumper", preis: 29.99 };

//Artikel Men Array
export let artikelMen: Artikel[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];


//Artikel Women
const artikel7: Artikel = { img: "shirtWomen1.jpg", name: "Pink Shirt", description: "Stylisch pink shirt", preis: 19.99 };
const artikel8: Artikel = { img: "shirtWomen2.jpg", name: "Purple Shirt", description: "Stylisch purple shirt", preis: 19.99 };
const artikel9: Artikel = { img: "shirtWomen3.jpg", name: "Light blue Shirt", description: "Stylish blue shirt", preis: 59.99 };
const artikel10: Artikel = { img: "shirtWomen4.jpg", name: "Simple black Shirt", description: "Simple black Shirt", preis: 7.99 };
const artikel11: Artikel = { img: "shirtWomen5.jpg", name: "Simple grey shirt", description: "Stylsih grey shirt", preis: 7.99 };
const artikel12: Artikel = { img: "shirtWomen6.jpg", name: "Red shirt", description: "Stylish Red shirt", preis: 29.99 };

//Artikel Women Array
export let artikelWomen: Artikel[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];
}