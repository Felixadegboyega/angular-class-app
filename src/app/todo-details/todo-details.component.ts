import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public todoService:TodoService) { }
  public todo = {title: "", completed:""}
  ngOnInit(): void {
    let todoId = this.actRoute.snapshot.params.id;
    this.todoService.getTodo(todoId).subscribe(todo => {
      this.todo = todo
      // this.todo = todos[tod oIndex]
    })
    // this.todo = todos[todoIndex]
    // this.actRoute.snapshot.params

  }

}
