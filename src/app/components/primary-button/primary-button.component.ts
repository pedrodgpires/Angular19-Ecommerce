import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="w-full border px-5 py-3 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 hover:shadow-2xl"
      [class.bg-blue-950]="!disabled()"
      [class.text-white]="!disabled()"
      [class.text-black-300]="disabled()"
      [disabled]="disabled()"
      (click)="handleButtonClick()"
    >
    {{ label() }}
    </button>




  `,
  standalone: true,
  styles: [
    `
      button {
        transition: opacity 0.2s, background-color 0.2s;
      }
      button:hover:not(:disabled) {
        opacity: 0.9;
      }
    `
  ]
})
export class PrimaryButtonComponent {

  // name of the button
  label = input('');

  // Whether the button is disabled
  disabled = input(false); // Default value is false (button is enabled by default)

  // Output event when the button is clicked
  btnClicked = output();

  // handle button click
  handleButtonClick() {
    this.btnClicked.emit();
  }
}
