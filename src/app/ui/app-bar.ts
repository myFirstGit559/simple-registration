import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

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
        .link:hover {
            background-color: #ccc;
        }`
    ],
    template: `
        <header class="app-bar shadow-2 row middle-xs">
            <span class="logo col-xs-10" *ngIf="router.url == '/'">
                Registration
            </span>
            <span class="logo col-xs-10" *ngIf="router.url.indexOf('confirmation') != -1">
                Confirmation
            </span>
            <nav class="col-xs-2">
                <div class="row middle-xs between-xs">
                    <label for="en" class="link">EN</label>
                    <input type="radio" value="EN" class="rb-hide" [(ngModel)]="lang" name="lang" id="en" (change)="onChangeFn()">
                    <label for="ru" class="link">RU</label>
                    <input type="radio" value="RU" class="rb-hide" [(ngModel)]="lang" name="lang" id="ru" (change)="onChangeFn()">
                </div>
            </nav>
        </header>
    `
})

export class AppBar {
    constructor(private router: Router){}
    lang:string = 'EN';
    onChangeFn() {
        console.log(this.lang);
    }
}
