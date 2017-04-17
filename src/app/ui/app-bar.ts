import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LangService } from '../services';

@Component({
    selector: 'app-bar',
    styles: [
        `.app-bar {
            height: 90px;
            padding: 5px 30px;
            background-color: white;
            width: 80%;
            max-width: 650px;
            margin: 0 auto;
            position: relative;
        }
        .logo {
            font-size: 20px;
            font-weight: 300;
            cursor: pointer;
        }
        .link {
            font-size: 16px;
            border: 1px solid #ccc;
            padding: .3em;
            margin-bottom: .5em;
            font-weight: 400;
            cursor: pointer;
            border-radius: 3px;
        }
        .rb-hide {
            display: none;
        }
        .rb-hide:checked + .link {
            background-color: #ccc;
        }
        .link:hover {
            background-color: #ccc;
        }`
    ],
    template: `
        <header class="app-bar shadow-2 row middle-xs">
            <span class="logo col-xs-10" *ngIf="router.url == '/'">
                {{words.Reg}}
            </span>
            <span class="logo col-xs-10" *ngIf="router.url.indexOf('confirmation') != -1">
                {{words.Conf}}
            </span>
            <nav class="col-xs-2">
                <div class="row middle-xs between-xs">
                    <input type="radio" value="en" class="rb-hide" [(ngModel)]="lang" name="lang" id="en" (change)="onChangeFn()">
                    <label for="en" class="link">{{words.En}}</label>
                    <input type="radio" value="ru" class="rb-hide" [(ngModel)]="lang" name="lang" id="ru" (change)="onChangeFn()">
                    <label for="ru" class="link">{{words.Ru}}</label>
                </div>
            </nav>
        </header>
    `
})

export class AppBar implements OnInit {
    constructor(
        private router: Router,
        private langService: LangService
    ){}
    @Input()
    lang:string = 'en';
    @Input()
    words: object = {};
    @Output()
    changeData: EventEmitter<any> = new EventEmitter<any>();
    ngOnInit() {
        this.langService.setLang(this.lang);
        this.langService.getLangJson()
            .subscribe(data => {
                console.log(data);
                this.words = data;
            });
    }
    onChangeFn() {
        this.langService.setLang(this.lang);
        this.langService.getLangJson()
            .subscribe(data => {
                this.words = data;
                this.changeData.emit(this.words);
            });
    }
}
