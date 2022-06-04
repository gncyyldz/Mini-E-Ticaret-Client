import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../../../entities/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  frm: FormGroup;

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      adSoyad: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      kullaniciAdi: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      email: ["", [
        Validators.required,
        Validators.maxLength(250),
        Validators.email
      ]],
      sifre: ["",
        [
          Validators.required
        ]],
      sifreTekrar: ["",
        [
          Validators.required
        ]]
    }, {
      validators: (group: AbstractControl): ValidationErrors | null => {
        let sifre = group.get("sifre").value;
        let sifreTekrar = group.get("sifreTekrar").value;
        return sifre === sifreTekrar ? null : { notSame: true };
      }
    })
  }

  get component() {
    return this.frm.controls;
  }

  submitted: boolean = false;
  onSubmit(data: User) {
    this.submitted = true;

    debugger;
    if (this.frm.invalid)
      return;

  }
}
