import { Component } from '@angular/core';
import { ItemList } from './models/content.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  interceptorEvent(eventValue: any) {
    this.title = eventValue;
  }

  addElemToList(newTitle: string) {
    const newItem: ItemList = { title: newTitle, completed: false };
    this.todoList.push(newItem);
  }
}
