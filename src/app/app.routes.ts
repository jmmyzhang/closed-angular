import { Routes } from '@angular/router';
import { BaseComponent } from './views/base/base-component';
import { HomeComponent } from './views/home/home-component/home-component';

export const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
