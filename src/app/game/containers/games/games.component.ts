import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  gameList = [
    { id: 1, name: 'POKEMON Diamant', console: 'DS' },
    { id: 1, name: 'POKEMON Perle', console: 'DS' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
