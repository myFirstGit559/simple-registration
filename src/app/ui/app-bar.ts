import { Component } from '@angular/core';

@Component({
    selector: 'app-bar',
    styles: [
        `.app-bar {
            height: 65px;
            padding: 5px 30px;
            background-color: white;
            width: 80%;
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
            padding: 10px;
            font-weight: 400;
            cursor: pointer;
        }
        .link:hover {
            background-color: #ccc;
        }`
    ],
    template: `
        <header class="app-bar shadow-2 row middle-xs">
            <span class="logo col-xs-10">
                {{pgName}}
            </span>
            <nav class="col-xs-2">
                <div class="row middle-xs between-xs">
                    <span class="link" (click)="changeLanguage()">En</span>
                    <span class="link" (click)="changeLanguage()">Ru</span>
                </div>
            </nav>
        </header>
    `
})

export class AppBar {
    changeLanguage(){

    }
    pgName: string = 'Registration';
}
