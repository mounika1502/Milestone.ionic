import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-data',
  templateUrl: './inventory-data.page.html',
  styleUrls: ['./inventory-data.page.scss'],
})
export class InventoryDataPage implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
    const localdata=localStorage.getItem('Inventory')
    if(localdata!=null){
      this.data = JSON.parse(localdata)
    }
  }

  edit(products:any){
    window.location.href='./inventory-edit'
    this.data=products   
    localStorage.setItem('InventoryProduct',JSON.stringify(products))   
    console.log(products)
  }

  delete(prodId:any){ 
      fetch("http://localhost:7500/products/deleteproduct/" + prodId,{
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
