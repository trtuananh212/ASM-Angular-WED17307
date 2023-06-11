import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, ProductlistComponent, ProductUpdateComponent, ProductDetailComponent, ProductCreateComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
