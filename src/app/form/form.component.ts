import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor( public FormBuild:FormBuilder ) { }

  public firstName=""
  public secondName=""
  public phoneNumber=""

  // for form group
  // public formG = new FormGroup({
  //   firstname: new FormControl(''),
  //   secondname: new FormControl(''),
  //   phonenumber: new FormControl('')
  // })

  // for form Builder
  public formB = this.FormBuild.group({
    firstname:[''],
    secondname:[''],
    phonenumber:['']
  })

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.formB.controls['firstname'].value)
    // console.log(this.formB)
    // console.log()
  }

}
