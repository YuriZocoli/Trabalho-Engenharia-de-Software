import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Jogo, Jogos } from '../model/jogo';

@Component({
  selector: 'app-home',
  templateUrl: '../view/home/home.component.html',
  styleUrls: ['../view/home/home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string | undefined;
  public games: Jogos = new Jogos();
  private routeSub: Subscription | undefined;
  private gameSub: Subscription | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}