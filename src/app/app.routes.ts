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
import { routeGuard } from './guards/route-guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
    //lazy loaded admin module path
    {
        path:'admin', canActivate:[adminGuard], loadChildren:() => import('./admin/admin-module').then(module => module.AdminModule)
    },
    //user side
    //http://localhost:4200/
    {
        path:'',component:Home, title:'Cookpedia - Home'
    },
    {
        path:'recipes',component:Reciepes,  title:'Cookpedia - Recipes'
    },
    {
        path:'recipes/:id/view', canActivate:[routeGuard], component:ViewReciepe, title:'Cookpedia - Recipe'
    },
    {
        path:'saved-recipes',canActivate:[routeGuard], component:SavedReciepes, title:'Cookpedia - Saved Recipes'
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
        path:'register',component:Register, title:'Cookpedia - Register'
    },
    {
        path:'profile',canActivate:[routeGuard],component:Profile, title:'Cookpedia - Profile'
    },
    {
        path:'**',component:Pnf, title:'Cookpedia - Page Not Found'
    },
];
