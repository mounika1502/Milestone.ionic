import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  text: any;
  searchtext:any
  getCartDetails: any = [];
  filePath:any;
  products:any=[]
  showElement= true;
  product: any;
  textaws: any;
  data: any;
    aa: any;
  constructor( private router:Router,private service:UploadService) { 
   }
  ngOnInit(): void {
  
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.aa = this.text.UserType
    console.log(this.aa)
  
    this.textaws = JSON.parse(localStorage.getItem('aws')||'{}') 
    console.log(this.textaws) 
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text.mobile) 
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
   getProduct(){
     if(this.text.UserType=='admin'){
      fetch("https://earmuffs-ox.cyclic.app/products/getproducts", {
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
       fetch("https://earmuffs-ox.cyclic.app/products/getproduct", {
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
  
  
  description(product:any){
    window.location.href=("/inventory-data")
      localStorage.setItem('Inventory',JSON.stringify(product));
      console.log(product)
    }

}
