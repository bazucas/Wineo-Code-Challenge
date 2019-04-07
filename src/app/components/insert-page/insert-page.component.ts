import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Bottle} from '../../models/bottle';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-insert-page',
  templateUrl: './insert-page.component.html',
  styleUrls: ['./insert-page.component.css']
})
export class InsertPageComponent implements OnInit, OnDestroy {

  apiServiceSubs: Subscription;

  submitted = false;
  bottleInsertionForm = this.formBuilder.group({
    name: ['', Validators.required],
    vineyard: ['', Validators.required],
    location: ['', Validators.required],
    grape: ['', Validators.required],
    year: ['', Validators.required],
    price: ['', Validators.required],
    varieties: ['', Validators.required],
    quantity: ['', Validators.required],
    image: ['', Validators.required],
    sweetness: [''],
    acidity: [''],
    tannin: [''],
    alcohol: [''],
    body: [''],
    sulphites: ['True'],
    rate: [''],
    notes: [''],
  });

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.apiServiceSubs) {
      this.apiServiceSubs.unsubscribe();
    }
  }

  get f() { return this.bottleInsertionForm.controls; }

  persistNewBottle() {
    this.submitted = true;
    if (this.bottleInsertionForm.invalid) { return; }
    const bottle = new Bottle(this.bottleInsertionForm.value);
    this.apiServiceSubs = this.apiService.setNewObject<Bottle>('bottles', bottle).subscribe(
      res => {},
      error => {},
      () => { this.router.navigate(['/list']); }
    );
  }
}
