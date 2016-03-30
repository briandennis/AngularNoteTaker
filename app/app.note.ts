import {Component} from 'angular2/core';


@Component({
  selector: 'note',
  template: `<div class='note'>
              <h2>This is a note!</h2>
             </div>

  `
})
export class Note {

  noteText: string;
  tmpName: string;

  constructor(text: string, name: string){
    this.noteText = text;
    this.tmpName = name;
  }
}
