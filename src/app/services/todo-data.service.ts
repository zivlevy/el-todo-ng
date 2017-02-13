import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/Rx'

@Injectable()
export class TodoDataService {

    baseURL: string = 'http://130.211.153.28:9000/todos';


    constructor(private http: Http) {

    }

    getAllTodos(): Observable<Todo[]> {
        return this.http.get(this.baseURL)
            .map((res: Response) =>  res.json())
    }

    addTodo(todo:Todo) :Observable<Todo[]> {
        let bodyString =JSON.stringify(todo) ;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.baseURL, bodyString,options)
            .map((res: Response) => res.json())

    }

    deleteTodo(id: string): Observable<Todo[]> {
        return this.http.delete(`${this.baseURL}/${id}`)
            .map((res: Response) => res.json())
     }

    toggleTodo(id:string,completed:boolean) :Observable<Todo[]> {
        let bodyString ={"completed":completed} ;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.put(`${this.baseURL}/${id}`, bodyString, options)
            .map((res: Response) => res.json())

    }


}
