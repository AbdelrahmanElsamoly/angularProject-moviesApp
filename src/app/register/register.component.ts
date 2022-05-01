import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  error: string = '';
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(15),
      Validators.max(80),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{2,16}$/),
    ]),
  });

  constructor(public _AuthService: AuthService, private _Router: Router) {}
  registeration(registerForm: FormGroup) {
    if (registerForm.valid == true) {
      this._AuthService.postApi(registerForm.value).subscribe((response) => {
        if (response.message == 'success') {
          this._Router.navigate(['login']);
        } else {
          this.error = response.errors.email.message;
        }
      });
    }
  }

  ngOnInit(): void {}
}
