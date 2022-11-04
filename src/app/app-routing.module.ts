import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { SingleFoodPageComponent } from './pages/single-food-page/single-food-page.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { SearchComponent } from './home/search/search.component';


//RUTIRANJE
const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  //search
  {path:'search/:searchItem',component:HomeComponent},
  //hrana po tagu
  {path:'tag/:tag',component:HomeComponent},
  //pojedinacna hrana
  {path:'food/:id',component:SingleFoodPageComponent},
  {path:'cart-page',component:CartPageComponent},

  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
