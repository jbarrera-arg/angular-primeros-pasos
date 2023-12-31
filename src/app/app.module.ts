import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
