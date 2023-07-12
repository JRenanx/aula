import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit {

  public list: Array<{ name: string, price: number }> = [];

  constructor(private service: ServicesService) { }

  showMedicine(medicamento: any) {
    this.service.getMedcine(medicamento)
  }
  ngOnInit(): void {
    this.list = this.service.getList();
  }
}

