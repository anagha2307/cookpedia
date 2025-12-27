import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-reciepes',
  imports: [Header,Footer],
  templateUrl: './reciepes.html',
  styleUrl: './reciepes.css',
})
export class Reciepes {

}
