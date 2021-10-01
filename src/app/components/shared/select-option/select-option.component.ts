import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit {

  constructor() { }

  @Output() backClicked = new EventEmitter<void>();
  @Output() selectClicked = new EventEmitter<void>();

  @Input() subtitle = "subtitle";
  @Input() title = "title";

  ngOnInit(): void {
  }

  onBackButtonClicked() {
    this.backClicked.emit();
  }

  onSelectButtonClicked() {
    this.selectClicked.emit();
  }

}
