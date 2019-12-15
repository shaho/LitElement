import { LitElement, html } from "lit-element";

class Examples extends LitElement {
  static get properties() {
    return {
      myString: { type: String },
      myArray: { type: Array },
      myBool: { type: Boolean },
    };
  }

  constructor() {
    super();

    this.myString = "Hello World";
    this.myArray = ["an", "array", "of", "test", "data"];
    this.myBool = true;
  }

  render() {
    return html`
      <p>${this.myString}</p>

      <ul>
        ${this.myArray.map((i) => {
          return html`
            <li>${i}</li>
          `;
        })}
      </ul>

      ${this.myBool
        ? html`
            <p>myBool is True</p>
          `
        : html`
            <p>myBool is False!</p>
          `}
    `;
  }
}

customElements.define("my-examples", Examples);
