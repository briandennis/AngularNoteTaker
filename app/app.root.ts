import {Component} from 'angular2/core';
import {Note} from './app.note';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <h1>My First Angular 2 App</h1>
    </header>
    <div class='noteBoard'>
      <div *ngFor="#note of notes" class='note {{note.priority}}'>
        <div class='textRow'>
          <p> {{note.text}} </p>
        </div>
        <div class='buttonsRow'>
        <button (click)="changePriority(note)" class='noteButton priorityButton'><i class='fa fa-wrench'></i></button>
          <button (click)="edit(note)" class='noteButton editButton'><i class='fa fa-pencil'></i></button>
          <button (click)="deleteNote(note)" class='noteButton deleteButton'><i class='fa fa-trash'></i></button>
        </div>
      </div>
    </div>



  `
})
export class RootComponent{
  notes: Note[] = [{text: 'this is my text!', priority: "low"},{text: 'this is my other text!', priority: "low"}];

  deleteNote(note: Note){
    this.notes.splice(this.notes.indexOf(note),1);
  }
  edit(note: Note){
    var newText = window.prompt();
    this.notes[this.notes.indexOf(note)].text = newText;
  }
}
