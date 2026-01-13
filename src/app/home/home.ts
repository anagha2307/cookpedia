import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-home',
  imports: [Header,Footer,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  allRecipes :any = []
  allFeedbacks:any = []
  api = inject(ApiService)

  ngOnInit(){
    this.getAllRecipes()
    this.getFeedbacks()
  }
  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res :any) => {
      this.allRecipes = res.slice(0,6)
      //console.log(this.allRecipes);
    })
  }
  getFeedbacks(){
    this.api.approvedFeedbackAPI().subscribe((res:any) => {
      this.allFeedbacks = res
      console.log(this.allFeedbacks);
      
    })
  }
}
