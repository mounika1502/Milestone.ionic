import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raw-product',
  templateUrl: './raw-product.page.html',
  styleUrls: ['./raw-product.page.scss'],
})
export class RawProductPage implements OnInit {
 products:any=[];
  constructor() { 
    this.get()
  }

  ngOnInit() {
  }
  get(){
  // if(this.text.UserType=='admin'){
    fetch("https://happy-erin-leather-jacket.cyclic.app/raw/getrawproduct", {
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
  // else{
  //       //This is for product getting (gett) call 
  //       var data = {
  //         mobile :this.text.mobile
  //       }   
  //       fetch("https://happy-erin-leather-jacket.cyclic.app/raw/getraw", {
  //      method:'post',
  //      headers:{
  //        "Access-Control-Allow-Origin": "*",
  //        "Content-Type":'application/json'
  //      },
  //      body:JSON.stringify(data)
      
  //    }).then(res=> res.json())
  //    .then(result=>{ 
  //      console.log(result),
  //      this.products = result.RawInfo
  //      console.log(this.products)
  //      }
  //      )     
  //      .catch(error => console.log('error',error))
    
  // }
}


