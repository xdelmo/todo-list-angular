import { Component, Input } from '@angular/core';
import { ItemList } from 'src/app/models/content.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input()
  itemContent: ItemList = { title: '' };
}
