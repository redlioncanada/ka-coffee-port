import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {FloatMenu} from './landing.floatMenu'

@Component({
    selector: 'masthead',
    templateUrl:'app/views/masthead.view.html',
    directives: [FloatMenu] 
})
export class AppMasthead { }