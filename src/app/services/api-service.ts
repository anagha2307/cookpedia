import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RecipeModel } from '../admin/model/recipeModel';

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
  //add feedback
  feedbackAPI(feedback:any){
    return this.http.post(`${this.serverURL}/user/feedback`,feedback)
  }
  //view approved feedbacks
  approvedFeedbackAPI(){
    return this.http.get(`${this.serverURL}/user/feedbacks/approved`)
  }
  //append token : return token append req header
  appendToken(){
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if(token){
      headers = headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }
  //view recipe
  viewRecipeAPI(recipeId:string){
    return this.http.get(`${this.serverURL}/recipes/${recipeId}/view`,this.appendToken())
  }
  //related recipe
  relatedRecipeAPI(cuisine:string){
    return this.http.get(`${this.serverURL}/related-recipes?cuisine=${cuisine}`,this.appendToken())
  }
  //add to download
  addToDownloadAPI(recipe:any){
    return this.http.put(`${this.serverURL}/recipes/${recipe._id}/download`,recipe,this.appendToken())
  }
  //get saved recipes
  getDownloadedRecipesAPI(){
    return this.http.get(`${this.serverURL}/recipes/downloaded`,this.appendToken())
  }
  //save recipe
  saveRecipeAPI(recipe:any){
    return this.http.post(`${this.serverURL}/recipes/${recipe._id}/save`,recipe,this.appendToken())
  }
  //get saved recipes
  getSavedRecipesAPI(){
    return this.http.get(`${this.serverURL}/recipes/saved`,this.appendToken())
  }
  //delete saved recipe
  deleteSavedRecipesAPI(recipeId:any){
    return this.http.delete(`${this.serverURL}/saved-recipes/${recipeId}/delete`,this.appendToken())
  }
  //update user profile
  updateUserAPI(user:any){
    return this.http.put(`${this.serverURL}/users/${user.id}/edit`,user,this.appendToken())
  }
  //get all users
  getAllUsersAPI(){
    return this.http.get(`${this.serverURL}/users`,this.appendToken())
  }
  //get downloads
  getDownloadListAPI(){
    return this.http.get(`${this.serverURL}/download-list`,this.appendToken())
  }
  //get feedbacks
  getFeedbackListAPI(){
    return this.http.get(`${this.serverURL}/feedbacks`,this.appendToken())
  }
  //update feedback
  updateFeedbackAPI(id:string,status:string){
    return this.http.put(`${this.serverURL}/feedbacks/${id}/edit?status=${status}`,{},this.appendToken())
  }
  //add Recipe
  addRecipeAPI(recipe:RecipeModel){
    return this.http.post(`${this.serverURL}/add-recipe`,recipe,this.appendToken())
  }
  //delete Recipe
  deleteRecipeAPI(recipeId:string){
    return this.http.delete(`${this.serverURL}/recipes/${recipeId}/delete`,this.appendToken())
  }
  //delete Recipe
  updateRecipeAPI(recipeId:string,recipe:RecipeModel){
    return this.http.put(`${this.serverURL}/recipes/${recipeId}/update`,recipe,this.appendToken())
  }
}
