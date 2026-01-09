import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-profile',
  imports: [Header, Footer, FormsModule, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  username:string = ""
  password:string = ""
  confirmPassword:string = ""
  recipes:any = []
  api = inject(ApiService)

  constructor(){
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user") || "")
      this.username = user.username
    }
  }
  ngOnInit(){
    this.getDownloadedRecipes()
  }
  getDownloadedRecipes(){
    this.api.getDownloadedRecipesAPI().subscribe((res:any) => {
      this.recipes = res
      console.log(this.recipes); 
    })
  }

}
