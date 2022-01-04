import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id ); //Regresa un array y sobreescribe el mismo
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {

        for (const todo of this.todos) {
            if(todo.id == id) {
                todo.completado = !todo.completado //Se evalua el contrario 
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado ); // Regresa todos los que no estén completados
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem( 'todo', JSON.stringify( this.todos ) );

    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem( 'todo' ) ) 
                        ? JSON.parse( localStorage.getItem( 'todo' ) )
                        : [];

        this.todos = this.todos.map( obj => Todo.fromJSON(obj) ); // El map saca el bojeto del array y lo pasa a la función o método fromJSON de la clase Todo
    }


}