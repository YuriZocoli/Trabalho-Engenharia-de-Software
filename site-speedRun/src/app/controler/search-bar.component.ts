import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: '../view/search-bar/search-bar.component.html',
  styleUrls: ['../view/search-bar/search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  user: any ={
    name: "Matheus",
    id: 1
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.router.navigate(['search',form.value.search]);
  }

  openUserDatails(){
    this.router.navigate(['user', this.user.id]);
  }

}
