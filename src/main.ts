import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { App } from './app/app';
import { routes } from './app/routes'
import { Main, Confirmation, Registration} from './app/containers';
import { providers } from './app/index';
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
    providers,
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