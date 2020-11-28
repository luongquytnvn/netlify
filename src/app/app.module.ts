import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { TestComponent } from './view/test/test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BlockSpecialKeyDirective} from './view/home/block-special-key.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    BlockSpecialKeyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BlockSpecialKeyDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
