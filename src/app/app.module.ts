import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule,
    PagesRoutingModule,
    AppRoutingModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
