import { Injectable } from '@angular/core';
import * as paths from '../../static/paths.json';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  root = paths.default;
  images = paths.default.images;
  endpoint = paths.default.endpoint;
}
