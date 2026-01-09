import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-saved-reciepes',
  imports: [Header, Footer, RouterLink],
  templateUrl: './saved-reciepes.html',
  styleUrl: './saved-reciepes.css',
})
export class SavedReciepes {

  recipes:any = []
  api = inject(ApiService)

  ngOnInit(){
    this.getAllSavedRecipes()
  }
  getAllSavedRecipes(){
    this.api.getSavedRecipesAPI().subscribe((res:any) => {
      this.recipes = res
      console.log(this.recipes); 
    })
  }
  deleteSavedRecipe(id:any){
    this.api.deleteSavedRecipesAPI(id).subscribe((res:any) => {
      this.getAllSavedRecipes()
    })
  }
}
