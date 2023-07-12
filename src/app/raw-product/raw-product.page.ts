import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-raw-product',
  templateUrl: './raw-product.page.html',
  styleUrls: ['./raw-product.page.scss'],
})
export class RawProductPage {
 products:any=[];
  raw: any;
  data: any;
  text: any;
  aa: any;
  mobile: any;
  cartItem:number=0
  searchtext:any

  constructor(public Loading:LoadingController,) { 
    
  }

  async ngOnInit() {
    const Loading = await this.Loading.create({
      message : "Loading...",
      spinner:'crescent'      
    }) 
    await Loading.present()

    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.mobile = this.text.mobile
      console.log(this.mobile)
      this.aa = this.text.UserType
      console.log(this.aa)

    if(this.aa==='Dealer'){
      fetch("https://milestone-096608973980.herokuapp.com/raw/getrawproduct", {
        method:'get',
        headers:{
          "Access-Control-Allow-Origin": "*",
          "Content-Type":'application/json'
        },   
       
      }).then(res=> res.json())
      .then(result=>{ 
        console.log(result),
        this.products = result.RawInfo
        Loading.dismiss() 
        console.log(this.products)
        localStorage.setItem('mounika',JSON.stringify(this.products))
        }
        )     
        .catch(error => console.log('error',error))
    }
    else{   
          var data = {
            mobile :this.text.mobile
          }   
          fetch("https://milestone-096608973980.herokuapp.com/raw/getraw", {
         method:'post',
         headers:{
           "Access-Control-Allow-Origin": "*",
           "Content-Type":'application/json'
         },
         body:JSON.stringify(data)
        
       }).then(res=> res.json())
       .then(result=>{ 
         console.log(result),
         this.products = result.RawInfo
         Loading.dismiss() 
         console.log(this.products)
         }
         )     
         .catch(error => console.log('error',error))
    }
    const localdata=localStorage.getItem('mounika')
    if(localdata!=null){
      this.data = JSON.parse(localdata)
    }
  }
  
  move(){
    window.location.href="/add-product"
  }

  view(products:any){
    this.raw = products
    window.location.href=("./raw-data")
    localStorage.setItem('Raw',JSON.stringify(products));
    console.log(products)
  }
}


