import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.page.html',
  styleUrls: ['./manufacturers.page.scss'],
})
export class ManufacturersPage implements OnInit {
cartItem:number = 0
  Array:any = [];
  dealer:any;
  popupform=false;
  popup = false;
  data4 = false;
  data = false;
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
 
public alertButtons = ['OK'];
  Mobile: any;
  aaa: any;

// setOpen(isOpen: boolean) {
//   this.isAlertOpen = isOpen;
// }
  constructor(private alertController: AlertController,) {
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

      this.aaa=this.text.mobile

      console.log(this.aa) 
      console.log(this.aaa) 
  }

  async failedAlert() {
    const alert = await this.alertController.create({
      header: 'Manufacturer already existed',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Added Successfully...',
      buttons: ['OK']
    });
    await alert.present();
  }

  Get(){
    fetch("https://milestone-096608973980.herokuapp.com/signupform/getsignupdetails",{
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
  this.data=false;

  var datauma={
    Mobile:this.aaa

 } 
  fetch("https://milestone-096608973980.herokuapp.com/manufacturer/getdata",{
    method:"post",
    headers:{
      "Access-Control-Allow-Origin":"*",
      "Content-Type":"application/json"
    }, 
    body:JSON.stringify(datauma)
  })
  .then(response => response.json())
  .then(result =>{
    console.log(result),
    this.List = result.SignData
  console.log(this.List)
  console.log(datauma)
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
        Mobile:this.aaa
      
      }
      fetch("https://milestone-096608973980.herokuapp.com/manufacturer/adddata",{
        method:'POST',
        headers:{
          "Access-Control-Allow-Origin":"*",
          "Content-Type":'application/json'
        },
      body:JSON.stringify(datasss)
      
      })  .then(response => response.json())
      .then(result =>{
        this.docid=result.SignData

        if(result.status == 'failed'){
          this.failedAlert()
        }  else{
         this.presentAlert()          
        }        
  }
        )
      .catch(error => console.log('error',error)); 
        } 
Edit(List:any){
  this.text=List
  localStorage.setItem('Arrayform',JSON.stringify(List))

}

}
