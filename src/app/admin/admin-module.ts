import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminAddRecipe } from './admin-add-recipe/admin-add-recipe';
import { AdminRecipeList } from './admin-recipe-list/admin-recipe-list';
import { AdminDownloadList } from './admin-download-list/admin-download-list';
import { AdminUsersList } from './admin-users-list/admin-users-list';
import { AdminFeedbacksList } from './admin-feedbacks-list/admin-feedbacks-list';
import { AdminSidebar } from './admin-sidebar/admin-sidebar';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    AdminDashboard,
    AdminAddRecipe,
    AdminRecipeList,
    AdminDownloadList,
    AdminUsersList,
    AdminFeedbacksList,
    AdminSidebar
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterLink
  ]
})
export class AdminModule { }
