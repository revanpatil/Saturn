import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionCardsComponent } from './components/action-cards/action-cards.component';
import { ContentCardsComponent } from './components/content-cards/content-cards.component';
import { ClassicCardsComponent } from './components/classic-cards/classic-cards.component';
import { ActionTextComponent } from './components/action-text/action-text.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImgContainerComponent } from './components/action-cards/img-container/img-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    HeaderComponent,
    ActionCardsComponent,
    ContentCardsComponent,
    ClassicCardsComponent,
    ActionTextComponent,
    ProductCardComponent,
    FeaturesComponent,
    FooterComponent,
    ImgContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
