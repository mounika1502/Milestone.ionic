import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.page.html',
  styleUrls: ['./order-status.page.scss'],
})
export class OrderStatusPage implements OnInit {
  orderdata: any;
  text: any = [] 
  manumob: any;
  manuemail: any;
  testi: any;
  datai: any;
  isModalOpen = true;
  Orders: any;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.text = JSON.parse(localStorage.getItem('Login') || '{}')
    console.log(this.text)
    this.manumob = this.text.mobile
    console.log(this.manumob)
    this.manuemail = this.text.Email
    console.log(this.manuemail)

    this.orderdata = new FormGroup({
      OrderStatus: new FormControl(),
      ApproximateTime: new FormControl(),
      Message: new FormControl('Your Order has been Changed'),
      Email: new FormControl(this.manuemail)

    })
    console.log(this.orderdata.value.OrderStatus)
    console.log(this.orderdata.value.ApproximateTime)

    this.Orders = JSON.parse(localStorage.getItem('ids') || '{}')
    console.log(this.Orders)
    this.testi = this.Orders.ordersId
    this.datai = this.Orders.productId
  }

  setOpen() {   
    window.location.href='./orders'
  }

  close(){
   this.isModalOpen = false;
   window.location.href='./orders'
   }

  async failedAlert() {
    const alert = await this.alertController.create({
      header: 'Something went wrong!',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Updated Successfully!...',
      buttons: ['OK']
    });
    await alert.present();
  }

  data:any;
  Update(){
    console.log(this.orderdata.value.OrderStatus)
    console.log(this.orderdata.value.ApproximateTime)
    console.log(this.orderdata.value)
    console.log(this.testi)
    console.log(this.datai)
    var body={
      _id:this.testi,
      OrderItems_id:this.datai,
      OrderStatus:this.orderdata.value.OrderStatus,
      ApproximateTime:this.orderdata.value.ApproximateTime
    }

    fetch("https://milestone-096608973980.herokuapp.com/orderRoute/orderStatus",{
      method:"POST",
      headers:{
        "access-Control-Allow-Origin":"*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result)
      if(result.status == 'success'){
        this.presentAlert()
      }else{
       this.failedAlert()
      }
    //  this.close();
    
  
    }
    ).catch(err =>
      console.log('error',err))  
  }

}
