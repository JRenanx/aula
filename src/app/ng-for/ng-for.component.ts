import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {

  descricao: string = "";
  url: string = "";
  px!: number;

  public listImg: any = [];

  public addImg(){
    this.listImg.push({descricao: this.descricao , url: this.url, px: this.px});
  }
}
