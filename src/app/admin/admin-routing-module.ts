import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminRecipeList } from './admin-recipe-list/admin-recipe-list';
import { AdminDownloadList } from './admin-download-list/admin-download-list';
import { AdminUsersList } from './admin-users-list/admin-users-list';
import { AdminFeedbacksList } from './admin-feedbacks-list/admin-feedbacks-list';
import { AdminAddRecipe } from './admin-add-recipe/admin-add-recipe';

const routes: Routes = [
  {
    path:"",component:AdminDashboard,title:'Dashboard - Admin'
  },
  {
    path:"recipe-list",component:AdminRecipeList,title:'Recipes - Admin'
  },
  {
    path:"recipe/add",component:AdminAddRecipe,title:'Add Recipe - Admin'
  },
  {
    path:"recipe/:id/edit",component:AdminAddRecipe,title:'Edit Recipe - Admin'
  },
  {
    path:"download-list",component:AdminDownloadList,title:'Downloads - Admin'
  },
  {
    path:"users-list",component:AdminUsersList,title:'Users - Admin'
  },
  {
    path:"feedbacks-list",component:AdminFeedbacksList,title:'Feedbacks - Admin'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
