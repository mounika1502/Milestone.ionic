import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.page.html',
  styleUrls: ['./dealers.page.scss'],
})
export class DealersPage implements OnInit {


  dealer:any;
  data4=false
  data=false; 
  datas:any;
  searchtext:any; 
  dealers=false;
  text: any;
  aa: any;
  sign: any=[];  
  array: any=[];
  List1: any=[];
  Mobile: any;
  _id: any;

  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
   this.Get()
    // this.localid=JSON.parse(localStorage.getItem('docId')|| '{}')
      this.aa = JSON.parse(localStorage.getItem('Login')||'{}') 
      this.Mobile = this.aa.mobile
      console.log(this.Mobile) 
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Added Successfully...',
      buttons: ['OK']
    });  
    await alert.present();  
  }

  async FailedAlert() {
    const alert = await this.alertController.create({
      header: 'Dealer already existed',
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
     Mobile:this.Mobile

  }   
    fetch("https://milestone-096608973980.herokuapp.com/dealer/getdealer",{
      method:"post",
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(datauma)
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result)
      this.List1 = result.dealers
    console.log(this.List1)
    console.log(datauma)
    }
    ).catch(err =>
      console.log('error',err))
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
    fetch("https://milestone-096608973980.herokuapp.com/dealer/adddealer",{
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-Type":'application/json'
      },
    body:JSON.stringify(datasss)
    
    })  .then(response => response.json())
   
    .then(result =>{
      console.log(result)

      if(result.status == 'failed'){
        this.FailedAlert() 
      }  else{
       this.presentAlert()            
      }  
    }
      )
    .catch(error => console.log('error',error)); 
  }
}
