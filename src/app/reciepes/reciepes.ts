import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-reciepes',
  imports: [Header,Footer],
  templateUrl: './reciepes.html',
  styleUrl: './reciepes.css',
})
export class Reciepes {
  allRecipes :any = []
  api = inject(ApiService)
  ngOnInit(){
    this.getAllRecipes()
  }
  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res :any) => {
      this.allRecipes = res
      console.log(this.allRecipes);
    })
  }
}
