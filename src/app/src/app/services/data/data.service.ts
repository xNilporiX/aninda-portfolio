import { Injectable } from '@angular/core';
import data from '../../en.json';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  public dataContent: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor() {}

  getData() {
    this.dataContent.next(data);
  }
}
