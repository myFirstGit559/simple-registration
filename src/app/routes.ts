import { RouterModule } from '@angular/router';
import  { ModuleWithProviders } from '@angular/core';
import { Main, Registration, Confirmation } from './containers';

export const routes: ModuleWithProviders =  RouterModule.forRoot([
    {
        path: '',
        component: Main,
        children: [
            {path: '', component: Registration},
            {path: 'confirmation/:name', component: Confirmation}
        ]
    },
    {path: '**', redirectTo: ''}
]);