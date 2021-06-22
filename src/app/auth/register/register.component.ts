import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 
  registerForm!: FormGroup; 
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService  
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });   
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.register(
      this.f.name.value, 
      this.f.email.value, 
      this.f.password.value )
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        this.router.navigate(['/login'])        
        },
        error => {
          console.log(error);
        }
      )


  }


}
