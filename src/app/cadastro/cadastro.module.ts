import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { CadastroRouter } from '../routers/cadastro.router';

import { ReactiveFormsModule } from '@angular/forms'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(CadastroRouter)
  ]
})
export class CadastroModule { }
