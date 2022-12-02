import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements OnInit {
  @Input() value: string | number= '';

  @Input() label: string = '';
  @Input() appearance: MatFormFieldAppearance = 'fill';
  @Input() type: string;

  constructor() {}

  ngOnInit(): void {}

  public onChange: (value: string) => void;
  public onTouched: (value: string) => void;

  touched = false;
  disabled = false;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
    this.onTouched(this.value);
  }
}
