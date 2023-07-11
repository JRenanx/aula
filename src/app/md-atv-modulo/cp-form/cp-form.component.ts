import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent {
  public name!: string ;
  public price!: number;


  constructor(private service: ServicesService) { }

  public addMedicine() {
    const newMedicine = { nome: this.name, preco: this.price };
    return this.service.add(newMedicine);
  }

  public selectedMedicne() {
    const medicine = this.service.showMedicine();
    this.name = medicine.nome;
    this.price = medicine.preco;
  }
}