import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-admin-recipe-list',
  standalone: false,
  templateUrl: './admin-recipe-list.html',
  styleUrl: './admin-recipe-list.css',
})
export class AdminRecipeList {
  api = inject(ApiService)
  allRecipes:any = []
  searchKey:string = ""

  ngOnInit(){
    this.getAllRecipes()
  }
  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any) => {
      this.allRecipes = res
      console.log(this.allRecipes);
    })
  }
  deleteRecipe(id:string){
    this.api.deleteRecipeAPI(id).subscribe((res) => {
      alert("Recipe deleted.......!!!!")
      this.getAllRecipes()
    })
  }

}
