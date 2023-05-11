import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raw-product',
  templateUrl: './raw-product.page.html',
  styleUrls: ['./raw-product.page.scss'],
})
export class RawProductPage implements OnInit {
 products:any=[];
  raw: any;
  data: any;
  text: any;
  aa: any;
  mobile: any;
  constructor() { 
    this.get()
  }

  ngOnInit() {

    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.mobile = this.text.mobile
      console.log(this.mobile)
      this.aa = this.text.UserType
      console.log(this.aa)

    if(this.aa==='admin'){
      fetch("https://brave-pink-clothes.cyclic.app/raw/getrawproduct", {
        method:'get',
        headers:{
          "Access-Control-Allow-Origin": "*",
          "Content-Type":'application/json'
        },   
       
      }).then(res=> res.json())
      .then(result=>{ 
        console.log(result),
        this.products = result.RawInfo
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
          fetch("https://brave-pink-clothes.cyclic.app/raw/getraw", {
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
  
  get(){
 
}

  view(products:any){
    this.raw = products
    window.location.href=("./raw-data")
    localStorage.setItem('Raw',JSON.stringify(products));
    console.log(products)
  }
}


