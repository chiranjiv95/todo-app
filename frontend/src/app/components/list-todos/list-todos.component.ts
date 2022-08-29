import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from 'src/app/services/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  // todos = [
  //   new Todo(1, 'Learn to Code', false, new Date()),
  //   new Todo(2, 'Become an Expert in Amgular', false, new Date()),
  //   new Todo(1, 'Become an expert in Spring Boot', false, new Date()),
  //   new Todo(1, 'Visit USA', false, new Date()),
  // ];

  todos!: Todo[];
  message!: string;

  constructor(private todoService: TodoDataService, private route: Router) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('chiranjiv').subscribe((res: any) => {
      this.todos = res;
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo('chiranjiv', id).subscribe((res) => {
      this.message = `Delete of Todo ${id} Successfull!`;
      this.refreshTodos();
    });
  }

  updateTodo(id: number) {
    console.log('update todo');
    this.route.navigate(['todos', id]);
  }

  addTodo() {
    this.route.navigate(['todos', -1]);
  }
}
