import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {

  containerAmarelo: boolean = false;
  containerVermelho: boolean = false;

  public clickAmarelo() {
    this.containerAmarelo = !this.containerAmarelo;
  }
  public clickVermelho() {
    this.containerVermelho = !this.containerVermelho;
  }
}

