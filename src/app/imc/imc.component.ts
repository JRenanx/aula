import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent {
  public nome: string = "";
  public sexo: string = "";
  public peso: number = 0;
  public altura: number = 0;


  public calculaImc() {
    imc = this.peso / this.altura ** 2;
    const classificacao = this.classificaIMC(imc);
    const resultado = `Nome: ${this.nome}<br/>
                       Sexo: ${this.sexo}<br/>
                       IMC: ${imc.toFixed(2)}<br/>
                       Classificação: ${classificacao}`;
    var imc = this.peso / (this.altura * this.altura);
  }
  classificaIMC(imc: number): string {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 25) {
      return 'Peso normal';
    } else if (imc < 30) {
      return 'Sobrepeso';
    } else if (imc < 35) {
      return 'Obesidade grau 1';
    } else if (imc < 40) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  }
}

