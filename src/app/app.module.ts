/**
 */

import  {NgModule}      from '@angular/core';
import  {BrowserModule} from '@angular/platform-browser'
import  {FormsModule} from  '@angular/forms'

import {DashboardComponent} from "./dashboard/dashboard.component";
import {WordListComponent}   from "./components/word-list.component";
import {WordComponent} from "./components/word.component";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";

;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'word/:id',
                component: WordComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'wordList',
                component: WordListComponent
            },

            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ])

    ],

    declarations: [
        DashboardComponent,
        WordListComponent,
        WordComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
