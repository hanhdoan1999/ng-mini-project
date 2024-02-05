import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule ,
    PasswordModule,
    FormsModule,
    PasswordModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{3,20}$/)]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,32}$/)
      ]]
    });
  }

  login(): void {
    // if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value
      this.authService.login(username,password)
      .subscribe({
        next: (response: any) => {
            localStorage.setItem("authToken",response.token),
            localStorage.setItem("userName", username),
            localStorage.setItem("isLogin", "true"),
            this.loginForm.reset();
            this.router.navigate(["list-book"]);
        },
        error: (error) => {
          console.error('Error in API request:', error);
        },
        complete: () => {
        }
      });
    // } else {
    //   console.log('Form không hợp lệ! Vui lòng kiểm tra lại thông tin đăng nhập.');
    // }
  }
}
