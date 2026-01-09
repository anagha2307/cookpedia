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
import { Profile } from './profile/profile';

export const routes: Routes = [
    {
        path:'',component:Home, title:'Cookpedia - Home'
    },
    {
        path:'recipes',component:Reciepes,  title:'Cookpedia - Recipes'
    },
    {
        path:'recipes/:id/view',component:ViewReciepe, title:'Cookpedia - Recipe'
    },
    {
        path:'saved-recipes',component:SavedReciepes, title:'Cookpedia - Saved Recipes'
    },
    {
        path:'about',component:About, title:'Cookpedia - About'
    },
    {
        path:'contact',component:Contact, title:'Cookpedia - Contact'
    },
    {
        path:'login',component:Login, title:'Cookpedia - Login'
    },
    {
        path:'profile',component:Profile, title:'Cookpedia - Profile'
    },
    {
        path:'register',component:Register, title:'Cookpedia - Register'
    },
    {
        path:'**',component:Pnf, title:'Cookpedia - Page Not Found'
    },
];
