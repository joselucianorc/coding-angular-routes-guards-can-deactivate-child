import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'coding-angular-routes-login-without-menu';

  mostrarMenu: boolean = false;

  constructor(private AuthService: AuthService) {
  }
  
  ngOnInit() {
    this.AuthService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

  }
}
