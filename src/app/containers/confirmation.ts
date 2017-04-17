import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'confirmation-container',
    styles: [`
        .confirmation {
            width: 80%;
            max-width: 650px;
            border-radius: 2px;
            background-color: white;
            padding: 20px;
            margin: 0 auto;
        }
        .creator {
            margin-bottom: 40px;
        }
    `],
    template: `
        <div class="row center-xs confirmation shadow-2">
          Welcome {{name}}
            <div class="actions col-xs-12">
                <div class="row center-xs">
                    <button class="btn-light" [routerLink]="['']">go to registration</button>
                </div>
            </div>
        </div>
    `
})
export class Confirmation implements OnInit {
    constructor(private route: ActivatedRoute){}
    name:string = '';
    ngOnInit() {
        this.name = this.route.snapshot.params['name'];
    }
};

