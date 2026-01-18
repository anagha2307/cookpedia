import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-admin-users-list',
  standalone: false,
  templateUrl: './admin-users-list.html',
  styleUrl: './admin-users-list.css',
})
export class AdminUsersList {
  api = inject(ApiService)
  allUsers:any = []

  ngOnInit(){
    this.getAllUsers()
  }

  getAllUsers(){
    this.api.getAllUsersAPI().subscribe((res:any) => {
      this.allUsers = res
      //console.log(this.allUsers);
    })
  }
}
