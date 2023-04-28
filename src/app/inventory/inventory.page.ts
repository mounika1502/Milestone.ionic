import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
       

text: any;
searchtext:any
getCartDetails: any = [];
filePath:any;
products:any=[]
showElement= true;
product: any;
textaws: any;
data: any;
constructor( private router:Router,private service:UploadService) { 
 }
ngOnInit(): void {
  this.textaws = JSON.parse(localStorage.getItem('aws')||'{}') 
  console.log(this.textaws) 
  this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
   console.log(this.text) 
   this.getProduct(); 
   this.getCartDetails = JSON.parse(localStorage.getItem('anunya') || '{}');
}
 //this is for quantity function
 quantity:number=1;
 i=1
 plus(){
   if(this.i !=0){
     this.i++;
     this.quantity=this.i;
   }
 }
 minus(){
   if(this.i !=1){
     this.i--;
     this.quantity=this.i;
   }
 } 
 //This is for product getting (gett) call 
 getProduct(){
   if(this.text.UserType=='admin'){
    fetch("http://localhost:7500/products/getproducts", {
      method:'get',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
  
    }).then(res=> res.json())
    .then(result=>{ 
      console.log(result),
      this.products = result.Products
      localStorage.setItem('product',JSON.stringify(this.products))
      }
      )     
      .catch(error => console.log('error',error))
  }else{
    var data={
      mobile:this.text.mobile
    }    
     fetch("http://localhost:7500/products/getproduct", {
    method:'post',
    headers:{
      "Access-Control-Allow-Origin": "*",
      "Content-Type":'application/json'
    },
    body:JSON.stringify(data)
  }).then(res=> res.json())
  .then(result=>{ 
    console.log(result),
    this.products = result.ProductInfo
    localStorage.setItem('product',JSON.stringify(this.products))
    }
    )     
    .catch(error => console.log('error',error))
  }

}
//This is for product delete
delete(prodId:any){  

 console.log(Number)
 Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if(result.isConfirmed==true)
  {
   fetch("http://localhost:7500/products/deleteproduct/" + prodId,{
    method:'DELETE',
    headers:{
      "access-Control-Allow-Origin":"*"
    },
   })
   .then(response => response.json())
   .then(result=>{
    console.log(result)
    this.getProduct()
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}
  })     
   .catch(err =>
    console.log(err))    
} 

description(product:any){
  window.location.href=("/inventory-data")
    localStorage.setItem('Inventory',JSON.stringify(product));
    console.log(product)
  }

}
