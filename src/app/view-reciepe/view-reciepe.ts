import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-view-reciepe',
  imports: [Header, Footer, RouterLink],
  templateUrl: './view-reciepe.html',
  styleUrl: './view-reciepe.css',
})
export class ViewReciepe {

}
