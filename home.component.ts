import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formValue !:FormGroup;
  ProductData !:any;
  filteredProductData: any;
  searchTerm: string = '';
  

  constructor(private formbuilder: FormBuilder,private api: ApiService, private router: Router) { }

  ngOnInit(): void {

   this.formValue = this.formbuilder.group({
      Product: [''],
      Description: [''],
      Categorie: [''],
      Image: [''],
      prix: [''],
      
    });

   
  
    this.getAllProduct();
  
  }

  getAllProduct(){
    this.api.getAllProduct()
    .subscribe(res=>{
      this.ProductData=res;
      this.filteredProductData=[...this.ProductData];
    })
  }

  onSearch() {
    if (this.searchTerm.trim() !== ''){
    
      this.filteredProductData = this.ProductData.filter((product: any) =>
        product.Product.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    
  }else {
      this.filteredProductData = [...this.ProductData];
    }
  }
  
  

  

  deleteProduct(row : any){

    if(confirm('Are you sure do delete'))
    this.api.deleteProduct(row.id)
    .subscribe(res=>{
      alert("Product deleted");
      this.getAllProduct();
    },err=>{
      alert("something went wrong");
      
    })
    
  }

  onEdit(productId: any) {
    this.router.navigate(['/edit-product', productId]);
  }

    
  




  
  

}
