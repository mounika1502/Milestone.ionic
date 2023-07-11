import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealerorders',
  templateUrl: './dealerorders.page.html',
  styleUrls: ['./dealerorders.page.scss'],
})
export class DealerordersPage implements OnInit {
  searchtext:any;
  cartItem:number=0
  manufacturername:any;
  PhoneNumber:any;
  Quantity:any;
  order:any=[] 
  OrderData: any;
  name:any;
  data: any 
  date:any;
  Address: any;
  prodId:any;
  qnt:any;
  price:any;
  ApproximateTime:any;
  OrderStatus:any;
  orderDetails :any = []
  test: any;
  pop=false;
  count= Number
  popuporder=false;
    order2: any=[];
    datas:any=[]
    orderitems: any=[];
    Grandtotal: any;
    TotalPrice: any;
    Totalprice: any;
  List: any=[]
  order1: any=[];
  data1: any;
  data2:any=[];
  data3:any=[];
  data4:any=[]; 
  color:any;
  testi: any;
  datai: any;
  orderdatas: any;
  aa: any=[]
  local: any=[]
  mm: any;
  order3: any=[];
  text: any;
  statusdata="Placed"
  datePipe: any;
  myDate: any;
  manumob: any;
  randomNumber: any;
  text2: any;
  placed:any=[]
  getCartDetails: any;
  constructor() { 
    this.Placed()
  }
  anu(test:any){
    window.location.href=("./galaxyroute")
    localStorage.setItem('anu',JSON.stringify(test));
    // localStorage.setItem('local',JSON.stringify(this.cart1));
    console.log(test)
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
  ngOnInit(): void {

    this.Placed()
  
       const localdata1=localStorage.getItem('orderid')
    if(localdata1!=null){                                                    
      this.text2 = JSON.parse(localdata1)
      console.log(this.text2)
    }
    const localdata=localStorage.getItem('anu')
    if(localdata!=null){                                                    
      this.test = JSON.parse(localdata)
    }
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.manumob=this.text.mobile
    console.log(this.manumob)
    this.getCartDetails = JSON.parse(localStorage.getItem('anunya') || '{}');
    

    this.randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    console.log(this.randomNumber)
    localStorage.setItem('orderid',JSON.stringify(this.randomNumber))
    this.count=this.order.length;
    console.log(this.count)
    this.order.length=0;
    this.count=this.order.length;

    
    fetch("https://milestone-096608973980.herokuapp.com/orderRoute/allorders", {
      method: "get",
      headers: {
        "access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
     
      }).then(res=> res.json())
     .then(result=>{ 
        console.log(result)
        this.order = result.orders
         console.log(this.order)
      })
  
  }

    
  getAddress(test:any){
    window.location.href=("/address")
    localStorage.setItem('Order',JSON.stringify(test));
    console.log(test)  
  }
  orders(test:any){
    this.data = test
    localStorage.setItem('orderitems',JSON.stringify(test))
  }
 

  Placed() {
    this.List = this.order.filter((item: any) => {
      return item.OrderItems.filter((orderItem: any) => {
        return orderItem.OrderStatus == 'Placed';
      }).length > 0;
    });
    this.count = this.List.length;
           console.log(this.count)
    console.log(this.List);
  }

  Shipped() {
    this.List = this.order.filter((item: any) => {
      return item.OrderItems.filter((orderItem: any) => {
        return orderItem.OrderStatus == 'Shipped';
      }).length > 0;
    });
    this.count = this.List.length;
           console.log(this.count)
    console.log(this.List);
  }


  Delivered(){
    this.List = this.order.filter((item: any) => {
      return item.OrderItems.filter((orderItem: any) => {
        return orderItem.OrderStatus == 'Delivered';
      }).length > 0;
    });
    this.count = this.List.length;
           console.log(this.count)
    console.log(this.List);
  }
  
all(){
  window.location.reload();
}
}