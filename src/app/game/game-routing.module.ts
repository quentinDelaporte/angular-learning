import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsComponent } from './containers/game-details/game-details.component';
import { GamesComponent } from './containers/games/games.component';

const routes: Routes = [
  { path: '', component: GamesComponent, pathMatch: 'full' },
  { path: ':id', component: GameDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
