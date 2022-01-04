
import './style.css';

import { Todo, TodoList } from './classes'; // Al no especificar el nombre y como está en el mismo directorio toda por defecto el index.js
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);


// const tarea = new Todo('Aprender JavaScript');

// todoList.nuevoTodo(tarea);

// crearTodoHtml(tarea);

