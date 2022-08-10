import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Estrategia, Luta, Terror } from '../model/decorators';
import { Jogo, Jogos } from '../model/jogo';
import { Run, Runs } from '../model/run';
import { Usuarios } from '../model/usuario';

@Component({
  selector: 'app-game',
  templateUrl: '../view/game/game.component.html',
  styleUrls: ['../view/game/game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  
  public runs = new Runs;
  public jogos: Jogos = new Jogos;
  public game: any | undefined;
  public gameId: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['game-id'];
    });
    this.game = this.jogos.getJogo(this.gameId);
  }

  openRunDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {}

}