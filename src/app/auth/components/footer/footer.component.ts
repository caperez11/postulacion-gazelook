import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Data } from '../../interfaces/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public data: Data | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getData().subscribe(res => {
      this.data = res[0];
    })
  }

}
