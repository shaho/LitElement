import { LitElement, html } from "lit-element";

class Example2 extends LitElement {
  static get properties() {
    return {
      prop1: String,
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <!-- Binding -->
    `;
  }
}

customElements.define("my-example2", Example2);
