import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-view-reciepe',
  imports: [Header,Footer],
  templateUrl: './view-reciepe.html',
  styleUrl: './view-reciepe.css',
})
export class ViewReciepe {

}
