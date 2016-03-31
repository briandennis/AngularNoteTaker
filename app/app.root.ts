import {Component} from 'angular2/core';
import {Note} from './app.note';

@Component({
  selector: 'my-app',
  template: `

    <h1>My First Angular 2 App</h1>
    <div class='note' *ngFor="#note of notes">
      <p> {{note.text}} </p>
      <button (click)="deleteNote(note)">Delete</button>
    </div>



  `
})
export class RootComponent{
  notes: Note[] = [{text: 'this is my text!', color: 0},{text: 'this is my other text!', color: 0}];

  deleteNote(note: Note){
    this.notes.splice(this.notes.indexOf(note),1);
  }
}
