import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  public emitEvent = new EventEmitter();


  private list: Array<{ name: string, price: number }> = [];

  private medicine = {
    name: "",
    price: null
  }


  public getList() {
    return this.list;
  }


  public getMedcine(medicine: any) {
    this.medicine.name = medicine.name;
    this.medicine.price = medicine.price;
    this.emitEvent.emit(this.medicine)
    console.log(medicine)
  }

  public add(valor: any) {
    this.list.push(valor);
  }
}