import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dealermanagement',
  templateUrl: './dealermanagement.page.html',
  styleUrls: ['./dealermanagement.page.scss'],
})
export class DealermanagementPage implements OnInit {
  search:any;
  dealer:any;
 
  data4=false
  data=false;
  popupdata=false;
datas:any;
searchtext:any;
  registerForm: any;
  productform: any;
  sendemail: any;
  send:any;
  service: any;
  dealer1: any=[]
  dealers=false;
  text: any;
  aa: any;
  sign: any=[];
  List: any=[];
  array: any=[];
  SignupForm:any;
  List1: any=[];
  add:any=[];
  Getdealer:any=[]
  location: any;
  firstname: any;
  lastname: any;
  Mobile: any;
  address: any;
  email: any;
  list:any;
  company:any;
  docId: any;
  localid: any=[];
  x:any;
  buttonClicked=true;
  localarray: any=[]
  ḍata: any;
_id: any;
isAlertOpen = false;
public alertButtons = ['OK'];

setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}
  constructor() {}
  ngOnInit(): void {
   this.Get()
    // this.localid=JSON.parse(localStorage.getItem('docId')|| '{}')
      this.aa = JSON.parse(localStorage.getItem('Login')||'{}') 
      this.Mobile = this.aa.mobile
      console.log(this.Mobile) 
  }
  Get(){
    fetch("https://ionic-node.vercel.app/signupform/getsignupdetails",{
      method:"GET",
      headers:{
        "access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify(this.Get)
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result),
      this.sign = result.SignupInfo
    console.log(this.sign)
    this.array=this.sign.filter((item:any)=>item.UserType === 'Dealer')
    console.log(this.array)
    this.data=true;
    this.data4=false;
    }
    ).catch(err =>
      console.log('error',err))  
  }
     
data3(){
  this.data4=true;
  this.data=false;
  var datauma={
    Mobile:this.text.Mobile
  }   
    fetch("https://ionic-node.vercel.app/dealer/getdealer",{
      method:"post",
      headers:{
        "access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify(datauma)
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result),
      this.List1 = result.dealerInfo
    console.log(this.List1)
    }
    ).catch(err =>
      console.log('error',err))
 

}
Dealer(){
  this.dealers=true;
}
  toggle(){
  this.data=true;
  }

  
  dealer2(data:any){  
var datasss ={
  Firstname:data.Firstname,
  Lastname:data.Lastname,
  Company:data.Company,
  mobile:data.mobile,
  Email:data.Email,
  Street:data.Street,
  State:data.State,
  UserType:data.UserType,
  City:data.City,
  Mobile:this.Mobile

}
  console.log(datasss)
    fetch("https://ionic-node.vercel.app/dealer/adddealer",{
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-Type":'application/json'
      },
    body:JSON.stringify(datasss)
    
    })  .then(response => response.json())
   
    .then(result =>{
      console.log(result),
      alert("Added...")
      
    
//       data.Isadd=0;
// var id=data._id
     
//      let index =this.array.findIndex((item:any)=>item._id === id)
//       this.array.splice(index,1,data)
//       console.log( this.docId)
     
//       localStorage.setItem('array',JSON.stringify(this.array))
      // localStorage.setItem('docId',JSON.stringify(this.docId))
      //  this.docId=result.dealerInfo._id
      // localStorage.setItem('docId',JSON.stringify(this.docId))
     
    
    }
      )
    .catch(error => console.log('error',error)); 
// }
  }
      


      dealerform(List1:any){
        this.text=List1
        localStorage.setItem('dataform',JSON.stringify(List1))

      }

}
