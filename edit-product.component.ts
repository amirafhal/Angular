import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel } from '../home/home.modal';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  dataid !: any;
  formValue !:FormGroup;
  ProductModelObj :ProductModel=new ProductModel();
  ProductData !:any;
  data !:any

  constructor(private formBuilder: FormBuilder, private api: ApiService,private route: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      Product: [''],
      Description: [''],
      Categorie: [''],
      Image: [''],
      prix: [''],
    });


    this.route.params.subscribe(params => {
      this.dataid = params['id'];
      this.getProductById(this.dataid);
      console.log('ProductModelObj:', this.data);
    });
    
    
  
  }


getProductById(id: any) {
  this.api.getProductById(id).subscribe(res => {
    this.ProductModelObj = res;
    this.formValue.patchValue({
      Product: res.Product,
      Description: res.Description,
      Categorie: res.Categorie,
      Image: res.Image,
      prix: res.prix
    });
  });
}

  getAllProduct(){
    this.api.getAllProduct()
    .subscribe(res=>{
      this.ProductData=res;
    })
  }



  updateProductDetails() {
    this.api.updateProduct(this.formValue.value, this.ProductModelObj.id)
      .subscribe(res => {
        alert("Update successfuly");
        this.getAllProduct();
      }), (err) => {
        alert("something went wrong");
      }
  }



}
