import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidation } from '../../services/validation';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  registerForm: FormGroup;
  
    constructor(private _fb: FormBuilder, private userService: UserService,
      private router: Router
    ) {
      this.registerForm = this._fb.group({
        userName: ['', Validators.required],
        email: ['',  CustomValidation.requiredValidEmail],
        password: ['', Validators.required]
      }
      );
    }
    
    ngOnInit() {
    }
  
    onFormSubmit() {
      if(this.registerForm.valid) {
        this.userService.registerUser(this.registerForm.value).subscribe({
          next: (val: any) => {
            alert('User added successfully');
            this.registerForm.reset;
            this.router.navigate(["login"]);
          },
          error: (err: any) => {
            alert('something went wrong');
          },
        });
      }
  
    }

}
