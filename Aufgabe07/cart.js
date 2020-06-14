"use strict";
var Augabe07;
(function (Augabe07) {
    class Cart {
        constructor() {
            this.content = [];
        }
        pushLocalStorage() {
            let contentString = JSON.stringify(this.content);
            localStorage.setItem("artikel", contentString);
            console.log(localStorage);
        }
        showArticles() {
        }
    }
    Augabe07.Cart = Cart;
})(Augabe07 || (Augabe07 = {}));
//# sourceMappingURL=cart.js.map