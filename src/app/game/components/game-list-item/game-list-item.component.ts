import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GamesComponent } from '../../containers/games/games.component';

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss'],
})
export class GameListItemComponent {
  @Input() game: any;
  @Output() onGameClicked: EventEmitter<GamesComponent> = new EventEmitter();

  selectGame(game: GamesComponent): void {
    console.log(game);
    this.onGameClicked.emit(game);
  }


}
