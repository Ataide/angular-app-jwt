import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../services/auth.service';
import { SharedUserService } from '../services/shared-user.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private sharedUser: SharedUserService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) { }

  editForm!: FormGroup; 

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id:[this.sharedUser.userToEdit.id],
      name: [this.sharedUser.userToEdit.name, Validators.required],
      email: [this.sharedUser.userToEdit.email, Validators.email],
      password: [this.sharedUser.userToEdit.password, Validators.required]
    });   
  
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    if (this.editForm.invalid) {
      return;
    }
    this.userService.update(  
      this.f.id.value,    
      this.f.name.value, 
      this.f.email.value, 
      this.f.password.value )
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        this.router.navigate(['/users'])        
        },
        error => {
          console.log(error);
        }
      )
  }

  delete(id: number) {
    if(confirm('Deseja escluir o item?')) {
      this.userService.delete(id).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/users']);
        },
        error => {
          console.log(error)
        }
      )
    }    
  }

  cancelar() {
    this.router.navigate(['/users']);
  }

}
