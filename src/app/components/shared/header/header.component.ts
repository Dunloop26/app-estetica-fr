import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  @Input() headerOnly : boolean = false;

  ngOnInit(): void {
  }

  onLogOutClicked() {
    this.auth.logOut();
    this.router.navigateByUrl('/');
    console.log('Login out!', localStorage.getItem('token'))
  }
}
