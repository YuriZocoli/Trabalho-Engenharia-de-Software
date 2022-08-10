import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: '../view/home/home.component.html',
  styleUrls: ['../view/home/home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string | undefined;
  public games: Array<any> = new Array;
  private routeSub: Subscription | undefined;
  private gameSub: Subscription | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.games?.push({
      background_image: "https://img.freepik.com/vetores-gratis/astronauta-bonito-relaxamento-frio-na-ilustracao-do-icone-do-vetor-dos-desenhos-animados-do-controlador-de-jogo-conceito-de-icone-de-ciencia-de-tecnologia-isolado-vetor-premium-estilo-flat-cartoon_138676-3717.jpg?w=2000",
      name: "Jogo",
    });
    this.games?.push({
      background_image: "https://static8.depositphotos.com/1311503/875/i/600/depositphotos_8758735-stock-photo-gamer-and-controller.jpg",
      name: "Jogo 2",
    });
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