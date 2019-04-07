import { Component, OnInit } from '@angular/core';
import * as paths from '../../../static/paths.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private readonly Logo = paths.default.images.logoSmall;

  constructor() {
  }

  ngOnInit() {
  }
}
