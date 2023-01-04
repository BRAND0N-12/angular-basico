import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { HeroeComponente } from './heroe.component';

@NgModule({
    declarations: [
        HeroeComponente,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}