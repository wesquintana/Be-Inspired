import store from "../store.js";
import Todo from "../models/todo.js";
// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/wesquintana/todos/",
  timeout: 8000
});

class TodoService {
  async getTodosAsync() {
    console.log("Getting the Todo List");
    let res = await todoApi.get();
    let todos = res.data.data.map(rawData => new Todo(rawData));
    store.commit("todos", todos);
    //TODO Handle this response from the server
  }

  async addTodoAsync(todo) {
    let realTodo = new Todo({ description: todo });
    let res = await todoApi.post("", realTodo);
    let todos = [...store.State.todos, new Todo(res.data.data)];
    store.commit("todos", todos);
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    // let index = store.State.todos.findIndex(todo => todo._id == todoId);
    // let tempTodo = new Todo(todo);
    todo.completed = !todo.completed;
    store.commit("todos", [...store.State.todos]);
    let res = await todoApi.put(todoId, todo);
    // let tempTodos = [...store.State.todos];
    // tempTodos[index] = tempTodo;

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    let index = store.State.todos.findIndex(todo => todo._id == todoId);
    let todos = [...store.State.todos];
    todos.splice(index, 1);
    store.commit("todos", todos);
    let res = await todoApi.delete(todoId);
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
