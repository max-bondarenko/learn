/**
 * Created by lima on 8/7/17.
 */

import {Component, OnInit, Output} from '@angular/core'
import {SimpleService} from './services/simple.service'
import {WordList} from "./word-list";

@Component({
    selector: 'my-app',
    template: `
        <div >
            <li *ngFor="let word of list"> <span>{{word.name}} {{word.id}}</span> </li>
        </div>
    `,
    providers: [SimpleService]


})
export class AppComponent implements  OnInit{
    private list : WordList[];
    constructor(private service: SimpleService) {
    }
    @Output() getWords(): WordList[] {
        return this.list;
    }

    ngOnInit(): void {
        this.service.getList().then(value => {return this.list = value});
    }

    name = '2'
}