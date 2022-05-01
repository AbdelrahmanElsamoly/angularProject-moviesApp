import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  islogIn: boolean = false;
  userr: any;
  constructor(private _AuthService: AuthService) {}

  ngOnInit(): void {
    this._AuthService.user.subscribe(() => {
      if (this._AuthService.user.getValue() != null) {
        this.islogIn = true;

        this.userr = this._AuthService.user.getValue();
      } else {
        this.islogIn = false;
      }
    });
  }
  menu(): void {}
  logout() {
    this._AuthService.logout();
  }
}
