import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-data',
  templateUrl: './inventory-data.page.html',
  styleUrls: ['./inventory-data.page.scss'],
})
export class InventoryDataPage implements OnInit {
  data: any;
  text: any;
  aa: any;

  constructor() { }

  ngOnInit() {
    const localdata=localStorage.getItem('Inventory')
    if(localdata!=null){
      this.data = JSON.parse(localdata)
    }
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.aa=this.text.UserType
    console.log(this.aa)
  }

  edit(products:any){
    window.location.href=("/inventory-edit")
    this.data=products   
    localStorage.setItem('InventoryProduct',JSON.stringify(products))   
    console.log(products)
  }

  delete(prodId:any){ 
      fetch("https://tiny-ruby-centipede-hat.cyclic.app/products/deleteproduct/" + prodId,{
       method:'DELETE',
       headers:{
         "access-Control-Allow-Origin":"*"
       },
      })
      .then(response => response.json())
      .then(result=>{
       console.log(result)
    
     })
   
        
      .catch(err =>
       console.log(err))    
   } 

  }
