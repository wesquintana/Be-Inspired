export default class Quote {
  constructor(data) {
    this.body = data.body;
    this.author = data.author;
  }
  get Template() {
    return /*html*/ `<h1 class="text-center">"${this.body}"</h1><h2 class="text-center">- &nbsp${this.author}</h2>`;
  }
}
