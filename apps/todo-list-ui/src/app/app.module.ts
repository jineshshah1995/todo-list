import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, TodoListComponent],
  imports: [BrowserModule,
    HttpClientModule,
    FormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
