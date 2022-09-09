import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TForm } from 'src/app/utils/types/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  protected submitted: boolean = false;
  @Input() title: string = '';
  @Input() isLogin: boolean = false;
  @Input() loading: boolean = false;
  @Input() formGroup: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  @Output() onSubmitOutput: EventEmitter<TForm> = new EventEmitter<TForm>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: [
        '',
        this.isLogin ? Validators.nullValidator : Validators.required,
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          !this.isLogin ? Validators.minLength(6) : null,
        ]),
      ],
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) return;
    if (this.isLogin) delete this.formGroup.value.username;
    this.onSubmitOutput.emit({ ...this.formGroup.value });
  }

  get form() {
    return this.formGroup.controls;
  }
}
