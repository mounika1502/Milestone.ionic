import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.page.html',
  styleUrls: ['./manufacturers.page.scss'],
})
export class ManufacturersPage implements OnInit {

  Array:any=[];
  dealer:any;
  popupform=false;
  popup=false;
  data4=false;
  data=false;
  popupdata=false
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
  List1: any=[];
  adddata:any=[];
  SignupForm:any;
  docid: any;
  localIds: any;
  array: any=[]
  docId: any;
  localarray: any=[]
  constructor() {
  this.Get()
   }
  ngOnInit(): void {
   this.data2();
   this.localIds=JSON.parse(localStorage.getItem('docIds')|| '{}')
   
   
    this.send = new FormGroup({
        To: new FormControl(),
        Subject : new FormControl(''),
        Message : new FormControl(''),
      });
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa=this.text.UserType
      console.log(this.aa) 
  }

  Get(){
    fetch("http://localhost:7500/signupform/getsignupdetails",{
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
  
      this.Array=this.sign.filter((item:any)=>item.UserType === 'Manufacturer')
    
    console.log(this.Array)
   
   
    this.data=true
    this.data4=false;
    
   
    }
    ).catch(err =>
      console.log('error',err)) 
  }
  sendmail(dealer:any){
this.popupdata=true;
this.registerForm = dealer
  } 
data3(){
  this.data4=true;
  this.data=false
  fetch("http://localhost:7500/manufacturer/getdata",{
    method:"GET",
    headers:{
      "access-Control-Allow-Origin":"*",
    }, 
  })
  .then(response => response.json())
  .then(result =>{
    console.log(result),
    this.List = result.SignData
  console.log(this.List)
  }
  ).catch(err =>
    console.log('error',err))
}
Dealer(){
  this.dealers=true;
}
  data2(){
  
  }
 

    dealer2(data:any){  
      fetch("http://localhost:7500/manufacturer/adddata",{
        method:'POST',
        headers:{
          "Access-Control-Allow-Origin":"*",
          "Content-Type":'application/json'
        },
      body:JSON.stringify(data)
      
      })  .then(response => response.json())
      .then(result =>{
        this.docid=result.SignData._id
        data.Isadd=0;
var id=data._id
     
     let index =this.array.findIndex((item:any)=>item._id === id)
      this.array.splice(index,1,data)
      console.log( this.docId)


     
      localStorage.setItem('array',JSON.stringify(this.array))
      localStorage.setItem('docId',JSON.stringify(this.docId))
     
      console.log(this.docId)
        Swal.fire('Added to My Manufacturers!', '', 'success').then(() => {
        
        });
      }
        )
      .catch(error => console.log('error',error)); 
        } 
Edit(List:any){
  this.text=List
  localStorage.setItem('Arrayform',JSON.stringify(List))

}

}
