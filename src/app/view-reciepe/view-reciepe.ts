import { Component, inject} from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-view-reciepe',
  imports: [Header, Footer, RouterLink],
  templateUrl: './view-reciepe.html',
  styleUrl: './view-reciepe.css',
})

export class ViewReciepe{
  recipeId: any = ""
  recipe: any = {}
  relatedRecipes: any = []

  api = inject(ApiService)
  route = inject(ActivatedRoute)

  
}
