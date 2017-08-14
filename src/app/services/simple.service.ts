/**
 * Created by lima on 8/8/17.
 */


import {Injectable} from '@angular/core'
import {WordItem} from '../word-item'

@Injectable()
export class SimpleService {
    private ms: number = 200;

    getList(): Promise<WordItem[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve([new WordItem(1, "long name"),
                    new WordItem(2, "so long name")
                ]
            ), this.ms);

        });


    }
}