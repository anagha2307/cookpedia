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
  profile:string = "https://preview.redd.it/what-would-happen-if-joe-met-georgia-miller-v0-cxwrm0bxozaf1.jpg?width=640&crop=smart&auto=webp&s=12f32a1ed997803ce03168c8ea7e1d824905b511"
  recipes:any = []
  api = inject(ApiService)

  constructor(){
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user") || "")
      this.username = user.username
      if(user.profile){
        this.profile = user.profile
      }
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
