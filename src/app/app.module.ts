import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule } from '@angular/router'
import { CadastroRouter } from './routers/cadastro.router'
import { indexRouter } from './routers/index'
import { CadastroModule } from './cadastro/cadastro.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CadastroModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
