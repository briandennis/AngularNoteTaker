import {Component} from 'angular2/core';
import {Note} from './app.note';

@Component({
  selector: 'my-app',
  directives: [Note],
  template: `

    <h1>My First Angular 2 App</h1>
    <note></note>



  `
})
export class RootComponent{
  mainNotes: Note[] = [new Note("OH MY GOD!", 'Brian')];
}
