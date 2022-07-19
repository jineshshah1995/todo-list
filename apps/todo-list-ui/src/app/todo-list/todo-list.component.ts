/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import {Todo} from '../../../../../libs/utils/models/common.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent implements OnInit {
  constructor(private _todoListService: TodoListService) {}
  todoList: Todo[] = [];
  newItem = '';
  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this._todoListService.getTodoList().subscribe((todoListRes) => {
      this.todoList = todoListRes;
    });
  }

  addNewItem() {
    if(!this.newItem) return;
    this._todoListService.addTodo(this.newItem).subscribe((resp) => {
      this.getTodoList();
      this.newItem = '';
    });
  }

  removeItem(item: Todo) {
    this._todoListService.removeTodo(item).subscribe((resp) => {
      this.getTodoList();
    });
  }

}
