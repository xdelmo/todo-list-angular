import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
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
    <button class="btn btn-primary" (click)="outputTitle(inputElemRef.value)">
      Save
    </button>
  `,

  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent {
  @Output()
  newItemEvent = new EventEmitter<any>();

  outputTitle(value: string) {
    this.newItemEvent.emit(value);
  }
}
