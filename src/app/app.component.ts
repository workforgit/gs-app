import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(private authService : AuthService){

 }
  isAuthenticated = this.authService.isAuthenticated();
  title = 'gs-app';
  

}
