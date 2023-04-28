import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  OrderItems:any;
  cartItem:number = 0;
  Totalprice:any;
Get: any;
sign: any=[]
qnt:any;
cart:any;
  getCartd: any=[]
  data: any;
  constructor() { }

  ngOnInit() {
        this.CartDetails() // get the data
    this.loadCart() // total product amount
    this.cartItemFunc()
    this.anunya()
    
    const localdata=localStorage.getItem('anu')
    if(localdata!=null){
      this.data = JSON.parse(localdata)
    }
    this.cartItemFunc();
 
  }
 
  getCart: any = [];
  getCartDetails: any = [];
  // get the details into localstorage
  anunya(){
    if (localStorage.getItem('uma')) {
    this.getCart = JSON.parse(localStorage.getItem('uma') || '{}');
    }
  }
  CartDetails() {
    if (localStorage.getItem('anunya')) {          // localCartis a key
      this.getCartDetails = JSON.parse(localStorage.getItem('anunya') || '{}');
    }
  }
  incQnt(prodId: any, qnt: any,Qnty:any) {  // increase the qnt product 
    for (let i = 0; i < this.getCartDetails.length; i++) {   // this is forloop
      if (this.getCartDetails[i].prodId === prodId) {  // based on the prodId
        if (qnt != 1000)
          this.getCartDetails[i].qnt = parseInt(qnt) + 1;  // increase the qnt max5
          this.getCartDetails[i].Quantity =Qnty-1
      }
    }
    localStorage.setItem('anunya', JSON.stringify(this.getCartDetails)); // localCart is akey ,getCartDetails is aarray
    this.loadCart()
  }

  decQnt(prodId: any, qnt: any,Qnty:any) {   // decrease the qunt product
    for (let i = 0; i < this.getCartDetails.length; i++) {  // thi is for loop
      if (this.getCartDetails[i].prodId === prodId) { // decrease the product based on the id
        if (qnt != 0)
          this.getCartDetails[i].qnt = parseInt(qnt) - 1;  // decrease the product lessthan 1
          this.getCartDetails[i].Quantity =Qnty+1
      }
    }
    localStorage.setItem('anunya', JSON.stringify(this.getCartDetails)); // localCart is akey ,getCartDetails is aarray
    this.loadCart()
  }
  // total amount
  grandtotal: any;
  //total function
  loadCart() {
    if (localStorage.getItem('anunya')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('anunya') || '{}');
      this.grandtotal = this.getCartDetails.reduce(function (acc: any, val: { price: any; qnt: any; }) {   // acc is a name,val isa rate
        return acc + (val.price * val.qnt);  // return the total amount
      }, 0);
    }
  }
  //remove all item
  removeall() {
    localStorage.removeItem('anunya');
    this.getCartDetails = [];
    this.grandtotal = 0;
    window .location.reload()
  }
  // single delete
  singleDelete(cart: any) {
    console.log(cart);  // show in console
    
    if (localStorage.getItem('anunya')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('anunya') || '{}');  // get the details in localstorage
     
      for (let i = 0; i < this.getCartDetails.length; i++) {   // for loop
        if (this.getCartDetails[i].prodId === cart) {    //show based on id to delete product 
          this.getCartDetails.splice(i, 1);  // delete product one by one
          localStorage.setItem('anunya', JSON.stringify(this.getCartDetails)); // localcartis akey, getCartDetails is array
          this.loadCart();
          this.CartDetails();
          this.cartItemFunc()  
        }
      }
    }
   
      window .location.reload()

  
    
      // localStorage.removeItem('anunya');
      

    }
    
  itemsCart: any = [];  // itemsCart is a global array
  addCart(category: any) {
    let cartDataNull = localStorage.getItem('anunya'); // cartDataNull is a variable , localCart is a key,
    if (cartDataNull == null) {
      let storeDataGet: any = []; // storeDataGet is a array
      storeDataGet.push(category); // push the category into localstorage
      localStorage.setItem('anunya',JSON.stringify(storeDataGet));
     
      window.location.reload(
        
      )
  //     Swal.fire('Added Successfully!', '', 'success').then(() => {
  //       window.location.reload()
  //    } );
     //localCart is key ,storeDataGet is To convert the stringify
    }
    
    else {
      var id = category.prodId;  // this is product id represented
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('anunya') || '{}'); // 
      for (let i = 0; i < this.itemsCart.length; i++) {   // i is a loop vice (inc is the products)
        if (parseInt(id) === parseInt(this.itemsCart[i].prodId)) {    // In parseInt to store itemcart array in index
          this.itemsCart[i].qnt = category.qnt;  // this qnt is inc and dec the product
          index = i;
          break;  // to break the function (end)
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
   
   
      
}
cartItemFunc(){
  if(localStorage.getItem('anunya') != null){
  var cartCount = JSON.parse(localStorage.getItem('anunya') || '{}');
  this.cartItem = cartCount.length;
  console.log(this.cartItem)

}
}
  

}