import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './edit-product/edit-product.component';




const routes: Routes = [
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  { path: 'add-product', component: AddProductComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'edit-product', component: EditProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
