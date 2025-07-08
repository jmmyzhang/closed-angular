import { Routes } from '@angular/router';
import { HomeView } from './views/home/home-view';
import { AboutView } from './views/about/about-view';
import { SearchView } from './views/search/search-view';
import { ProfileView } from './views/profile/profile-view';
import { ClosetView } from './views/closet/closet-view';

export const routes: Routes = [
    {
        path: '',
        component: HomeView,
        children: [
            {
                path: 'closet',
                component: ClosetView
            },
            {
                path: 'search',
                component: SearchView
            },
            {
                path: 'profile',
                component: ProfileView
            },
            {
                path: 'about',
                component: AboutView
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
