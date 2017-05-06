import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddCardComponent } from './odd-card/odd-card.component';
import { EvenCardComponent } from './even-card/even-card.component';
import { DisplayComponent } from './display/display.component';

import { GameService } from './service/game.service';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddCardComponent,
    EvenCardComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
