import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.page.html',
  styleUrls: ['./inventory-edit.page.scss'],
})
export class InventoryEditPage implements OnInit {
  data: any;
  productForm: any;

  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup({
      sid: new FormControl(0),
      // imgurl :new FormControl(""),
      prodId: new FormControl(""),
      name: new FormControl(""),
      color: new FormControl(""),
      size: new FormControl(""),
      stone: new FormControl(""),
      thick: new FormControl(""),
      qnt: new FormControl("0"),
      Quantity: new FormControl(""),
      price: new FormControl(""),
      region: new FormControl(""),
      quality: new FormControl(""),
      date: new FormControl(""),
      mobile: new FormControl(""),
      PhoneNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      description: new FormControl(""),
      manufacturername: new FormControl(""),
      // filePath: new FormControl()
    })

    const localdata=localStorage.getItem('InventoryProduct')
    if(localdata!=null){
      this.data = JSON.parse(localdata)
    }
  }
  update(){

  }

}
