import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { GuessTheNumberComponent }   from './guess-the-number.component';

@NgModule({
    imports:      [ BrowserModule, Angular2FontawesomeModule ],
    declarations: [ GuessTheNumberComponent ],
    bootstrap:    [ GuessTheNumberComponent ]
})

export class AppModule { }
