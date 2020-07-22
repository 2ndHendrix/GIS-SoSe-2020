"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrüfungsaufgabeGiS;
(function (PrüfungsaufgabeGiS) {
    // let serverURL: string = "http://localhost:8100";
    let serverURL = "https://gis-example.herokuapp.com";
    init();
    function init() {
        document.getElementById("submit-btn")?.addEventListener("click", insert);
        document.getElementById("show-btn")?.addEventListener("click", findAll);
    }
    async function insert(_e) {
        let fd = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(fd);
        let response = await fetch(serverURL + "/insert?" + query);
        console.log(await response.json());
    }
    async function findAll(_e) {
        let response = await fetch(serverURL + "/read");
        let feedbacks = await response.json();
        let out = document.getElementById("output");
        out.innerHTML = "";
        for (let f of feedbacks) {
            out.appendChild(antwortAusgabe(f));
        }
    }
    function antwortAusgabe(_f) {
        let feedbackDiv = document.createElement("div");
        feedbackDiv.classList.add("one-feedback");
        feedbackDiv.setAttribute("_id", _f._id);
        let firstname = document.createElement("span");
        firstname.classList.add("feedback-name");
        firstname.innerText = _f.firstname;
        feedbackDiv.appendChild(firstname);
        let lastname = document.createElement("span");
        lastname.classList.add("feedback-name");
        lastname.innerText = _f.lastname;
        feedbackDiv.appendChild(lastname);
        let plzSpan = document.createElement("p");
        lastname.classList.add("feedback-name");
        plzSpan.innerHTML = _f.plz;
        plzSpan.appendChild(plzSpan);
        return feedbackDiv;
    }
})(PrüfungsaufgabeGiS || (PrüfungsaufgabeGiS = {}));
//# sourceMappingURL=feedback.js.map