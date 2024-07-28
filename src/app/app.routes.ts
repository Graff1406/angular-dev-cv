import { Routes } from '@angular/router';

// Components

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' }, 
    { path: '', component: HomeComponent },
];
