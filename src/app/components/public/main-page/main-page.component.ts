import { Component, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/interfaces/card-info';

type SelectionData = {
  selectedService: CardInfo | undefined;
  horario: string | undefined;
};

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  cards: Array<CardInfo> = [
    { title: 'Servicio 1', subtitle: '$150.000.00' },
    { title: 'Servicio 2', subtitle: '$250.000.00' },
    { title: 'Servicio 3', subtitle: '$275.000.00' },
    { title: 'Servicio 4', subtitle: '$300.000.00' },
  ];

  horarios: Array<{ nombre: string; codigo: string }> = [
    { nombre: 'Jornada Diurna', codigo: 'D' },
    { nombre: 'Jornada Tarde', codigo: 'T' },
    { nombre: 'Jornada Nocturna', codigo: 'N' },
  ];

  selectDisabled: boolean = true;
  selectedCardIdx = -1;
  selectedHorarioIdx = -1;
  stage = 0;

  data: SelectionData = {
    selectedService:  undefined,
    horario: undefined,
  };

  onCardClick(idx: number) {
    this.selectedCardIdx = idx;
    this.selectDisabled = this.selectedCardIdx == -1;
  }

  onHorarioClick(idx: number) {
    this.selectedHorarioIdx = idx;
    this.selectDisabled = this.selectedHorarioIdx == -1;
  }

  next() {
    this.stage++;
    this.selectDisabled = true;
  }

  previous() {
    this.stage--;
    if (this.stage < 0) this.stage = 6;
    this.selectDisabled = true;
  }

  validateSelection(): void {
    this.data.selectedService = this.cards[this.selectedCardIdx];
    this.data.horario = this.horarios[this.selectedHorarioIdx].codigo;
  }

  ngOnInit(): void {}
}
