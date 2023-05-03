import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

 

finalcartItem: any = [];
text: any;
mobile: any;
manufacturername: any;
Mobile: any;
randomNumber: any;

grandtotal: any;
getCartDetails: any = [];
Firstname: any;
Lastname: any;

Phone: any;
Address: any;
City: any;
State: any;
Pincode: any;
Email: any;
removeall: any
name: any;
price: any;
quality: any;
size: any;
thick: any;
description: any;
region: any;
date: any;
qnt: any;
prodId: any;
Totalprice: any;
OrderId: any;
imgurl: any;
Quantity: any;
pop = false;
pickupPincode: any;
pickup: any;
text2: any;
pickupdrop: any;
pincode: any;
cityState: any;
dataqnt: any = []
Obj: any;
products: any=[]
qnty: any;
textdata: any=[]
text3: any=[]
test: any;
data: any=[]
alertCtrl: any;
public alertButtons = ['OK'];
public alertInputs = [
{
  placeholder: 'Name',
},
{
  placeholder: 'Nickname (max 8 characters)',
  attributes: {
    maxlength: 8,
  },
},
{
  type: 'number',
  placeholder: 'Age',
  min: 1,
  max: 100,
},
{
  type: 'textarea',
  placeholder: 'A little about yourself',
},
];

constructor() { }
ngOnInit(): void {
  this.text = JSON.parse(localStorage.getItem('Login') || '{}')
  console.log(this.text.Email)
  const localdata1 = localStorage.getItem('orderid')
  if (localdata1 != null) {
    this.text2 = JSON.parse(localdata1)
    console.log(this.text2)
  }
  // this.dataqnt = JSON.parse(localStorage.getItem('anunya') || '{}')
  // this.qnty = this.dataqnt[0].Quantity
  // console.log(this.qnty)
}
popup() {
  this.pop = true;
}
cash1() {

  var body = {
    Email: this.text.Email
  }
      this.finalcartItem = localStorage.getItem('anunya')
  console.log(this.finalcartItem);
  this.randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
  console.log(this.randomNumber)
  localStorage.setItem('orderid', JSON.stringify(this.randomNumber))
  var Obj = {
    "Firstname": this.Firstname,
    "Lastname": this.Lastname,
    "pincode": this.pincode,
    "Phone": this.Phone,
    "Email": this.Email,
    "Address": this.Address,
    //  "City":this.City,
    "State": this.State,
    "date": new Date().toLocaleString(),
    "OrderId": this.randomNumber,
    "OrderItems": JSON.parse(this.finalcartItem)
  }
  var requestOptions = {
    method: 'POST',
    body: Obj
  };
  console.log(Obj);
  if (Obj.Phone == this.text.mobile) {
    console.log(JSON.stringify(Obj))   //product details with user details
    fetch("https://brave-pink-clothes.cyclic.app/orderRoute/post", {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(Obj)
 
    }).then(response => response.json())

      .then(result => {
        console.log(result)
   
        this.UpdateQnty()
        // localStorage.removeItem('anunya');
      })
      .catch(error => console.log('error', error));

  alert("Added Successfully")
      window.location.href = ('./success');
      localStorage.removeItem('anunya');
     
    
    


  }
// debugger
fetch("https://brave-pink-clothes.cyclic.app/orderRoute/orderemail", {
  method:'post',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type":'application/json'
    },
  body: JSON.stringify(body)
    
    }).then(res => res.json())
.then(result => {
  console.log(result)
}
)
.catch(error => console.log('error', error))
}
close() {
this.pop = false;
}
async getCityState() {
const url = `https://api.postalpincode.in/pincode/${this.pincode}`;
const response = await fetch(url);
const data = await response.json();
if (data[0].Status === 'Success') {
  const postOffice = data[0].PostOffice[0];
  this.cityState = ` ${postOffice.State}`;
  this.State = ` ${postOffice.District}`;
} else {
  this.cityState = 'Invalid Pincode';

}
}
// getProduct(){
//   var data={
//     mobile:this.text.mobile
//   }    
//    fetch("http://localhost:7500/products/getproduct", {
//   method:'post',
//   headers:{
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type":'application/json'
//   },
//   body:JSON.stringify(data)
// }).then(res=> res.json())
// .then(result=>{ 
//   console.log(result),
//   this.products = result.ProductInfo
//   console.log(this.products.Quantity)
//   }
//   )     
//   .catch(error => console.log('error',error))
// }
UpdateQnty() {
var Obj = {
  _prodId: this.dataqnt[0].prodId,
  Quantity: this.dataqnt[0].Quantity
}
console.log(this.dataqnt[0]._prodId)
console.log(this.dataqnt[0].Quantity)
fetch("http://localhost:7500/products/editqnt/" + this.dataqnt[0].prodId, {
  method: 'POST',
  headers: {
    "access-Control-Allow-Origin": "*",
    "Content-Type": 'application/json'
  },
  body: JSON.stringify(Obj),
})
  .then(response => response.json())
  .then(result => {
    console.log(result),
      console.log(Obj)

    this.products = JSON.parse(result)
  }
  ).catch(err =>
    console.log(err))
}


}
