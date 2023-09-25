import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string = 'Juan Barrera';
  public counter : number = 10;

  modifyCounter(value : number) : void {
    this.counter += value;
  }
  resetCounter() : void {
    this.counter = 10;
  }
}
