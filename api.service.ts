import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { ProductModel } from '../home/home.modal';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

postArticle(data : any){
return this.http.post("http://localhost:3000/posts", data)


}

getArticle(data :any){
return this.http.get<any>("http://localhost:3000/posts")
.pipe(map((res:any)=>{ return res;
}))
}

getAllProduct(){
  return this.http.get<any>("http://localhost:3000/posts").pipe(map(res=><any>res));
}

deleteProduct(id :number){
  return this.http.delete<any>("http://localhost:3000/posts/"+id)
  .pipe(map((res:any)=>{ return res;
  }))
}

updateProduct(data: any, id: number){
  return this.http.put<any>("http://localhost:3000/posts/" + id, data)
    .pipe(map((res: any) => res));
}

getProductById(id: number){
  return this.http.get<ProductModel>("http://localhost:3000/posts/" + id)
    .pipe(map((res: any) => res));
    console.log(id);
}
}
