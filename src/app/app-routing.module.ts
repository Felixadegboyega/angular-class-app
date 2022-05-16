import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import { TodoComponent } from "./todo/todo.component"
import { NotfoundComponent } from "./notfound/notfound.component"
import { TodoDetailsComponent } from "./todo-details/todo-details.component"
import { TodoGuard } from './todo.guard';
import { FormComponent } from './form/form.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {path: "form", component: FormComponent},
  {path: "pipe", component: PipeComponent},
  {path: "todo", children:[
    {path:"", component:TodoComponent, canActivate:[TodoGuard] },
    {path:"todo-details/:id", component:TodoDetailsComponent}
  ] },
  {path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }