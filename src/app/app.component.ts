import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tempForm: FormGroup;
  cel: number;
  fah: number;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tempForm = this.fb.group({
      cel: [''],
      fah: [''],
    });

    this.tempForm
      .get('cel')
      .valueChanges.subscribe(
        (value) => (this.fah = Math.round(value * 1.8 + 32 * 10) / 10)
      );
    this.tempForm
      .get('fah')
      .valueChanges.subscribe(
        (value) => this.cel = Math.round((value - 32) * 1.8 * 10) / 10
      );
  }

  handleOnChangeFah(event: Event): void {
    this.cel =
      Math.round((+(event.target as HTMLInputElement).value - 32) * 1.8 * 10) /
      10;
  }

  handleOnChangeCel(event: Event): void {
    this.fah =
      Math.round((+(event.target as HTMLInputElement).value * 1.8 + 32) * 10) /
      10;
  }
}
