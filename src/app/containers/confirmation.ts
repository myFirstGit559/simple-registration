import { Component } from '@angular/core';
import { Store } from '../store'

@Component({
    selector: 'confirmation-container',
    styles: [`
        .notes {
            padding-top: 50px;
        }
        .creator {
            margin-bottom: 40px;
        }
    `],
    template: `
        <div class="row center-xs notes">
          Welcome {{Name}}
            <button class="btn-light">go to registration</button>
        </div>
    `
})
export class Confirmation {

    constructor(
        private store: Store
    ) {}

};

