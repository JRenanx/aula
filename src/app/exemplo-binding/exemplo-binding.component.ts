import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss']
})
export class ExemploBindingComponent {

  public n1: number = 10;
  public n2: number = 15;

  public texto :string = "";

  public incrementa5() {
    this.n1 += 5;
    this.n2 += 5;
  }

  public decrementa5() {
    this.n1 -= 5;
    this.n2 -= 5;
  }

  public urlImg(): string {
    if(this.n1 + this.n2 > 50){
      return "https://static.poder360.com.br/2022/08/macaco-848x477.jpg";
    }else{
      return "https://i0.statig.com.br/bancodeimagens/by/nu/8w/bynu8wj7239xajxe5y6cg952y.jpg";
    }
  }
}
