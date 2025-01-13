import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFailed = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (this.authenticate(email, password)) {
        this.router.navigate(['/dashboard']);  // Redirige al dashboard
      } else {
        this.loginFailed = true;  // Si las credenciales son incorrectas
      }
    }
  }

  authenticate(email: string, password: string): boolean {
    const dummyUser = { email: 'test@floralens.com', password: 'password123' };  // Simulación de autenticación
    return email === dummyUser.email && password === dummyUser.password;
  }
}
