import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddCardComponent } from './odd-card/odd-card.component';
import { EvenCardComponent } from './even-card/even-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddCardComponent,
    EvenCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
