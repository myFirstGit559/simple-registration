import { Component } from '@angular/core';


@Component({
    selector: 'confirmation-container',
    styles: [`
        .confirmation {
            padding-top: 50px;
        }
        .creator {
            margin-bottom: 40px;
        }
    `],
    template: `
        <div class="row center-xs confirmation shadow-2">
          Welcome {{Name}}
            <button class="btn-light">go to registration</button>
        </div>
    `
})
export class Confirmation {};

