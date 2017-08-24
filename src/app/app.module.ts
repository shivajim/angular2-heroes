// Built in component
import { NgModule, OnInit}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// in-memory web API/mock-services
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

// Component
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDeatilComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Services
import { HeroService } from './hero.service';


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent, 
    HeroesComponent, 
    HeroDeatilComponent,
    DashboardComponent 
  ],
  providers: [HeroService],
  bootstrap: [ AppComponent]
})

export class AppModule { }
