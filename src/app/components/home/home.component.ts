import { Component, OnInit } from '@angular/core';
import {StaticService} from '../../services/static.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private readonly Wineo = this.statics.images.logoBig;

  constructor(private statics: StaticService) { }

  ngOnInit() {
  }

}
