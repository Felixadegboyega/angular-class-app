import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http:HttpClient) { }

  getTodos(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos")
    // return JSON.parse(localStorage.getItem("todo"))
  }

  getTodo(id){
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // return JSON.parse(localStorage.getItem("todo"))
  }
}
