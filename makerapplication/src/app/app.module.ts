
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowriceComponent } from './prodrice/showrice/showrice.component';
import { ShowsugarComponent } from './prodsugar/showsugar/showsugar.component';
import { ShowwheatComponent } from './prodwheat/showwheat/showwheat.component';
import { AllapComponent } from './allap/allap.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowriceComponent,
    ShowsugarComponent,
    ShowwheatComponent,
    AllapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
