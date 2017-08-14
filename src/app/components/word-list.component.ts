/**
 * Created by lima on 8/7/17.
 */

import {Component, OnInit, Output} from '@angular/core'
import {SimpleService} from '../services/simple.service'
import {WordItem} from "../word-item";

@Component({
    selector: 'my-app',
    template: `
        <div >
            <li *ngFor="let word of list">
                <a [routerLink]="['/word',word.id]">{{word.name}}</a>
            </li>   
        </div>     `,
    providers: [SimpleService]
})
export class WordListComponent implements OnInit {
    private list: WordItem[];

    constructor(private service: SimpleService) {
    }

    @Output() getWords(): WordItem[] {
        return this.list;
    }

    ngOnInit(): void {
        this.service.getList().then(value => {
            return this.list = value

        });
    }

}