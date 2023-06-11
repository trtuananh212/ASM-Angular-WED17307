import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:"",component:ProductlistComponent},
  {path:"product-create",component:ProductCreateComponent},
  {path:"product-create",component:ProductCreateComponent},
  {path:"products/update:id",component:ProductUpdateComponent},
  {path:"products/detail:id",component:ProductDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
