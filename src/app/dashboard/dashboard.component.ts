import {Component} from "@angular/core";

@Component({
    selector: 'dashboard',
    template: `<div> <h1> {{title}}</h1></div> 
        <div class="row">
            <!--<a *ngFor="items" routerLink="{{item.link_id}}">{{item.name}}</a> -->
            <a [routerLink]="items[0].link_id">{{items[0].name}}</a> 
         </div>
    `
})
export class DashboardComponent {

    title = 'Dashboard';
    items = [new DashboardItem('word list','/wordList',null)]
}

class DashboardItem {
    constructor(public  name: string,
                public link_id:string,
                public  id:number    ) {
        this.link_id = link_id +  (id != null ? ( "/" + id) : "") ;
    }
}