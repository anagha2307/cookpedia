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
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search-pipe';

@NgModule({
  declarations: [
    AdminDashboard,
    AdminAddRecipe,
    AdminRecipeList,
    AdminDownloadList,
    AdminUsersList,
    AdminFeedbacksList,
    AdminSidebar,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterLink,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    SearchPipe,
  ],
  providers: [
    provideNativeDateAdapter(),
  ]
})
export class AdminModule { }
