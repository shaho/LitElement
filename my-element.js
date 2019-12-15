import { LitElement, html } from "lit-element";

class MyElement extends LitElement {
  static get properties() {
    return {
      message: String,
    };
  }

  constructor() {
    super();
    this.message = "Loading";
    this.addEventListener("stuff-loaded", (e) => {
      this.message = e.detail;
    });
    this.loadStuff();
  }

  loadStuff() {
    setInterval(() => {
      let loaded = new CustomEvent("stuff-loaded", {
        detail: "Loading complete.",
      });
      this.dispatchEvent(loaded);
    }, 3000);
  }

  render() {
    return html`
      <div>
        <!-- <p>A Paragraph</p> -->
        <p>${this.message}</p>
      </div>
    `;
  }
}

customElements.define("my-element", MyElement);
