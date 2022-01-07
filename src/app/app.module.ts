import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { BasicGameInfosComponent } from './src/app/game/components/basic-game-infos/basic-game-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicGameInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
