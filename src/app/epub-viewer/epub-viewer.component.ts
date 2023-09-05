import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Book, Rendition } from 'epubjs';
import { HostListener } from '@angular/core'; 
@Component({
  selector: 'app-epub-viewer',
  templateUrl: './epub-viewer.component.html',
  styleUrls: ['./epub-viewer.component.css']
})
export class EpubViewerComponent implements OnInit {
  private book: Book | null = null;
  private rendition: Rendition | null = null;
  public title: string = '';

  @ViewChild('area') areaElement!: ElementRef;
  @ViewChild('prevButton') prevButton!: ElementRef;
  constructor(private renderer: Renderer2) {}

  async ngOnInit(): Promise<void> {
    try {
      this.book = new Book('/assets/Ebook.epub');
      await this.book.opened;

      const metadata = await this.book.loaded.metadata;
      if (metadata && metadata.title) {
        this.title = metadata.title;
      }

    
      
      

        // Initialize the rendition and display the book content
        this.rendition = this.book.renderTo(this.areaElement.nativeElement, { width: 600, height: 400 });
        this.rendition.display();
      

    } catch (error) {
      console.error('Error loading eBook:', error);
    }
  }

  goToPrevPage(): void {
    if (this.rendition) {
      this.rendition.prev();
    }
  }

  goToNextPage(): void {
    if (this.rendition) {
      this.rendition.next();
    }
  }
  public fontSize: number = 16; 
  public screenWidth: number = window.innerWidth; 
  updateFontSize(): void {
    if (this.screenWidth >= 321 && this.screenWidth <= 1023) {
      this.fontSize = 10;
    } else {
      this.fontSize = 16; // Valeur par défaut
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = event.target.innerWidth;
    this.updateFontSize(); // Appelez la méthode pour mettre à jour la taille de la police
  }
}
