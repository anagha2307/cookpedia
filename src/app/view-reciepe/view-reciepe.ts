import { Component, inject} from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ApiService } from '../services/api-service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-view-reciepe',
  imports: [Header, Footer, RouterLink],
  templateUrl: './view-reciepe.html',
  styleUrl: './view-reciepe.css',
})

export class ViewReciepe{

  recipeId:any = ""
  recipe:any = {}
  relatedRecipes:any = []

  api = inject(ApiService)
  router = inject(ActivatedRoute)
  
  ngOnInit(){
    //get dynamic id from url
    this.router.params.subscribe((res:any) => {
      this.recipeId = res.id
      console.log(this.recipeId); 
      this.getRecipeDetails(this.recipeId)     
    })
  }
  //get recipe
  getRecipeDetails(id:any){
    this.api.viewRecipeAPI(id).subscribe({
      next:(res:any) => {
        this.recipe = res
        console.log(this.recipe);
        this.getRelatedRecipes(res.cuisine)
      },
      error:(reason:any) => {
        alert(reason.error)
      }
    })
  }
  //related recipe
  getRelatedRecipes(cuisine:any){
    this.api.relatedRecipeAPI(cuisine).subscribe((res:any) => {
      if(res.length > 1){
        this.relatedRecipes = res.filter((item:any) => item.name != this.recipe.name)
        console.log(this.relatedRecipes);
      }
      else{
        this.relatedRecipes = []
      }
    })
  }
  //download recipe
  downloadRecipe(){
    let pdf = new jsPDF
    let headRow = ['Recipe Name','Cuisine','Servings','Ingredients','Instructions']
    let bodyData = [this.recipe.name,this.recipe.cuisine,this.recipe.servings,this.recipe.ingredients,this.recipe.instructions]
    autoTable(pdf,{
      head:[headRow],
      body:[bodyData]
    })
    pdf.save('Recipe.pdf')
  }
}
