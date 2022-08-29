import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from 'src/app/services/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id!: number;
  todo!: Todo;
  constructor(
    private service: TodoDataService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.service.retrieveTodo('chiranjiv', this.id).subscribe((res) => {
        this.todo = res;
      });
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.service.addTodo('chiranjiv', this.todo).subscribe((res) => {
        this.todo = res;
        this.route.navigate(['todos']);
      });
    } else {
      this.service
        .updateTodo('chiranjiv', this.id, this.todo)
        .subscribe((res) => {
          this.todo = res;
          this.route.navigate(['todos']);
        });
    }
  }
}
