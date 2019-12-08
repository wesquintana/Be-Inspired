import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos;
  document.getElementById("count").innerHTML = `(${todos.length})`;
  let template = "";
  todos.forEach(todo => {
    template += todo.Template;
  });
  document.getElementById("todos").innerHTML = template;
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos);
    this.getTodosAsync();
  }
  async getTodosAsync() {
    try {
      await TodoService.getTodosAsync();
    } catch (error) {
      debugger;
      document.getElementById("todo-error").innerHTML = error;
    }
  }
  async addTodoAsync(e) {
    e.preventDefault();
    var data = e.target.description.value;
    console.log("description?: ", data);
    try {
      await TodoService.addTodoAsync(data);
    } catch (error) {
      debugger;
      document.getElementById("#todo-error").innerHTML = error;
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatusAsync(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      document.getElementById("#todo-error").innerHTML = error;
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodoAsync(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      document.getElementById("#todo-error").innerHTML = error;
    }
  }
}
