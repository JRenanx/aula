import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent {

  public nome!: string;
  public peso!: number;
  public sexo!: string;
  public altura!: number;
  public imc!: number;
  public resultado!: string;

  public camposPreenchidos(): boolean {
    return this.nome == "" || this.nome == null ||
      this.peso == null || this.peso == 0 ||
      this.altura == null || this.altura == 0 ||
      this.sexo == undefined;
  }

  public avaliar() {
    this.imc = this.peso / (this.altura ** 2);
    if (this.sexo == "M" && this.imc < 19 || this.sexo == "F" && this.imc < 18) {
      this.resultado = 'Você está está abaixo do peso ideal'
    } else if (this.sexo == "M" && this.imc < 25 || this.sexo == "F" && this.imc < 24) {
      this.resultado = 'Você está está no ideal'
    } else if (this.sexo == "M" && this.imc < 32 || this.sexo == "F" && this.imc < 29) {
      this.resultado = 'Você está está acima do ideal'
    } else {
      this.resultado = 'Você está está em grau de obesidade'
    }
  }

}
