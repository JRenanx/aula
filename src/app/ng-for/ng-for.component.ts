import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {

  acende: boolean = false;


  contador: number = 0;
  nomeSelecionado: string = "";
  idadeSelecionado: number = 0;

  public listaPessoas: any = [];

  public addPessoa(){
    this.listaPessoas.push({nome: 'Pessoa ' + this.contador, idade: this.contador + 30});
    this.contador ++;
    this.nomeSelecionado = '';
  }

  public removePessoa(){
    this.listaPessoas.pop();
    this.contador --;
    this.nomeSelecionado = '';
  }

  public clickPessoa(p: any){
    console.log(p);
    this.nomeSelecionado = p.nome;
    this.idadeSelecionado = p.idade;
  }
}
