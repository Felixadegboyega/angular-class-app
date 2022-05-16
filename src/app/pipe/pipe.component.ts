import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  public item = "RICE"
  public price = 23232
  public test = "HELLO"

  public searchText = ""

  public itemArray = []

  add(){
    this.itemArray = [...this.itemArray, this.item]
  }
  ngOnInit(): void {
  }

}
