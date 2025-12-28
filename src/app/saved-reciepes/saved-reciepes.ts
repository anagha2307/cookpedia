import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-saved-reciepes',
  imports: [Header,Footer],
  templateUrl: './saved-reciepes.html',
  styleUrl: './saved-reciepes.css',
})
export class SavedReciepes {

}
