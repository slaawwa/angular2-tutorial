import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component/app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroViewComponent }  from './hero-view/hero-view.component';
import { MyHeroDetailComponent }  from './my-hero-detail/my-hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroService }          from './hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroViewComponent,
    MyHeroDetailComponent,
    HeroesComponent,
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
