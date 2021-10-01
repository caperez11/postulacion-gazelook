import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public title: string = `Chose your lenguague below or in your browser`;
  public idiomas: string [] = ['en', 'fr', 'es','de','it', 'pt']

  constructor() { }

  ngOnInit(): void {
  }

}
