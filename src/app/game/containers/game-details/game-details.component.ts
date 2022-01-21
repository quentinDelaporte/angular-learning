import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) {}
  gameList = [
    { id: 1, name: 'Pokemon Diamant', console: 'DS' },
    { id: 2, name: 'Mario Bros', console: 'WII' },
    { id: 3, name: 'Super smash bros ultimate', console: 'Switch' },
    { id: 4, name: 'Valorant', console: 'PC' },
  ];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
  }
}
