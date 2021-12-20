import { CoursesService } from './courses.service';
import {Component}   from '@angular/core';

@Component({
        selector: 'courses',
        template: `<h2> {{ title }} </h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}

            </li>
                
        </ul>
        <img src="{{ imageUrl }}"/>
        <button [style.backgroundColor]="isActive? 'blue' : 'white'">Save</button>
        `
    })
    
export class CoursesComponent {

    title= "Angular: List of courses"
    courses ;
    constructor(service:CoursesService)
    {
        this.courses= service.getCourses();
    }
    imageUrl = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    isActive= true;
}