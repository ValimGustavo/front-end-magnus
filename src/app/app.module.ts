import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule } from '@angular/router'
// import { CadastroRouter } from './routers/cadastro.router'
// import { indexRouter } from './routers/index'
import { CadastroModule } from './cadastro/cadastro.module';
import { GraphQLModule } from './graphql.module';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CadastroModule,
 
    RouterModule.forRoot([]),
 
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
