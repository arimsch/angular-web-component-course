const componentName = document.currentScript?.dataset?.name;

class MySelect extends HTMLElement {
  #rendered = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this.#rendered) return;
    this.#rendered = true;

    const select = document.createElement("select");
    select.append(
      ...this.#parseOptions().map(({ value, label }) => {
        const option = document.createElement("option");
        option.value = String(value);
        option.textContent = String(label);
        return option;
      }),
    );
    this.shadowRoot.append(select);
  }

  #parseOptions() {
    const raw = this.getAttribute("options");
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
}

if (componentName && !customElements.get(componentName)) {
  customElements.define(componentName, MySelect);
}
