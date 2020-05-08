import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { CadastroRouter } from '../routers/cadastro.router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(CadastroRouter)
  ]
})
export class CadastroModule { }
