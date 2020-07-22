import { InputType } from "zlib";

namespace PrüfungsaufgabeGiS {

    export interface Feedback {
      _id: string;
      firstname: string;
      lastname: string;
      plz: string;
    }
  
    // let serverURL: string = "http://localhost:8100";
    let serverURL: string = "https://gis-example.herokuapp.com";
    let starSpans: NodeListOf<Element>;
    init();
  
    function init(): void {
      document.getElementById("submit-btn")?.addEventListener("click", insert);
      document.getElementById("show-btn")?.addEventListener("click", findAll);

    }
  
    async function insert(_e: Event): Promise<void> {
      let hiddenRatingInput: HTMLInputElement = <HTMLInputElement>document.getElementById("rating-input");
      if (!document.forms[0].checkValidity() || parseInt(hiddenRatingInput.value) < 0) {
        _e.preventDefault();
        return;
      }
      for (let s of starSpans) {
        s.classList.remove("selected");
      }
  
      let fd: FormData = new FormData(document.forms[0]);
      // tslint:disable-next-line: no-any
      let query: URLSearchParams = new URLSearchParams(<any>fd);
      let response: Response = await fetch(serverURL + "/insert?" + query);
      console.log(await response.json());
      hiddenRatingInput.value = "-1";
    }
  
    async function findAll(_e: Event): Promise<void> {
      let response: Response = await fetch(serverURL + "/read");
      let feedbacks: Feedback[] = await response.json();
      let out: HTMLDivElement = <HTMLDivElement>document.getElementById("output")!;
      out.innerHTML = "";
  
      for (let f of feedbacks) {
        out.appendChild(createOneFeedbackDisplay(f));
      }
    }
  
    function createOneFeedbackDisplay(_f: Feedback): HTMLElement {
      let feedbackDiv: HTMLDivElement = document.createElement("div");
      feedbackDiv.classList.add("one-feedback");
      feedbackDiv.setAttribute("_id", _f._id);
  
      let firstname: HTMLSpanElement = document.createElement("span");
      firstname.classList.add("feedback-name");
      firstname.innerText = _f.firstname;
      feedbackDiv.appendChild(firstname);
  
      let lastname: HTMLSpanElement = document.createElement("span");
      lastname.classList.add("feedback-name");
      lastname.innerText = _f.lastname;
      feedbackDiv.appendChild(lastname);

      let plzSpan: HTMLParagraphElement = document.createElement("p");
      lastname.classList.add("feedback-name");
      plzSpan.innerHTML = _f.plz;
      plzSpan.appendChild(plzSpan);
  
  
      return feedbackDiv;
    }

  }