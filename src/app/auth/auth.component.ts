import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { User } from './../classes/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private authservice : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.authservice.signOut();
    this.showMsg = false;
  }
  showMsg : boolean ;
  errMsg = "login or password incorrect !!";
  user = new User();
  checkPwd(): void {
   if(this.user.id == "ad" && this.user.password == "ad")
    {
      this.authservice.signIn(this.user)
      this.router.navigate(['/Client'])
    }
   else{
    this.user.id = "";
    this.user.password = "";
    this.showMsg = true
   }
     
  }
}
