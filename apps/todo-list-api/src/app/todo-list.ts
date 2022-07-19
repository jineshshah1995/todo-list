import { Express } from 'express';
import _ = require("lodash");
import {Todo} from '../../../../libs/utils/models/common.model';

let todos: Todo[] = [];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post('/api/addTodo', (req, resp) => {
    const newTodo = req.body;
    todos.push(newTodo);
    resp.send(todos);
  });

  app.post('/api/removeTodo', (req, resp) => {
    const removeItem = req.body.title;
    todos = _.reject(todos, function(item){return item.title === removeItem;});
    resp.send(todos);
  });
}