import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/interfaces/card-info';

type SelectionData = {selectedService: CardInfo | undefined, horario: "D" | "N" | "T"}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }


  cards : Array<CardInfo> = [
    {title: "Servicio 1", subtitle: "$150.000.00"},
    {title: "Servicio 2", subtitle: "$250.000.00"},
    {title: "Servicio 3", subtitle: "$275.000.00"},
    {title: "Servicio 4", subtitle: "$300.000.00"},
  ]

  selectDisabled: boolean = true;
  selectedIdx = -1;

  data : SelectionData = {
    selectedService: undefined,
    horario: "D"
  }

  onCardClick (idx : number) {
    this.selectedIdx = idx;
    this.selectDisabled = this.selectedIdx == -1;
  }

  validateSelection() : void {
    this.data.selectedService = this.cards[this.selectedIdx]
  }

  ngOnInit(): void {
  }

}
