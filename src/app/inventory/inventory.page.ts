import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  text: any;
  searchtext: any
  getCartDetails: any = [];
  filePath: any;
  products: any = []
  showElement = true;
  product: any;
  textaws: any;
  data: any;
  aa: any;
  List: any = [];

  constructor(private router: Router, private service: UploadService) {
    // this.delete()
  }
  ngOnInit(): void {

    this.text = JSON.parse(localStorage.getItem('Login') || '{}')
    console.log(this.text)
    this.aa = this.text.UserType
    console.log(this.aa)

    this.textaws = JSON.parse(localStorage.getItem('aws') || '{}')
    console.log(this.textaws)
    this.text = JSON.parse(localStorage.getItem('Login') || '{}')
    console.log(this.text.mobile)
    this.getProduct();
    this.getCartDetails = JSON.parse(localStorage.getItem('anunya') || '{}');

    var data = {
      mobile: this.text.mobile
    }
    fetch("https://milestone-096608973980.herokuapp.com/products/getproduct", {
      method: 'post',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(result => {
        console.log(result),
          this.products = result.ProductInfo
        console.log(this.products)
      }
      )
    this.List = this.products.filter((item: any) => {
      return item.Quantity == '7'
    });
    console.log(this.List)
  }


  getProduct() {
    if (this.text.UserType == 'admin') {
      fetch("https://milestone-096608973980.herokuapp.com/products/getproducts", {
        method: 'get',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": 'application/json'
        },

      }).then(res => res.json())
        .then(result => {
          console.log(result),
            this.products = result.Products
          localStorage.setItem('product', JSON.stringify(this.products))
        }
        )
        .catch(error => console.log('error', error))
    } else {

      var data = {
        mobile: this.text.mobile
      }
      fetch("https://milestone-096608973980.herokuapp.com/products/getproduct", {
        method: 'post',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(result => {
          console.log(result),
            this.products = result.ProductInfo
             
          console.log(this.products)
          localStorage.setItem('product', JSON.stringify(this.products))
        }
        )
        .catch(error => console.log('error', error))
    }
  }

  description(product: any) {
    window.location.href = ("/inventory-data")
    localStorage.setItem('Inventory', JSON.stringify(product));
    console.log(product)
  }

  delete() {
    this.List = this.products.filter((item: any) => {
      return item.Quantity == '7'
    });
    console.log(this.List)

    // fetch("https://milestone-096608973980.herokuapp.com/products/deleteproduct/" + prodId,{
    //   method:'DELETE',
    //   headers:{
    //     "access-Control-Allow-Origin":"*"
    //   },
    //  })
    //  .then(response => response.json())
    //  .then(result=>{
    //   console.log(result)  

    // })

    //  .catch(err =>
    //   console.log(err))    
  }
}
