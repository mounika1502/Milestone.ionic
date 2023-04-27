import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blackgalaxy',
  templateUrl: './blackgalaxy.page.html',
  styleUrls: ['./blackgalaxy.page.scss'],
})
export class BlackgalaxyPage implements OnInit {
  products:any=[];
  imgurl :any;
  prodId: any;
  name: any;
  color: any;
  size: any;
  thick: any;
  qnt: any;
  price: any;
  region: any;
  quality:any;
  date: any;
  mobile:any;
  description: any;
  manufacturername:any;
  PhoneNumber:any;
  searchtext:any;
  getbyName:any;

    cart: any;
    adddata:any=[]
    // cart1: any=[]
    filter: any;
    type:any;
  
  
  constructor(){
    this.get();
  }
  
  
    ngOnInit(): void {
     
      this.type=JSON.parse(localStorage.getItem('rahul')||'{}') ;
      
      this.name=this.type.name
      console.log(this.name)
     
      this.get();
      
    
    }
  
    
  
     
    
  //increase the cartItem product
  
  anu(cart:any){
    window.location.href=("/galaxyroute")
    localStorage.setItem('anu',JSON.stringify(cart));
    // localStorage.setItem('local',JSON.stringify(this.cart1));
    console.log(cart)
   
  }
  
  
   
  get() {
    console.log(this.name)
    fetch("http://localhost:7500/products/getbyName/" + this.name, {
      method: 'GET',
    headers: {
      "access-Control-Allow-Origin": "*",
  
    },
  
  })
    .then(response => response.json())
    .then(result => {
      console.log(result),
        this.products = result.product
  
      console.log(this.products)
  
    }
  
    ).catch(err =>
      console.log(err))
  }
  
  
  
  
  }
