import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app/app';
import { routes } from './app/routes'
import { Main, Confirmation, Registration} from './app/containers';
import {
    AppBar
} from './app/ui';

@NgModule({
    declarations: [
        App,
        Main,
        AppBar,
        Registration,
        Confirmation
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        routes
    ],
    bootstrap: [App]
})

export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);