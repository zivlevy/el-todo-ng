import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "./services/todo-data.service";
import {Todo} from './classes/todo';
import {Observable} from "rxjs";
import 'rxjs/Rx'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    newTodo: Todo = new Todo();
    todos: Todo[] = [];

    constructor(private todoDataService: TodoDataService) {

    }

    ngOnInit() {
        this.todoDataService.getAllTodos()
            .subscribe(items =>this.todos = items
        );
    }

    deleteTodo(todo: Todo) {
        this.todoDataService.deleteTodo(todo._id)
            .switchMap(() => this.todoDataService.getAllTodos())
            .subscribe(items => this.todos = items);
    }

    toggleTodo(todo: Todo) {
        this.todoDataService.toggleTodo(todo._id, !todo.completed)
            .switchMap(() => this.todoDataService.getAllTodos())
            .subscribe(items => this.todos = items)
    }

    addTodo() {
        this.todoDataService.addTodo(this.newTodo)
            .switchMap(() => this.todoDataService.getAllTodos())
            .subscribe((items) => {
                this.todos = items;
                this.newTodo = new Todo();
            })
    }


}
