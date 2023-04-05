import { Component }  from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',

})
export class AppComponent {

  nombre: string = "";
  cantidadCaracteres: number = 0;

  contar() {
    this.cantidadCaracteres = this.nombre.length;
    alert(this.cantidadCaracteres);
    console.log("variable: "+ this.cantidadCaracteres);
  }

}
