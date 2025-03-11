import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  ngOnInit(): void {
    
  }

  constructor(private router: Router, private userService: UserService) {}

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
