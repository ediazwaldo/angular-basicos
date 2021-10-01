import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Sapiderman', 'Superman', 'Mujer maravilla', 'Tor'];

  hBorrado: string= '';
  

  borrarHeroe(){
    console.log('Borrando...');
    this.hBorrado = this.heroes.shift() || '';
  }

}
