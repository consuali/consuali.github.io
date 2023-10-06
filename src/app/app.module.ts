import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
    IonicModule.forRoot(),
  ], exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
