import { Component } from '@angular/core';

@Component({
    selector: 'main-container',
    template: `
        <div class="main-container">
            <app-bar
               (changeData)="onChangeFn($event)"
            ></app-bar>
            <main class="main">
                <router-outlet></router-outlet>
            </main>
        </div>
    `
})
export class Main {
    words:object = {};
    onChangeFn(event){
        this.words = event;
    }
}