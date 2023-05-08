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

  ngOnInit() {
  }

}
