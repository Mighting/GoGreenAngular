import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MmComponent } from './modules/mm/mm.component';
import { MmCreateComponent } from './modules/mm/mm-create/mm-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MmComponent,
    MmCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
