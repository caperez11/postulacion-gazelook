import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm.reset({
      email: 'tester@tester.com'
    });
  }

  public login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { email } = this.loginForm.value;
    this.authService.login(email).subscribe((resp) => {
      Swal.fire(`${resp.message}`);
      this.loginForm.reset();
    });

  }

  public isValidField(campo: string): boolean | null {
    return (
      this.loginForm.controls[campo].errors &&
      this.loginForm.controls[campo].touched
    );
  }

}
