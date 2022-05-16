import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from './form/form.component';
import { PipeComponent } from './pipe/pipe.component';
import { ChangePipe } from './pipesfolder/change.pipe';
import { FilterpipePipe } from './pipesfolder/filterpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TodoComponent,
    HomeComponent,
    NotfoundComponent,
    TodoDetailsComponent,
    FormComponent,
    PipeComponent,
    ChangePipe,
    FilterpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Social
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
