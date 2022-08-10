import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Usuario, Usuarios } from '../model/usuario';

@Component({
  selector: 'app-user',
  templateUrl: '../view/user/user.component.html',
  styleUrls: ['../view/user/user.component.scss']
})
export class UserComponent implements OnInit {

  user: Usuario | undefined;
  usuarios: Usuarios = new Usuarios();
  userId: any;

  background_image = "https://img.freepik.com/free-vector/games-time-neon-text-with-gamepad_1262-15457.jpg?w=2000";

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userId = params['user-id'];
    });
    this.user = this.usuarios.getUser(this.userId);
  }

  isAusente(){
    return this.user?.state.lastTime != null
  }

}
