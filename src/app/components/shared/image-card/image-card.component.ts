import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() title : string = "Title";
  @Input() subtitle: string = "Subtitle";
  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
