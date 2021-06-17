import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from '../guards/auth.guard';

const cursosRoutes: Routes = [
    { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard] },
    { path: 'curso/:id', component: CursoDetalheComponent, canActivate: [AuthGuard] },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}