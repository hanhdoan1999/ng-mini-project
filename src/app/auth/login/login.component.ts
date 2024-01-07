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

  login() {
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value
      // this.authService.login(username,password);
      alert("Login success");
      localStorage.setItem("authToken", "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJtWVJaQXVsYXRURlJfcm5DdWlTVEduVi1sZ3g2a1ZERFdONmF2TFNJV1dvIn0.eyJleHAiOjE3MDQyOTA1MzIsImlhdCI6MTcwNDI1NDUzMywiYXV0aF90aW1lIjoxNzA0MjU0NTMyLCJqdGkiOiJhYmQxNTkzOS0wZjhlLTRkZjktYWNkNy0xMWUxN2E0Y2YwMDciLCJpc3MiOiJodHRwOi8vMTIzLjI0LjE0Mi45Mzo4MTgwL2F1dGgvcmVhbG1zL2ludGVybmFsIiwiYXVkIjpbIm1iZXItc2VydmljZSIsInJlYWxtLW1hbmFnZW1lbnQiLCJwY2NjLXJlc291cmNlIiwiYWNjb3VudCJdLCJzdWIiOiI4MzY4ZDhmNC05MmI0LTRkMDUtYjhkMS0zYWYxNzg5YmI4NDgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJtYmVyYXBwIiwibm9uY2UiOiJhYWMwMzAxNy1mNWU2LTQzM2UtOWZiZi1iYWI1MDQ5NDg2YzciLCJzZXNzaW9uX3N0YXRlIjoiZWYyZDcxNWQtMzBlYi00ZTUzLWFjNjYtZjk5MjBlY2RlNGY4IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkc2RzZHMiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1pbnRlcm5hbCJdfSwicmVzb3VyY2VfYWNjZXNzIjp7Im1iZXItc2VydmljZSI6eyJyb2xlcyI6WyJST0xFX05IQU5fVklFTl9NQkVSIiwidW1hX3Byb3RlY3Rpb24iLCJST0xFX0hBTkhfQ0hJTkgiLCJST0xFX0FETUlOIiwiUk9MRV9RVUFOX0xZX0RBVSIsIlJPTEVfVkFOX1RIVV9NQkVSIl19LCJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctcmVhbG0iLCJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sInBjY2MtcmVzb3VyY2UiOnsicm9sZXMiOlsidW1hX3Byb3RlY3Rpb24iXX0sIm1iZXJhcHAiOnsicm9sZXMiOlsiUk9MRV9OSEFOX1ZJRU5fTUJFUiIsIlJPTEVfVE9fWEUiLCJST0xFX0hBVV9DQU4iLCJST0xFX0FETUlOIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiZWYyZDcxNWQtMzBlYi00ZTUzLWFjNjYtZjk5MjBlY2RlNGY4IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiSMOgIFRodSBQaMawxqFuZyIsInByZWZlcnJlZF91c2VybmFtZSI6InBodW9uZ2h0MiIsImdpdmVuX25hbWUiOiJIw6AgVGh1IFBoxrDGoW5nIiwiZW1haWwiOiJwaHVvbmdAZ21haWwuY29tIn0.jvKstLM5ljxHQhC1I5k4iYphEH3WO2Yeoh0ccE2vZAMfQ9gSOkFGS-rNsyof4b0qMzzXoUX48MwYB9as9DB12aTfDxbQ03TamnIaIhw9LpBck0sTj_OUstwr3UNPOZVlHwcHoFB9BgXgl-AeCZFxv-_DuHFHg72HZ9NhX4n4QYOUZjYjpnnRFDqeyL1gp2l3j7eRYrTJC5k68Chzp2qSuS2Hd7oJqRzc5fcSSkuv6xSbLhoNaqA5cp4O9pS4_MURmArU5Sk-LeIjOuG5xVHuQvCljX4DfDk0LzogZL3bGZzntYGiSnPe6UERDje_lzenmUFWUOglMr6CFHPvE83ihQ"),
      localStorage.setItem("userName", username),
      this.loginForm.reset();
      this.router.navigate(["home"]);
    } else {
      console.log('Form không hợp lệ! Vui lòng kiểm tra lại thông tin đăng nhập.');
    }
  }
}
