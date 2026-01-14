import { Component } from '@angular/core';
import { RecipeModel } from '../model/recipeModel';

@Component({
  selector: 'app-admin-add-recipe',
  standalone: false,
  templateUrl: './admin-add-recipe.html',
  styleUrl: './admin-add-recipe.css',
})
export class AdminAddRecipe {
  recipeDetails:RecipeModel = {}
  ingredientsArray:any = []
  instructionArray:any = []
  mealArray:any = []

  addIngredient(ingredientInput:any){
    if(ingredientInput.value){
      this.ingredientsArray.push(ingredientInput.value)
      ingredientInput.value = ""
    }
  }
  deleteIngredient(value:string){
    this.ingredientsArray = this.ingredientsArray.filter((item:string) => item!=value)
  }
}
