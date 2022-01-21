import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  gameList = [
    { id: 1, name: 'Pokemon Diamant', console: 'DS' },
    { id: 2, name: 'Mario Bros', console: 'WII' },
    { id: 3, name: 'Super smash bros ultimate', console: 'Switch' },
    { id: 4, name: 'Valorant', console: 'PC' },
  ];
  showDetails(game: GamesComponent): void {
    console.log(game);
  }
}
