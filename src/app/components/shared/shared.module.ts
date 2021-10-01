import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SelectOptionComponent } from './select-option/select-option.component';

@NgModule({
  declarations: [HeaderComponent, SelectOptionComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SelectOptionComponent],
})
export class SharedModule {}
