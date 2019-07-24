import { Component, OnInit } from '@angular/core';
import {CommunicateService} from '../communicate.service';
import { fromEvent, interval, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-color-one',
  templateUrl: './color-one.component.html',
  styleUrls: ['./color-one.component.css']
})
export class ColorOneComponent implements OnInit {
color = 'white';
  constructor(private clr: CommunicateService) { }
  clicks = fromEvent(document, 'click');
  timer = interval(100);
  clicksOrTimer = merge(this.clicks, this.timer);
  positions = this.clicks.pipe(map((ev: any) => ev.clientX));
  

  ngOnInit() {
    this.clr.currentColor.subscribe(color => this.color = color);
   }
clickBtn() {
  this.color = 'blue';
  // this.clicksOrTimer.subscribe((x: any) => console.log(x));
  this.positions.subscribe((x: any) => console.log(x));
  return this.clr.changeColor(this.color);

}

}

