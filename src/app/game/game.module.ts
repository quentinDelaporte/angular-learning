import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './game-details/game-details.component';


@NgModule({
  declarations: [
    GamesComponent,
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
