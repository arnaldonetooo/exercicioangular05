import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MaterialModule }from './material.module';
import { CardComponent } from './card/card.component';
import { DiretivaDirective } from './diretiva.directive';
import { BtnComponent } from './btn/btn.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DiretivaDirective,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
