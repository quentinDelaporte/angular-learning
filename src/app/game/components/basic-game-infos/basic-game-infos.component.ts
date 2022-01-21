import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-game-infos',
  templateUrl: './basic-game-infos.component.html',
  styleUrls: ['./basic-game-infos.component.scss'],
})
export class BasicGameInfosComponent {
  @Input() id: any;
  @Input() console: any;
  @Input() name: any;
}
