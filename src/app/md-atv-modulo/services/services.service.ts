import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public emitEvent = new EventEmitter();
  private medicine: Array<any> = [];
  private medSelected: any;

  constructor() { }

  public getLista() {
    return this.medicine;
  }

  public add(medicamento: any) {
    this.medicine.push(medicamento);
    return this.medicine;
  }

  public getMedicine(medicament: any) {
    this.getMedicine = medicament;
    return this.getMedicine;
  }

  public showMedicine() {
    return this.medSelected;
  }
}