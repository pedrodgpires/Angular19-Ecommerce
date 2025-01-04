import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class="text-black w-full px-5 py-2 rounded-xl shadow-md hover:bg-"
      (click)="handleButtonClick()"
    >
      {{ label() }}
    </button>
  `,
  standalone: true,
  styles: ``
})
export class ButtonComponent {

  // name of the button
  label = input('');

  // output event when button is clicked
  btnClicked = output();

  // handle button click
  handleButtonClick() {
    this.btnClicked.emit();
  }
}
