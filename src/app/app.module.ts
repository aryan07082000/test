import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TodolistComponent } from './todolist/todolist.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule, FormsModule,
    AppRoutingModule,MatButtonModule,MatIconModule,MatInputModule,DragDropModule,MatToolbarModule,
    BrowserAnimationsModule,MatCardModule,MatDialogModule,MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
