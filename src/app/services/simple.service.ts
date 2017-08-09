/**
 * Created by lima on 8/8/17.
 */


import {Injectable} from '@angular/core'
import {WordList} from '../word-list'

@Injectable()
export class SimpleService {
    private ms: number = 2000;

    getList(): Promise<WordList[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve([new WordList(1, "long name"),
                    new WordList(2, "so long name")
                ]
            ), this.ms);

        });


    }
}