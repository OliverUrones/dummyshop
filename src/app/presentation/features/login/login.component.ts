import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ILogin, IUser, IUserResponse} from "../../../core/models/auth.model";
import { AuthFacade } from "../../../facades/auth.facade";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  invalidForm: string | null;
  user$: Observable<IUser | null>;
  isLoading$: Observable<boolean>;
  loginError$: Observable<string | null>;

  constructor(private formBuilder: FormBuilder, private authFacade: AuthFacade) {
    this.user$ = this.authFacade.user$;
    this.isLoading$ = this.authFacade.isLoading$;
    this.loginError$ = this.authFacade.error$;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.invalidForm = null;
  }

  onSubmitLoginForm() {
    if(this.loginForm.valid) {
      const data: ILogin = this.loginForm.value
      this.authFacade.login(data)
      this.invalidForm = null;
    } else {
      this.invalidForm = 'Revise los campos.'
    }
  }
}
