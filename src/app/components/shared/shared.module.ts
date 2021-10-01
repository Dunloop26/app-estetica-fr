import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SelectOptionComponent } from './select-option/select-option.component';
import { ImageCardComponent } from './image-card/image-card.component';

@NgModule({
  declarations: [HeaderComponent, SelectOptionComponent, ImageCardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SelectOptionComponent, ImageCardComponent],
})
export class SharedModule {}
