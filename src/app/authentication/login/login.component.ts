import { ChangeDetectionStrategy,Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidation } from '../../services/validation';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  public data: any;

  constructor(private _fb: FormBuilder,private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this._fb.group({
      email: ['', CustomValidation.requiredValidEmail],
      password: ['', Validators.required]
    }
    );
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if(this.loginForm.valid) {
      this.userService.getUsers().subscribe(val => {
        const user = val.find((u:any)=>{
          return u.email === this.loginForm.value.email && u.password === this.loginForm.value.password
        });
        if(user) {
          const token = btoa(user.userName);
          const data = {user, 'token': token};
          localStorage.setItem('token', token);
          alert("Login Success");
          this.loginForm.reset;
          this.router.navigate(['/event-list', user.id]);
        }
        else {
          alert("user not found");
        }
        
      })

    
    }

  }

}


