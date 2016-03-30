import {Component} from 'angular2/core';


@Component({
  selector: 'note',
  template: `<div class='note'>
              <h2>This is a note!</h2>
              <h3> {{noteText}} </h3>
              <h4> Authored by {{tmpName}} </h4>
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
