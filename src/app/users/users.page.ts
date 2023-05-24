import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  dealer:any;
  popupform=false;
  popup=false;
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
  localid: any;
  user: any;
  user1: any;
  user2: any;
  user3: any;
  Array:any;
  Arrayobj:any=[];
  Arraydata:any=[]
  data1=false;
  dataform=false;
  datatext=false;
  constructor() {
   }
  ngOnInit(): void {

 
  this.data5();
  
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.aa=this.text.UserType
    console.log(this.aa)
    this.localid=JSON.parse(localStorage.getItem('docId')|| '{}')
    
    // this.send = new FormGroup({
    //     To: new FormControl(),
    //     Subject : new FormControl(''),
    //     Message : new FormControl(''),
    //   });
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa=this.text.UserType
      console.log(this.aa) 
  }
  Get(){
    fetch("https://earmuffs-ox.cyclic.app/signupform/getsignupdetails",{
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
    localStorage.setItem('userdata',JSON.stringify(this.sign))
    }
    ).catch(err =>
      console.log('error',err))
  }
  data2(){
    this.Array=this.sign.filter((item:any)=>item.UserType === 'Manufacturer')
    console.log(this.Array)
    this.data=true;
    this.data1=false;
    this.dataform=false;
    this.datatext=false;
    // this.data4=false;
  }
  data3(){
    this.Arrayobj=this.sign.filter((item:any)=>item.UserType === 'Dealer')
    console.log(this.Arrayobj)
    this.data=false;
    this.data1=false
    this.dataform=true;
    this.datatext=false;
    // this.data4=false;
  }
  data5(){
    
    fetch("https://earmuffs-ox.cyclic.app/signupform/getsignupdetails",{
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
  
    this.Arraydata=this.sign.filter((item:any)=>item.UserType === 'admin')
    console.log(this.Arraydata)
    
    this.data=false;
    this.data1=false
    this.datatext=true;
    
    this.dataform=false;
    }
    ).catch(err =>
      console.log('error',err))  

  
    // this.data4=false;
  }
 



}
