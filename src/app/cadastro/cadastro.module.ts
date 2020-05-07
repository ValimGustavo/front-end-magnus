import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { CadastroRouter } from '../routers/cadastro.router';
import { DadosComponent } from './dados/dados.component'



@NgModule({
  declarations: [DadosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CadastroRouter)
  ]
})
export class CadastroModule { }
