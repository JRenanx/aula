import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent implements OnInit {
  
  public medList = {
    name: "",
    price: null
  }

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: any) => this.medList = res
    })
  }
  public addItem(valor: any) {
    let list = {
      name: valor.name,
      price: valor.price
    }
    this.medList = {
      name: "",
      price: null
    }
    return this.service.add(list)
  }

}