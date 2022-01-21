import { Component, Input } from '@angular/core';
import { Game } from '../../containers/games/models/game';

@Component({
  selector: 'app-basic-game-infos',
  templateUrl: './basic-game-infos.component.html',
  styleUrls: ['./basic-game-infos.component.scss'],
})
export class BasicGameInfosComponent {
  @Input() game!: Game;
}
