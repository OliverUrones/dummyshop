import { Component } from '@angular/core';
import {AuthFacade} from "../../../../facades/auth.facade";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authFacade: AuthFacade) {}

  logOut() {
    console.warn("Cierro sesión.")
    this.authFacade.logout()
  }
}
