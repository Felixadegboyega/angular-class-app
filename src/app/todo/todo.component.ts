import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public router: Router, public todoService:TodoService) { }
  public todo = "";
  public editInput = "";
  public condition = false;
  public index = "";
  public todoList = []

  ngOnInit(): void {
    // if(this.todoService.getTodos() != null || this.todoService.getTodos() != ""){
      // this.todoList = this.todoService.getTodos();
    // }
    // let list = this.todoService.getTodos();
    this.todoService.getTodos().subscribe(todos => {
      console.log(todos)
      this.todoList = todos
    })
  }

  addTodo(){
    let getDate = new Date
    let todoObj = {item:this.todo, time:getDate.toLocaleTimeString()}
    this.todoList.push(todoObj)   
    localStorage.setItem("todo", JSON.stringify(this.todoList))
    this.todo = ""
  }

  delete(i){
    this.todoList.splice(i,1)
    localStorage.setItem("todo", JSON.stringify(this.todoList))
  }

  edit(i){
    this.editInput = this.todoList[i].item
    this.condition = true
    this.index = i
  }

  save(){
    this.condition = false;
    this.todoList[this.index].item = this.editInput;
    localStorage.setItem("todo", JSON.stringify(this.todoList))
    this.editInput = ""
    this.index = ""
  }

  viewTodo(id){
    this.router.navigate([`/todo/todo-details/${id}`])
    // console.log(id)
  }
}
