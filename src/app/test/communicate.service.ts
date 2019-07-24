import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
private colorSourse = new BehaviorSubject('red');
currentColor = this.colorSourse.asObservable();
  constructor() { }
  changeColor(color: string ){
    this.colorSourse.next(color);
  }
}
