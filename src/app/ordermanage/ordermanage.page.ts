import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-ordermanage',
  templateUrl: './ordermanage.page.html',
  styleUrls: ['./ordermanage.page.scss'],
})
export class OrdermanagePage implements OnInit {

  searchtext:any
  order:any=[] 
  OrderData: any;
  data: any ;
  OrderId:any;
  Address: any;
  orderDetails :any = []
  test: any;
  pop=false;
  orderdata!:FormGroup
  count= Number;
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
OrderStatus: any;
ApproximateTime:any;
  testi: any;
  Listdata:any=[]
  datai: any;
  orderdatas: any;
  aa: any=[]
  local: any=[]
  mm: any;
  order3: any=[];
  text: any=[]
  list:any;
  manumob:any;
  statusdata="Placed"
  length: any;
  manuemail: any;
  randomNumber: any;
  text2: any;
  constructor() { 

    }
    anu(test:any){
      window.location.href=("/galaxyroute")
      localStorage.setItem('anu',JSON.stringify(test));

      console.log(test)
  }
  ngOnInit(): void {
debugger
    const localdata1=localStorage.getItem('orderid')
    if(localdata1!=null){                                                    
      this.text2 = JSON.parse(localdata1)
      console.log( JSON.parse(localdata1))
    }
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.manumob=this.text.mobile
    console.log(this.manumob)
 this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.manuemail=this.text.Email
    console.log(this.manuemail)
  
    this.orderdata= new FormGroup({
      OrderStatus:new FormControl(),
      ApproximateTime: new FormControl(),
      Message: new FormControl('Your Order has been Changed'),
      Email:new FormControl(this.manuemail)

    })
    this.text = JSON.parse(localStorage.getItem('Orderstatus')||'{}') 
    console.log(this.text)
    this.aa=this.text
    console.log(this.aa)
    console.log(this.data)


fetch("http://localhost:7500/orderRoute/getAllOrders", {
      method:"get",
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
   var data =this.data1[0].mobile
   if(data==this.manumob )
   {
    this.data3.push(this.order[i] )
   }
  }  if(this.data3.length!=0)
  {
  this.order=this.data3
    console.log(this.order)
    
    console.log(this.order)
    this.count=this.order.length;
    localStorage.setItem('Prod',JSON.stringify(this.order));
     console.log(this.data3)
  }
  else{
    this.order.length=0;
    this.count=this.order.length;
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
  orders(test:any,testid:any,dataid:any){
    this.testi = testid
    this.datai = dataid
    this.popuporder=true
    this.data = test;
  }
 placed(){
  const localdata = localStorage.getItem('Prod')  
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
    const localdata = localStorage.getItem('Prod')  
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
  
    var body ={
      Email:this.text.Email
    }
    const localdata = localStorage.getItem('Prod')  
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
  fetch("http://localhost:7500/orderRoute/orderupdate", {
    method:'post',
    headers:{
    "Access-Control-Allow-Origin": "*",
    "Content-Type":'application/json'
    },  
     body:JSON.stringify(body)
    
    }).then(res=> res.json())
    .then(result=>{ 
    console.log(result)  
    }
    )
    .catch(error => console.log('error',error))
   }   
 close(){
  this.popuporder=false;
 }

All(){
  window.location.reload();
}
Update(){
  console.log(this.orderdata.value)
  console.log(this.testi)
  console.log(this.datai)
  var body={
    _id:this.testi,
    OrderItems_id:this.datai,
    OrderStatus:this.data.OrderStatus,
    ApproximateTime:this.data.ApproximateTime,
    Message:this.data.Message,
    Email:this.text.Email
  }
  fetch("http://localhost:7500/orderRoute/orderStatus",{
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
    this.close();
    Swal.fire('Updated Successfully!', '', 'success').then(() => {
      window.location.reload();
    }); 


  }
  ).catch(err =>
    console.log('error',err))  
}
  



}
