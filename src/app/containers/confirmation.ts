import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangService } from '../services';

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
          {{words.Welcome}} {{name}}
            <div class="actions col-xs-12">
                <div class="row center-xs">
                    <button class="btn-light" [routerLink]="['']">{{words.GoTo}}</button>
                </div>
            </div>
        </div>
    `
})
export class Confirmation implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private langService: LangService
    ){}
    name:string = '';
    words:object = {};
    ngOnInit() {
        this.name = this.route.snapshot.params['name'];
        this.langService.getLangJson().subscribe();
        this.langService.changeData.subscribe(data => this.words = data);
    }
};

