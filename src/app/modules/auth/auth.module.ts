import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule],
  exports: [LoginFormComponent],
})
export class AuthModule {}
