System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RootComponent = (function () {
                function RootComponent() {
                    this.notes = [{ text: 'this is my text!', priority: "low" }, { text: 'this is my other text!', priority: "low" }];
                }
                RootComponent.prototype.deleteNote = function (note) {
                    this.notes.splice(this.notes.indexOf(note), 1);
                };
                RootComponent.prototype.edit = function (note) {
                    var newText = window.prompt('New note text: ');
                    this.notes[this.notes.indexOf(note)].text = newText;
                };
                RootComponent.prototype.changePriority = function (note) {
                    var newPriority = window.prompt("New Priority: Low, Medium, High").toLowerCase();
                    this.notes[this.notes.indexOf(note)].priority = newPriority;
                };
                RootComponent.prototype.addNote = function () {
                    var newText = window.prompt('New note text: ');
                    this.notes.push({ text: newText, priority: 'low' });
                };
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <header>\n      <h1>Super Basic Note Taker</h1>\n      <button class='addButton' (click)='addNote()'>+</button>\n    </header>\n    <div class='noteBoard'>\n      <div *ngFor=\"#note of notes\" class='note {{note.priority}}'>\n        <div class='textRow'>\n          <p> {{note.text}} </p>\n        </div>\n        <div class='buttonsRow'>\n        <button (click)=\"changePriority(note)\" class='noteButton priorityButton'><i class='fa fa-wrench'></i></button>\n          <button (click)=\"edit(note)\" class='noteButton editButton'><i class='fa fa-pencil'></i></button>\n          <button (click)=\"deleteNote(note)\" class='noteButton deleteButton'><i class='fa fa-trash'></i></button>\n        </div>\n      </div>\n    </div>\n    <footer>\n      <p> Handcrafted by Brian Dennis </p>\n    </footer>\n\n\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RootComponent);
                return RootComponent;
            }());
            exports_1("RootComponent", RootComponent);
        }
    }
});
//# sourceMappingURL=app.root.js.map