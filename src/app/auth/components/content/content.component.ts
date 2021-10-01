import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public title: string = 'First Time?';
  public messageWebsite: string =`VISIT OUR WEBSITE AND SHARE OUR PROPOSAL
                                  TO ACHIEVE A FAIR AND PARTICIPATORY WORLD`;
  public messageSuscription: string = `I wish to subscribe without visiting`;

  constructor() { }

  ngOnInit(): void {
  }

}
