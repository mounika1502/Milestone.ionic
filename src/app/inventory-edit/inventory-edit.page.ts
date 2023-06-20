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
  aa: any;
  text: any;
  product: any;

  constructor() { }

  ngOnInit() {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.aa=this.text.UserType
    console.log(this.aa)
    this.productForm = new FormGroup({
      prodId:new FormControl(""),
      name: new FormControl(""),
      color: new FormControl(""),
      size: new FormControl(""),
      stone: new FormControl(""),
      thick: new FormControl(""),
      Quantity: new FormControl(""),
      price: new FormControl(""),
      region: new FormControl(""),
      quality: new FormControl(""),
      date: new FormControl(""),
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
  update(id:any){
      console.log(this.productForm.value) 
      localStorage.setItem('InventoryProduct',JSON.stringify(this.product));
      fetch("https://sore-gold-coyote-wrap.cyclic.app/products/editProduct/" + id,  {
        method: 'PUT',
        headers: {
          "access-Control-Allow-Origin": "*",        
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.productForm.value),       // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
      })
        .then(response => response.json())
        .then(result => {
          this.product = result
          console.log(result)
          console.log(this.product)
         alert('updated...') 
          // window.location.reload()
          window.location.href=("/inventory-data") 
         // window .location.reload()             
        }
        ).catch(err =>
          console.log(err))  
    }
  }


