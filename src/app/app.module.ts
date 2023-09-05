import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EpubViewerComponent } from './epub-viewer/epub-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    EpubViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
