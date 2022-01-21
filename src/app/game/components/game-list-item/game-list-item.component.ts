import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GamesComponent } from '../../containers/games/games.component';
import { Game } from '../../containers/games/models/game';

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss'],
})
export class GameListItemComponent {
  @Input()
  game!: Game;
  @Output() onGameClicked: EventEmitter<Game> = new EventEmitter();

  selectGame(game: Game): void {
    this.onGameClicked.emit(game);
  }
}
