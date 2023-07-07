import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {


  public valor: boolean = true;

  public urlImg(): string {
      return "https://www.pngplay.com/wp-content/uploads/12/Police-Car-Background-PNG-Clip-Art-Image.png"; 
  }

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
      this.urlImg;
    }, 500);
  }
}