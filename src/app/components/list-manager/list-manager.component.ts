import { Component } from '@angular/core';
import { ItemList } from 'src/app/models/content.model';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss'],
})
export class ListManagerComponent {
  todoList: ItemList[] = [
    { title: 'install NodeJS', completed: true },
    { title: 'install Angular CLI', completed: false },
    { title: 'create new app', completed: false },
    { title: 'serve app', completed: false },
    { title: 'develop app', completed: false },
    { title: 'deploy app', completed: false },
  ];

  addElemToList(newTitle: string) {
    const newItem: ItemList = { title: newTitle, completed: false };
    this.todoList.push(newItem);
  }
}
