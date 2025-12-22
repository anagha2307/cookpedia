import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Reciepes } from './reciepes/reciepes';
import { ViewReciepe } from './view-reciepe/view-reciepe';
import { Login } from './login/login';
import { Register } from './register/register';
import { Pnf } from './pnf/pnf';
import { SavedReciepes } from './saved-reciepes/saved-reciepes';

export const routes: Routes = [
    {
        path:'home',component:Home
    },
    {
        path:'reciepes',component:Reciepes
    },
    {
        path:'reciepes/:id/view',component:ViewReciepe
    },
    {
        path:'saved-reciepes',component:SavedReciepes
    },
    {
        path:'about',component:About
    },
    {
        path:'contact',component:Contact
    },
    {
        path:'login',component:Login
    },
    {
        path:'register',component:Register
    },
    {
        path:'**',component:Pnf
    },
];
