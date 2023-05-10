import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealerorders',
  templateUrl: './dealerorders.page.html',
  styleUrls: ['./dealerorders.page.scss'],
})
export class DealerordersPage implements OnInit {
  searchtext:any
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

  getCartDetails: any;
  constructor() { }
  anu(test:any){
    window.location.href=("./galaxyroute")
    localStorage.setItem('anu',JSON.stringify(test));
    // localStorage.setItem('local',JSON.stringify(this.cart1));
    console.log(test)
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
  ngOnInit(): void {
  
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
    fetch("https://brave-pink-clothes.cyclic.app/orderRoute/getOrders",{
      method:"GET",
      headers:{
        "access-Control-Allow-Origin":"*",
      },
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result),
      this.order = result.orders
    console.log(this.order)
    this.randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    console.log(this.randomNumber)
    localStorage.setItem('orderid',JSON.stringify(this.randomNumber))
    this.count=this.order.length;
    console.log(this.count)
    for(let i = 0;i < this.order.length;i++){
      this.data1 = this.order[i]  
      console.log(this.order[i].OrderData.OrderItems )   
    
      this.data2.push(this.data1.OrderData.OrderItems)
      console.log(this.data2)
   } 
   for(let i = 0;i < this.data2.length;i++){
    this.data1 = this.data2[i]
    var data =this.order[i].OrderData.Phone
   

   if(data==this.manumob )
   
   {
    
    this.data3.push(this.order[i] )
    
    
   }
  //  else{
  //   this.order.length=0;
  //   this.count=this.order.length;
   
  //  }
 
  }  if(this.data3.length!=0)
  {
  this.order=this.data3
    console.log(this.order)
    localStorage.setItem('prodstatus',JSON.stringify(this.order));
    console.log(this.order)
    this.count=this.order.length;
   
  
     console.log(this.data3)
  }
  else{
    this.order.length=0;
    this.count=this.order.length;
  }
    for(let i = 0;i < this.order.length;i++){
       this.data = this.order[i]      
    }  
    }
    ).catch(err =>
      console.log('error',err))
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
//  placed(){
//   debugger
//   this.order1 = this.order.filter((item: any ) => item.OrderData.OrderItems.OrderStatus ==='Shipped'); 
//   console.log(this.order1)  
//   for(let i = 0;i < this.order1.length;i++){
//     this.data1 = this.order1[i]  
//     console.log(this.data1)    
//  } 
    
  
//  }  
Orderid(){

} 
 placed(){
 
  const localdata = localStorage.getItem('prodstatus')  
  if(localdata!=null){                                                                                 
    this.order1 =JSON.parse(localdata) 
    console.log( this.order1);
  }  

this.data2.length = 0;
this.data3.length = 0;
  for(let i = 0;i < this.order1.length;i++){
    this.data1 = this.order1[i]  
    console.log(this.order1[i].OrderData.OrderItems )   
   
    this.data2.push(this.data1.OrderData.OrderItems)
    console.log(this.data2)
 } 
 for(let i = 0;i < this.data2.length;i++){
  this.data1 = this.data2[i]
 var data =this.data1[0].OrderStatus
 if(data=='Placed')
 {
  this.data3.push(this.order1[i] )
 }
this.order=this.data3
this.count=this.order.length;
 console.log(this.data3)
}  
 }   
 Shipped(){   
    const localdata = localStorage.getItem('prodstatus')  
    if(localdata!=null){                                                                                 
      this.order1 =JSON.parse(localdata) 
      console.log( this.order1);    
  }
  this.data2.length = 0;
  this.data3.length = 0;
    for(let i = 0;i < this.order1.length;i++){
      this.data1 = this.order1[i]  
      console.log(this.order1[i].OrderData.OrderItems )   
      this.data2.push(this.data1.OrderData.OrderItems)
      console.log(this.data2)
   } 
   for(let i = 0;i < this.data2.length;i++){
    this.data1 = this.data2[i]
   this.statusdata =this.data1[0].OrderStatus
   
   if(this.statusdata=='Delivered')
   {
    this.data3.push(this.order1[i] )
   }
  this.order=this.data3
  this.count=this.order.length;
   console.log(this.data3)
   localStorage.setItem('Orderstatus',JSON.stringify(this.order))
  }  
   }   
   inprogress(){
    const localdata = localStorage.getItem('prodstatus')  
    if(localdata!=null){                                                                                 
      this.order1 =JSON.parse(localdata) 
      console.log( this.order1);
      }
        this.data2.length = 0;
  this.data3.length = 0;
    for(let i = 0;i < this.order1.length;i++){
      this.data1 = this.order1[i]  
      console.log(this.order1[i].OrderData.OrderItems )   
      this.data2.push(this.data1.OrderData.OrderItems)
      console.log(this.data2)
   } 
   for(let i = 0;i < this.data2.length;i++){
    this.data1 = this.data2[i]
   var data =this.data1[0].OrderStatus
   if(data=='Shipped')
   {
    this.data3.push(this.order1[i] )
   }

  this.order=this.data3
  this.count=this.order.length;
   console.log(this.data3)
  }  
   }  
  
all(){
  window.location.reload();
}
}
