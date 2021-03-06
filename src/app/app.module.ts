import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { CursoService } from './curso/servico/curso.service';
import { HttpClientModule } from '@angular/common/http';
import { CursomanterComponent } from './curso/cursomanter/cursomanter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursoComponent,
    LayoutComponent,
    CursomanterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
