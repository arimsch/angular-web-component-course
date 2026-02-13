class MySelect extends HTMLElement {
  constructor(){
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
            <select>
                <option value="1">Опция 1</option>
                <option value="2">Опция 2</option>
                <option value="3">Опция 3</option>
            </select>
    `;
  }
}

customElements.define('my-select', MySelect);