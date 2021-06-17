import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
//import { RouterModule } from '@angular/router';
    
import { CursoNaoEncontradoComponent } from './../curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './../curso-detalhe/curso-detalhe.component';

import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
    

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
        //RouterModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosService]
})
export class CursosModule {}