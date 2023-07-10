import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  RxFormBuilder
} from '@rxweb/reactive-form-validators';
import { LoginRequestDto } from '../lib/DTOS/loginRequestDto';
import { LoginService } from './login.service';
import { takeUntil } from 'rxjs';
import { AuthStore } from '../lib/store/auth.store';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  get controlEmail(): FormControl {
    return this.loginForm?.get('username') as FormControl;
  }
  get controlPassword(): FormControl {
    return this.loginForm?.get('password') as FormControl;
  }


  constructor(
    private fb: RxFormBuilder,
    private loginService: LoginService,
    private authStore: AuthStore,
    private router: Router,



  ) { }

  ngOnInit(): void {

    console.log(this.authStore.getToken() , this.router.url);

    if (this.authStore.getToken() && this.router.url.includes('/login')){
      this.router.navigate(['cambio']);
    }

    this.initialForm();


  }

  initialForm(): void {
    this.loginForm = this.fb.formGroup(new LoginRequestDto());
  }

  ngAfterViewInit(): void {
    this.loginForm.updateValueAndValidity();
  }

  onSubmit() {

    if (this.loginForm.valid) {

      const login = this.loginForm.value as LoginRequestDto;

      this.loginService.login(login).subscribe(
          (data) => {

            this.authStore.setToken(data.token);
            this.router.navigate(['cambio']);
            console.log(data.token);

          },
          (error) => {

              const errorMessage = 'Usuario y/o contraseña invalido.';

          }
        );
    }

    }
    // Realizar acciones de inicio de sesión

}
