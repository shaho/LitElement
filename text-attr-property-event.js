import { LitElement, html } from "lit-element";

class Example2 extends LitElement {
  static get properties() {
    return {
      prop1: String,
      prop2: String,
      prop3: Boolean,
      prop4: String,
    };
  }

  constructor() {
    super();
    this.prop1 = "text binding";
    this.prop2 = "mydiv";
    this.prop3 = true;
    this.prop4 = "pie";
  }

  clickHandler(e) {
    console.log(e.target);
  }

  render() {
    return html`
      <!-- Binding -->
      <div>${this.prop1}</div>

      <div id="${this.prop2}">Attribute</div>

      <div>
        Boolean Attribute
        <input type="text" ?disabled="${this.props3}" />
      </div>

      <div>
        Property Binding
        <input type="text" .value="${this.prop4}" />
      </div>

      <div>
        Event handler Binding
        <button @click="${this.clickHandler}">Click</button>
      </div>
    `;
  }
}

customElements.define("my-example2", Example2);
