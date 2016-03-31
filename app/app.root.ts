import {Component} from 'angular2/core';
import {Note} from './app.note';

@Component({
  selector: 'my-app',
  template: `

    <h1>My First Angular 2 App</h1>
    <div class='note' *ngFor="#note of notes">
      <div class='textRow'>
        <p> {{note.text}} </p>
      </div>
      <div class='buttonsRow'>
        <button (click)="edit(note)" class='noteButton editButton'><i class='fa fa-pencil'></i></button>
        <button (click)="deleteNote(note)" class='noteButton deleteButton'><i class='fa fa-trash'></i></button>
      </div>
    </div>



  `
})
export class RootComponent{
  notes: Note[] = [{text: 'this is my text!', color: 0},{text: 'this is my other text!', color: 0}];

  deleteNote(note: Note){
    this.notes.splice(this.notes.indexOf(note),1);
  }
  edit(note: Note){
    var newText = window.prompt();
    this.notes[this.notes.indexOf(note)].text = newText;
  }
}
