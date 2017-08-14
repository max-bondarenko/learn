import {Component, Input, OnInit} from "@angular/core";
import {WordItem} from "../word-item";
import {SimpleService} from "../services/simple.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import  {Location} from '@angular/common'
import 'rxjs/add/operator/switchMap';


@Component({
    template: '<span id="{{word.id}}" > {{word.name}} </span>',
    selector: 'word',
    providers : [
        SimpleService,
        Location
    ]
})
export class WordComponent implements OnInit {
    constructor(private simpleService: SimpleService,
                private router: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.router.paramMap.switchMap((params: ParamMap) => {
            return params.get("id")
        }).subscribe((id: string) => {
            this.simpleService.getList().then((list) => {
                this.word = list.find((item: WordItem) => {
                    return item.id == Number(id);
                })
            })
        })

    }

    private word: WordItem;
    @Input() baseId: string;
}