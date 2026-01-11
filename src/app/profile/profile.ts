import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api-service';
import { Router, RouterLink } from "@angular/router";

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
  userId:string = ""
  selectedFile!: File;
  profile = signal("https://preview.redd.it/what-would-happen-if-joe-met-georgia-miller-v0-cxwrm0bxozaf1.jpg?width=640&crop=smart&auto=webp&s=12f32a1ed997803ce03168c8ea7e1d824905b511")
  recipes:any = []

  api = inject(ApiService)
  router = inject(Router)

  constructor(){
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user") || "")
      this.username = user.username
      this.userId = user._id
      if(user.profile){
        //this.profile = user.profile
        this.profile.set(user.profile)
      }
    }
  }
  ngOnInit(){
    this.getDownloadedRecipes()
  }
  getDownloadedRecipes(){
    this.api.getDownloadedRecipesAPI().subscribe((res:any) => {
      this.recipes = res
      //console.log(this.recipes); 
    })
  }
  getFile(event:any){
    let uploadFile = event.target.files[0]
    this.profile.set(URL.createObjectURL(uploadFile));
    this.selectedFile = uploadFile;
    //convert to image url
    //let fr = new FileReader()
    //fr.readAsDataURL(uploadFile)
    //fr.onload = (event:any) => {this.profile.set(event.target.result)}
  }
  //edit profile
  editProfile(){
    if(this.username){
      if(this.password != this.confirmPassword){
        alert("Password and Confirm Password must be same....")
      }
      else{
        this.api.updateUserAPI(
        {username:this.username, password:this.password , profile:this.profile(),id:this.userId}).subscribe(
          (res:any) => {
        sessionStorage.setItem("user",JSON.stringify(res))
        alert("Profile Updated Successfully......!!!!")
        if(this.password != ""){
          this.router.navigateByUrl("/login")
        }
      })
      }
    }
    else{
      alert("Please fill the form completely......!!!!")
    }
  }

}
