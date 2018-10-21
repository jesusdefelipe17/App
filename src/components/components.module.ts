import { NgModule } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta';
import { BarrabusquedaComponent } from './barrabusqueda/barrabusqueda';


@NgModule({
	declarations: [TarjetaComponent,
    BarrabusquedaComponent],
	imports: [],
	exports: [TarjetaComponent,
    BarrabusquedaComponent]
})
export class ComponentsModule {}
