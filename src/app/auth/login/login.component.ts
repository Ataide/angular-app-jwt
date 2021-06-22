import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(       
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,    
    ) {
      if(this.authService.loggedUserValue) {
        this.router.navigate(['/users'])
      }
     }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }
  get f() { return this.loginForm.controls; }

  onSubmit(): void {

    if(this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/users'])
        },
        error => {
          console.log(error)
        }
      )

  }
  

}
