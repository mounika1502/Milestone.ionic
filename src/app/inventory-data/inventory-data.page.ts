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
    this.data=products   
    localStorage.setItem('InventoryProduct',JSON.stringify(products))   
    console.log(products)
  }

}
