import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';
import { GameDetailsComponent } from '../game-details/game-details.component';



@NgModule({
  declarations: [
    GamesComponent,
    GameDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
