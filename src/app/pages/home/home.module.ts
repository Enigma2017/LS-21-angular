import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeBeansComponent } from './coffee-beans/coffee-beans.component';
import { ProductInfoComponent } from './product/product-info/product-info.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    HomeFormComponent,
    CoffeeComponent,
    CoffeeBeansComponent,
    ProductInfoComponent,
    ProductDetailsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
