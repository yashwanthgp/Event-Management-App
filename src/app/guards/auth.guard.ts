import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
   const token = localStorage.getItem("token");
  
  return token != null ? true: false;
  
};
