import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit {

  public medicines: Array<any> = [];
  public medicine = {
    name: "",
    price: 0,
  }

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.medicines = this.service.getLista();
  }

  public getMedicine(medSelected: any) {
    this.getMedicine = medSelected;
    return this.service.getMedicine(this.medicine);
  }
}

