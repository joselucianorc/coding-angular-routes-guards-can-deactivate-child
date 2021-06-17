import { Injectable,  EventEmitter, Output } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  @Output() mostrarMenuEmitter = new EventEmitter();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {      
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
    
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
