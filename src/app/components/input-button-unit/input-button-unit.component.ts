import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `<h1>Title h1 {{ titleChildren }}</h1>
    <div class="mb-3 w-50">
      <label for="exampleFormControlInput1" class="form-label"
        >Email address</label
      >
      <input
        #inputElemRef
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
      />
    </div>
    <button class="btn btn-primary" (click)="changeTitle(inputElemRef.value)">
      Save
    </button>
    <pre>{{ title3 }}</pre> `,

  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent implements OnInit {
  title2 = 'Hello World';
  title3 = 'Title3';

  @Input()
  titleChildren!: string;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {
    this.title2 = 'I Love Angular';
  }

  ngOnInit(): void {
    this.title2 = 'ngOnInit var';
    // setTimeout(() => {
    //   this.title2 = 'This is not the title you are looking for';
    // }, 3000);
  }

  changeTitle(newTitle: string) {
    this.title3 = newTitle;
  }

  outputTitle() {
    this.newItemEvent.emit('Output title');
  }
}
