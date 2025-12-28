import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';
import { Router } from '@angular/router';
import { SearchPipe } from '../pipes/search-pipe';
import { FormsModule, NgModel } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-reciepes',
  imports: [Header,Footer,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './reciepes.html',
  styleUrl: './reciepes.css',
})
export class Reciepes {

  allRecipes :any = []
  cuisineArray : any = []
  mealTypeArray : any = []
  dummyAllRecipe : any = []
  searchKey:string = ""
  p:number = 1

  api = inject(ApiService)
  router = inject(Router)

  ngOnInit(){
    this.getAllRecipes()
  }
  //get all recipes
  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res : any) => {
      this.allRecipes = res
      //console.log(this.allRecipes);
      this.dummyAllRecipe = res

      //cuisine
      this.allRecipes.forEach((item:any) => {
        !this.cuisineArray.includes(item.cuisine) && this.cuisineArray.push(item.cuisine)
      });
      //console.log(this.cuisineArray);
      
      //meal type 
      const dummyMealArray = this.allRecipes.map((item : any) => item.mealType).flat(Infinity)
        dummyMealArray.forEach((item:any) => {
          !this.mealTypeArray.includes(item) && this.mealTypeArray.push(item)
        })
      //console.log(this.mealTypeArray);
    })
  }
  //filter recipes
  filterRecipe(key:string,value:string){
    this.allRecipes = this.dummyAllRecipe.filter((item:any) => item[key] == value)
  }

  //navigate view
  navigateView(recipeId:string){
    if(sessionStorage.getItem("token")){
      this.router.navigateByUrl(`recipes/${recipeId}/view`)
    }
    else{
      alert('Please Login to get full access to our Recipe Collection....!!!!')
    }
  }
}
