import { Component } from '@angular/core';

@Component({
  selector: 'app-cp-pai',
  templateUrl: './cp-pai.component.html',
  styleUrls: ['./cp-pai.component.scss']
})
export class CpPaiComponent {

  public sortNumber: number = 0;
  
  public getNumber(nb :number){
    this.sortNumber =  nb;
  }
}
