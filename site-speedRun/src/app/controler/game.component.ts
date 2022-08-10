import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: '../view/game/game.component.html',
  styleUrls: ['../view/game/game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  public runs: Array<any> = new Array;
  

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.runs?.push({
      name: "Pedro",
      time: "1000ms",
    });
    this.runs?.push({
      name: "Carlos",
      time: "1003ms",
    });
  }

  openRunDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {}

}