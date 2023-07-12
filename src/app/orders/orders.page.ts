import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  searchtext: any
  data: any;
  datas:any=[]
  pop = false;
  orderdata!: FormGroup
  count = Number;
  popuporder = false;
  OrderStatus: any;
  ApproximateTime: any;
  aa: any = []
  text: any = []
  manumob: any;
  manuemail: any;
  text2: any;
  placed: any = []
  length: any;
  isModalOpen = false;
  testi: any;
  datai: any;
  texts: any;
  order: any = []
  List: any;
  orderi: any;
  collection: any;
  xyz: any;
  OrderItemData: any;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private alertController: AlertController,) {
    // this.Placed()
  }

  ngOnInit(): void {
    // this.getAll()
    this.Placed()

    const localdata1 = localStorage.getItem('orderid')
    if (localdata1 != null) {
      this.text2 = JSON.parse(localdata1)
      console.log(JSON.parse(localdata1))
    }

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
    this.texts = JSON.parse(localStorage.getItem('Orderstatus') || '{}')
    console.log(this.text)
    this.aa = this.texts
    console.log(this.aa)
    console.log(this.data)

  
  }

  autorefresh(event: any) {

    setTimeout(() => {

      event.target.complete()

      window.location.reload()
    }, 2000);
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

  orders(test: any, testid: any, dataid: any, OrderId: any) {
    this.testi = testid
    this.datai = dataid
    this.orderi = OrderId

    var IDS = JSON.parse(localStorage.getItem('ids') || '{}')
    IDS['ordersId'] = this.testi
    IDS['productId'] = this.datai
    IDS['orderId'] = this.orderi
    localStorage.setItem('ids', JSON.stringify(IDS))
    this.popuporder = true
    this.data = test;
    window.location.href = './order-status'
  }

  getAll(){
    var data ={
      mobile : '8179624522'
    }
    console.log(data)
    fetch("http://localhost:7500/orderRoute/manufacturerOrder", {
      method: "post",
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
     body:JSON.stringify(data)
    }).then(res => res.json())
      .then(result => {
        console.log(result)
        this.order = result.data
        console.log(this.order)
      })
    this.count = this.order.length;
   
  }

  // async getAllData() {
  //   try {
  //     const response = await fetch('http://localhost:7500/orderRoute/allorders'); // Replace with your API endpoint
  //     if (response) {
  //       const data = await response.json();
  //       console.log(data); // Do whatever you want with the data
  //        this.datas = data.orders
  //       this.xyz = data.count
  //       console.log(this.xyz)
       
  //       for(let i=0;i<this.datas.length;i++){
  //    this.OrderItemData =this.datas[i].OrderItems
  //       }
  //       console.log(this.OrderItemData)
  //     } else {
  //       console.error('Error:', response);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
  // async getStatus(text: any) {
  //   try {
  //     const response = await fetch('http://localhost:7500/orderRoute/getby/' + text); // Replace with your API endpoint
  //     if (response) {
  //       const data = await response.json();
  //       console.log(data); // Do whatever you want with the data
  //       this.datas = data.data

  //       console.log(this.datas)
  //     } else {
  //       console.error('Error:', response);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  // Placed() {
  //   this.List = this.order.filter((item: any) => {
  //     return item.OrderItems.filter((orderItem: any) => {
  //       return orderItem.OrderStatus == 'Placed';
  //     }).length > 0;
  //   });
  //   this.count = this.List.length;
  //   console.log(this.count)
  //   console.log(this.List);
  // }

  // Shipped() {
  //   this.List = this.order.filter((item: any) => {
  //     return item.OrderItems.filter((orderItem: any) => {
  //       return orderItem.OrderStatus == 'Shipped';
  //     }).length > 0;
  //   });
  //   this.count = this.List.length;
  //   console.log(this.count)
  //   console.log(this.List);
  // }

  // Delivered() {
  //   this.List = this.order.filter((item: any) => {
  //     return item.OrderItems.filter((orderItem: any) => {
  //       return orderItem.OrderStatus == 'Delivered';
  //     }).length > 0;
  //   });
  //   this.count = this.List.length;
  //   console.log(this.count)
  //   console.log(this.List);
  // }


  Placed() {
    var data = {
      OrderStatus: "Placed",
      mobile : this.text.mobile
    }
    fetch("http://localhost:7500/orderRoute/getby", {
      method: "Post",
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(data)
    }).then(res=> res.json())
    .then(result=>{ 
        console.log(result)
           this.placed = result.data
         console.log(this.placed)

         this.count = this.placed.length;
         console.log(this.count)
         alert('Hellooo')
      })
  }

  Shipped() {
    var data = {
      OrderStatus: "Shipped",
      mobile : this.text.mobile
    }  
    fetch("http://localhost:7500/orderRoute/getby", {
      method: "Post",
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(data)
    }).then(res=> res.json())
    .then(result=>{ 
        console.log(result)
           this.placed = result.data
         console.log(this.placed)
         this.count = this.placed.length;
         console.log(this.count)
      })  
  }


  Delivered() {
    var data = {
      OrderStatus: "Delivered",
      mobile : this.text.mobile
    } 
    fetch("http://localhost:7500/orderRoute/getby", {
      method: "Post",
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(data)
      }).then(res=> res.json())
     .then(result=>{ 
        console.log(result)
        this.placed = result.data
         console.log(this.placed)
         this.count = this.placed.length;
         console.log(this.count)
      })
  }

  close() {
    this.popuporder = false;
  }

  Update() {
    console.log(this.orderdata.value)
    console.log(this.testi)
    console.log(this.datai)
    var body = {
      _id: this.testi,
      OrderItems_id: this.datai,
      OrderStatus: this.data.OrderStatus,
      ApproximateTime: this.data.ApproximateTime
    }
    fetch("https://milestone-096608973980.herokuapp.com/orderRoute/orderStatus", {
      method: "POST",
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status == 'success') {
          this.presentAlert()
        } else {
          this.failedAlert()
        }
        this.close();


      }
      ).catch(err =>
        console.log('error', err))
  }



}