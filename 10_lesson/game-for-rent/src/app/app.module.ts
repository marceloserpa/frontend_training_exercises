import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameListComponent } from './game/game-list/game-list.component';

import { GameService } from './game/game.service';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameStartComponent } from './game/game-start/game-start.component';
import { RentGameListComponent } from './rent/rent-game-list/rent-game-list.component';

import { RentGameService } from './rent/rent-game.service';


const appRoutes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'games', component: GameStartComponent,     
    children: [
      { path: ':id', component: GameDetailComponent }
    ]
  },
  { path: 'rent', component: RentGameListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameListComponent,
    GameDetailComponent,
    GameStartComponent,
    RentGameListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GameService, RentGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
