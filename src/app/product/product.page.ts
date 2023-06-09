import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  products:any=[];
 
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
  Image:any;
  Name:any;
  dealer:any;
  data: any;
  cartItem: number=0;
  aa: any;
  text: any;
  
  constructor(public Loading:LoadingController,){
    this.get();
  }
  
  
    ngOnInit(): void {
      this.get();  
      const localdata=localStorage.getItem('anu')
      if(localdata!=null){
        this.data = JSON.parse(localdata)
      }
      this.cartItemFunc();
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa=this.text.UserType
      console.log(this.aa)
    }

    
  
     
    
  //increase the cartItem product
  
  anu(cart:any){
    window.location.href=("/galaxyroute")
    localStorage.setItem('anu',JSON.stringify(cart));
    // localStorage.setItem('local',JSON.stringify(this.cart1));
    console.log(cart)
   
  }

  
    
 
    async get() {
      const Loading = await this.Loading.create({
        message: "Loading...",
        spinner: 'crescent'
      })
      await Loading.present()
      console.log('getstoreDealer')
      fetch("https://milestone-096608973980.herokuapp.com/dealerfilterRouter/dealerfilter", {
        method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",
      },

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.dealer = result.dealerfilter
          Loading.dismiss()
        console.log(this.dealer) 
        // window.location.reload()
      }
      ).catch(err =>
        console.log(err))
  }
  getproducts(data:any){
    localStorage.setItem('rahul',JSON.stringify(data))
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
    // Swal.fire('Added to Cart!', '', 'success').then(() =>
    //  {
    //   window .location.reload()
    // });
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
