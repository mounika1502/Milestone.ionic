import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  finalcartItem: any = [];
  text: any;
  randomNumber: any;  
  Firstname: any;
  Lastname: any;
  Phone: any;
  Address: any;
  City: any;
  State: any;
  Pincode: any;
  Email: any;
  OrderId: any;
  pincode: any;
  cartItem : number=0
  pop = false; 
  text2: any;  
  cityState: any;
  dataqnt: any = []
  products: any=[]
  qnty:any;

  constructor(private router: Router,private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Order Placed Successfully',
      buttons: ['OK']
    });  
    await alert.present();  
    await alert.onDidDismiss().then(() => {
      this.router.navigateByUrl('/success');
    });
  }

  async FailedAlert() {
    const alert = await this.alertController.create({
      header: 'Please provide your registered mobile number and Email',
      buttons: ['OK']
    });  
    await alert.present();
  }

  ngOnInit(): void {
    this.text = JSON.parse(localStorage.getItem('Login') || '{}')
    console.log(this.text.Email)
    console.log(this.text.mobile)

    const localdata1 = localStorage.getItem('orderid')
    if (localdata1 != null) {
      this.text2 = JSON.parse(localdata1)
      console.log(this.text2)
    }

    this.dataqnt = JSON.parse(localStorage.getItem('anunya') || '{}')
    this.qnty = this.dataqnt[0].Quantity
    console.log(this.qnty)
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
      fetch("https://milestone-096608973980.herokuapp.com/orderRoute/post", {
        method: 'POST',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(Obj)
      }).then(response => response.json())
        .then(result => {
          console.log(result)
          if(result.status == 'failed'){
          this.FailedAlert()
          }else{
         this.presentAlert()
            this.UpdateQnty()
          }
               
        })
        .catch(error => console.log('error', error));

    
        localStorage.removeItem('anunya');     
    } else {
      this.FailedAlert()
        window.location.reload()
    }

  // debugger
  fetch("https://milestone-096608973980.herokuapp.com/orderRoute/orderemail", {
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

getProduct(){
  var data={
    mobile:this.text.mobile
  }    
   fetch("https://milestone-096608973980.herokuapp.com/products/getproduct", {
  method:'post',
  headers:{
    "Access-Control-Allow-Origin": "*",
    "Content-Type":'application/json'
  },
  body:JSON.stringify(data)
}).then(res=> res.json())
.then(result=>{ 
  console.log(result),
  this.products = result.ProductInfo
  console.log(this.products.Quantity)
  }
  )     
  .catch(error => console.log('error',error))
}


UpdateQnty() {
  var Obj = {
    _prodId: this.dataqnt[0].prodId,
    Quantity: this.dataqnt[0].Quantity
  }
  console.log(this.dataqnt[0]._prodId)
  console.log(this.dataqnt[0].Quantity)
  
  fetch("https://milestone-096608973980.herokuapp.com/products/editqnt/" + this.dataqnt[0].prodId, {
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
