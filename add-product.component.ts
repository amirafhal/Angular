import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel } from '../home/home.modal';
import { ApiService } from '../shared/api.service';




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
formValue !:FormGroup;
ProductModelObj :ProductModel=new ProductModel();
ProductData !:any;


constructor(private formbuilder: FormBuilder, private api: ApiService) { }
ngOnInit(): void {
this.formValue=this.formbuilder.group({
  Product : [''],
  Description : [''],
  Categorie : [''],
  Image : [''],
  prix : ['']
})
this.getAllProduct();
}

getAllProduct(){
  this.api.getAllProduct()
  .subscribe(res=>{
    this.ProductData=res;
  })
}


postArticleDetails(){
  this.ProductModelObj .Product=this.formValue.value.Product;
  this.ProductModelObj .Description=this.formValue.value.Description;
  this.ProductModelObj .Categorie=this.formValue.value.Categorie;
  this.ProductModelObj .Image=this.formValue.value.Image;
  this.ProductModelObj .prix=this.formValue.value.prix;
  this.api.postArticle(this.ProductModelObj)
  .subscribe(res=>{
  console.log(res);
  alert("Product added successfully")
  this.formValue.reset();
  this.getAllProduct();
  },err=>{
  alert("something went wrong");
  })
  }


  


}
