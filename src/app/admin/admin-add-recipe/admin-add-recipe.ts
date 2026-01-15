import { Component, inject } from '@angular/core';
import { RecipeModel } from '../model/recipeModel';
import { ApiService } from '../../services/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-recipe',
  standalone: false,
  templateUrl: './admin-add-recipe.html',
  styleUrl: './admin-add-recipe.css',
})
export class AdminAddRecipe {
  api = inject(ApiService)
  recipeDetails:RecipeModel = {}
  ingredientsArray:any = []
  instructionArray:any = []
  mealArray:any = []
  selectedMealArray:any = []
  router = inject(Router)

  ngOnInit(){
    this.getAllRecipes()
  }
  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any) => {
      const meals = res.map((item:any) => item.mealType)
      //console.log(meals.flat(Infinity)); 
      meals.flat(Infinity).forEach((item:any) => {
        !this.mealArray.includes(item) && this.mealArray.push(item)
      });
      console.log(this.mealArray);
      
    })
  }
  addIngredient(ingredientInput:any){
    if(ingredientInput.value){
      this.ingredientsArray.push(ingredientInput.value)
      ingredientInput.value = ""
    }
  }
  deleteIngredient(value:string){
    this.ingredientsArray = this.ingredientsArray.filter((item:string) => item!=value)
  }
  addInstruction(instructionInput:any){
    if(instructionInput.value){
      this.instructionArray.push(instructionInput.value)
      instructionInput.value = ""
    }
  }
  deleteInstruction(value:string){
    this.instructionArray = this.instructionArray.filter((item:string) => item!=value)
  }
  chooseMeal(mealCheckevent:any){
    if(mealCheckevent.target.checked){
      !this.selectedMealArray.includes(mealCheckevent.target.name) && this.selectedMealArray.push(mealCheckevent.target.name)
    }
    else{
      this.selectedMealArray = this.selectedMealArray.filter((item:string) => item != mealCheckevent.target.name)
    }
  }
  addRecipe(){
    this.recipeDetails.ingredients = this.ingredientsArray
    this.recipeDetails.instructions = this.instructionArray
    this.recipeDetails.mealType = this.selectedMealArray
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,
    caloriesPerServing,image,mealType} = this.recipeDetails
    if(name && ingredients && instructions && prepTimeMinutes && cookTimeMinutes && servings && difficulty && cuisine && caloriesPerServing && image && mealType){
      //api call
      this.api.addRecipeAPI(this.recipeDetails).subscribe({
        next:(res:any) => {
          alert("New Recipe Added Successfully....!!!!")
          this.recipeDetails = {}
          this.ingredientsArray = []
          this.instructionArray = []
          this.selectedMealArray = []
          this.router.navigateByUrl('/admin/recipe-list')
        }
      })
    }
    else{
      alert("Please fill the form completely.....!!!!")
    }

  }
}
