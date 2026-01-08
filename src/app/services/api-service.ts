import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient)
  serverURL = 'http://localhost:3000'

  //get all recipes
  getAllRecipesAPI(){
    return this.http.get(`${this.serverURL}/recipes/all`)
  }
  //register User
  registerAPI(reqBody:any){
    return this.http.post(`${this.serverURL}/register`,reqBody)
  }
  //login
  loginAPI(reqBody:any){
    return this.http.post(`${this.serverURL}/login`,reqBody)
  }
  //view recipe
  viewRecipeAPI(){
    return this.http.get(`${this.serverURL}/recipes/:id/view`)
  }
  relatedRecipeAPI(){
    
  }

}
