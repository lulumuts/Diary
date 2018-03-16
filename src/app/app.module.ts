import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { WriteComponent } from './write/write.component';
import { WriteDetailsComponent } from './write-details/write-details.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { WriteFormComponent } from './write-form/write-form.component';


@NgModule({
  declarations: [
    AppComponent,
    WriteComponent,
    WriteDetailsComponent,
    HighlightDirective,
    DateCountPipe,
    WriteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
