import { Component, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  public data: Date = new Date();
  public nome: string = "Fulano de Tal";
  public valor: number = 12345.67;
  public palavra: string = "";

}

export class InvertePipe implements PipeTransform {

  transform(value: string): string {
    let invertida = value.split("").reverse().join("");
    if (invertida === value && value != "" && value.length > 1)
      return invertida + ' (palíndromo)';
    return invertida;
  }

}