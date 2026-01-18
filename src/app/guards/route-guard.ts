import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  const token  = sessionStorage.getItem('token');
  const role  = sessionStorage.getItem('role');
  if(token && role == 'user'){
    return true;
  }else{
    alert("Unauthorised access...Please Login..!!!")
    setTimeout(() => {
      router.navigateByUrl('/login')
    },100)
    return false
  }
};
