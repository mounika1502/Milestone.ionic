import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shippers',
  templateUrl: './shippers.page.html',
  styleUrls: ['./shippers.page.scss'],
})
export class ShippersPage implements OnInit {  

    searchtext:any
    shippers:any=[]
    text: any;
    aa: any;
    data: any;
    constructor() {
      this.getProduct()
     }
  
    ngOnInit() {
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa=this.text.UserType
      console.log(this.aa)
    }
  
    getProduct(){    
      fetch("https://ionic-node.vercel.app/shippers/getshipper", {
     method:'get',
     headers:{
       "Access-Control-Allow-Origin": "*",
       "Content-Type":'application/json'
     },
    
   }).then(res=> res.json())
   .then(result=>{ 
     console.log(result),
     this.shippers = result.ShipperInfo
     }
     )     
     .catch(error => console.log('error',error))
  }
  
  description(shippers:any){
    this.data=shippers
    window.location.href=("./shipper-data")
    localStorage.setItem('Shippers',JSON.stringify(shippers));
    console.log(shippers)  
  }
  
  }
  
  


