import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { TagsComponent } from './home/tags/tags.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { SingleFoodPageComponent } from './pages/single-food-page/single-food-page.component';
import { FoodListComponent } from './home/food-list/food-list.component';
import { HeaderImageComponent } from './home/header-image/header-image.component';
import { PopularFoodComponent } from './home/popular-food/popular-food.component';
import { WhyChooseUsComponent } from './home/why-choose-us/why-choose-us.component';
import { WhyBoxComponent } from './home/why-choose-us/why-box/why-box.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { StaffSectionComponent } from './home/staff-section/staff-section.component';
import { ContactComponent } from './home/contact/contact.component';
import { MapComponent } from './home/contact/map/map/map.component';
import { InfoComponent } from './home/contact/info/info/info.component';
import { FormComponent } from './home/contact/form/form/form.component';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './links/links.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsComponent } from './pages/single-food-page/ingredients/ingredients.component';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaymentFormComponent } from './pages/cart-page/payment-form/payment-form/payment-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    SingleFoodPageComponent,
    FoodListComponent,
    HeaderImageComponent,
    PopularFoodComponent,
    WhyChooseUsComponent,
    WhyBoxComponent,
    GalleryComponent,
    StaffSectionComponent,
    ContactComponent,
    MapComponent,
    InfoComponent,
    FormComponent,
    FooterComponent,
    LinksComponent,
    IngredientsComponent,
    NotFoundComponent,
    PaymentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
