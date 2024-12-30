import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90"
      (click)="handleButtonClick()"
    >
      {{label()}}
    </button>
  `,
  standalone: true,
  styles: ``
})
export class PrimaryButtonComponent {

  // name of the button
  label = input('');

  // output event when button is clicked
  btnClicked = output();

  // handle button click
  handleButtonClick() {
    this.btnClicked.emit();
  }
}
