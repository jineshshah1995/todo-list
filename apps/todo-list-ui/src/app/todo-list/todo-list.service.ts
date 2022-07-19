/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Todo} from '../../../../../libs/utils/models/common.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private _http: HttpClient) { }

  getTodoList() {
    return this._http.get<Todo[]>(`/api/todos`);
  }

  addTodo(newItem: string) {
    const reqBody = {title: newItem};
    return this._http.post(`/api/addTodo` , reqBody, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
  }

  removeTodo(removeItem: Todo) {
    const reqBody = removeItem;
    return this._http.post(`/api/removeTodo` , reqBody, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
  }

}
