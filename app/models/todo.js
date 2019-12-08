export default class Todo {
  constructor(data) {
    this.description = data.description;
    this.completed = data.completed || false;
    this._id = data._id || "";
  }
  get Template() {
    let template = /*html*/ `<li class="text-white"><input onclick="app.todoController.toggleTodoStatusAsync('${this._id}')" type="checkbox"`;
    if (this.completed) {
      template += ` checked> </input><strike>${this.description}</strike> <i class="fa fa-times-circle" onclick="app.todoController.removeTodoAsync('${this._id}')"></i></li>`;
      return template;
    }
    template += /*html*/ `></input> ${this.description} <i class="fa fa-times-circle" onclick="app.todoController.removeTodoAsync('${this._id}')"></i></li>`;
    return template;
  }
}
