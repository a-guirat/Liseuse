import { Component, OnInit } from '@angular/core';
import { Book } from 'epubjs'; 

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Chemin relatif vers le livre électronique dans le répertoire "assets"
    const epubFilePath = 'assets/Ebook/';

    // Charger le livre électronique
    const book = new Book(epubFilePath);
    
    // Utilisez l'objet "book" pour interagir avec le livre électronique
    // Par exemple, vous pouvez accéder aux informations du livre, aux sections, etc.
  }
}
