import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDelete : EventEmitter<string> = new EventEmitter();
  //onDelete : EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: "Trunk",
    power: 10
  }];

  onDeleteCharacter(id: string) : void {
    this.onDelete.emit(id);
  }

}
