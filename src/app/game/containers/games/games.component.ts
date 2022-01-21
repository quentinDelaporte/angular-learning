import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from './models/game';

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
  constructor(private router: Router) {}
  showDetails(game: Game): void {
    this.router.navigate(['./games/' + game.id]);
  }
}
