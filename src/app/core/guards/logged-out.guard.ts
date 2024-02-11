import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const loggedOutGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router)
  const  token: string | null = localStorage.getItem('token')

  if(!token) {
    return true;
  }

  router.navigate(['/home'])
  return false;
};
