import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit {

  constructor() { }

  @ViewChild('optionsContainer') optionElements : any;

  @Output() backClicked = new EventEmitter<void>();
  @Output() selectClicked = new EventEmitter<void>();

  @Input() subtitle = "subtitle";
  @Input() title = "title";
  @Input() selectDisabled = false;

  ngOnInit(): void {
  }

  onBackButtonClicked() {
    this.backClicked.emit();
  }

  onSelectButtonClicked() {
    this.selectClicked.emit();
  }

}
