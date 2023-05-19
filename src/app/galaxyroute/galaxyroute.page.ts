import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-galaxyroute',
  templateUrl: './galaxyroute.page.html',
  styleUrls: ['./galaxyroute.page.scss'],
})
export class GalaxyroutePage implements OnInit {
  data: any;
  cartItem:number = 0;
  data2: any=[]



  ngOnInit(): void {
   

    const localdata=localStorage.getItem('anu')
    if(localdata!=null){
      this.data = JSON.parse(localdata)
    }
    const localdata2=localStorage.getItem('tarak')
    if(localdata2!=null){
      this.data2 = JSON.parse(localdata2)
      console.log(this.data2)
    }
    this.cartItemFunc();
  }
  
  itemsCart: any = [];  // itemsCart is a global array
  addCart(category: any) {
    let cartDataNull = localStorage.getItem('anunya'); // cartDataNull is a variable , localCart is a key,
    if (cartDataNull == null) {
      let storeDataGet: any = []; // storeDataGet is a array
      storeDataGet.push(category); // push the category into localstorage
      localStorage.setItem('anunya',JSON.stringify(storeDataGet));
    }
    else {
      var id = category.prodId;  // this is product id represented
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('anunya') || '{}'); // 
      for (let i = 0; i < this.itemsCart.length; i++) {   // i is a loop vice (inc is the products)
        if (parseInt(id) === parseInt(this.itemsCart[i].prodId)) {    // In parseInt to store itemcart array in index
          this.itemsCart[i].qnt = category.qnt;  // this qnt is inc and dec the product
          index = i;
          break;  
        }
      }
      if (index == -1) {
        this.itemsCart.push(category);  // this line product item to push itemcart array
        localStorage.setItem('anunya', JSON.stringify(this.itemsCart));  //
      }
      else {
        localStorage.setItem('anunya', JSON.stringify(this.itemsCart));
      }
    }
   
     alert("Added to Cart...")
      window .location.reload()
   
    // window .location.reload()     
}
cartItemFunc(){
  if(localStorage.getItem('anunya') != null){
  var cartCount = JSON.parse(localStorage.getItem('anunya') || '{}');
  this.cartItem = cartCount.length;
  console.log(this.cartItem)
 
}
}

}
