import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Bottle} from '../../models/bottle';
import {Subscription} from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnDestroy {

  apiServiceSubs: Subscription;
  allBottles: Bottle[];
  dialogBottle: Bottle;
  displayDialog: boolean;
  sortOptions: {label: string, value: string}[] = [];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  comment = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiServiceSubs = this.apiService.getAllObjects<Bottle[]>('bottles').subscribe(
      res => { this.allBottles = res; },
      error => {},
      () => {}
    );

    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Name', value: 'name'},
      {label: 'Vineyard', value: 'vineyard'},
      {label: 'Grape', value: 'grape'}
    ];
  }

  ngOnDestroy() {
    if (this.apiServiceSubs) {
      this.apiServiceSubs.unsubscribe();
    }
  }

  selectedBottle(event: Event, bottle: Bottle) {
    this.dialogBottle = bottle;
    this.displayDialog = true;
    event.preventDefault();
  }

  addBottle(bottle: Bottle) {
    const patchObj = {quantity: (+bottle.quantity + 1).toString()};
    this.apiService.updateObject<Bottle>('bottles', bottle.id, patchObj as Bottle).subscribe(
      res => {},
      error => {},
      () => { bottle.quantity = (+bottle.quantity + 1).toString(); }
    );
  }

  removeBottle(bottle: Bottle) {
    const patchObj = {id: bottle.id, quantity: (+bottle.quantity - 1).toString()};
    this.apiService.updateObject<Bottle>('bottles', bottle.id, patchObj as Bottle).subscribe(
      res => {},
      error => {},
      () => { bottle.quantity = (+bottle.quantity - 1).toString(); }
    );
  }

  deleteBottle(bottle: Bottle) {
    this.apiService.deleteObject<Bottle>('bottles', bottle.id).subscribe(
      res => {},
      error => {},
      () => { _.remove(this.allBottles, bot => bot.id === bottle.id); }
    );
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  addComment(bottle: any) {
    const comments = _.cloneDeep(bottle.comments);
    comments.push(this.comment);
    const patchObj = {comments};
    this.apiService.updateObject<Bottle>('bottles', bottle.id, patchObj as Bottle).subscribe(
      res => {},
      error => {},
      () => { bottle.comments.push(this.comment); }
    );
  }
}
