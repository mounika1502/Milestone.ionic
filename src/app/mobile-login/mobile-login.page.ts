import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import  'firebase/auth';
import 'firebase/compat/firestore';

var config = {
  apiKey: "AIzaSyDM4C1YRZ14Lx_8NzbDnChklv9VInrgUmw",
  authDomain: "otplogin-c4da2.firebaseapp.com",
  projectId: "otplogin-c4da2",
  storageBucket: "otplogin-c4da2.appspot.com",
  messagingSenderId: "783500853422",
  appId: "1:783500853422:web:9b813df9ba59a87c31ad3f",
  measurementId: "G-69272HMPPD"
}

@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.page.html',
  styleUrls: ['./mobile-login.page.scss'],
})

export class MobileLoginPage implements OnInit {
 
  reCaptchaVerifier: any;
  mobile1:any   
  List: any;
  details:any =[]

  constructor(
    private modalCtrl: ModalController,
    private ngZone:NgZone,
    private router: Router,
    private _http:HttpClient
    ) { 
      this.getProduct()     
     }

  ngOnInit() {
    firebase.initializeApp(config)
  }

  getProduct(){    
    fetch("http://localhost:7500/signupform/getsignupdetails", {
   method:'get',
   headers:{
     "Access-Control-Allow-Origin": "*",
     "Content-Type":'application/json'
   },
   body:JSON.stringify(this.getProduct)
 }).then(res=> res.json())
 .then(result=>{ 
   console.log(result)
    this.details = result.SignupInfo
    console.log(this.details)
 }
   )     
   .catch(error => console.log('error',error))
}


  async mobileOtp(){ 


    fetch("http://localhost:7500/signupform/getsignupdetails", {
      method:'get',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(this.getProduct)
    }).then(res=> res.json())
    .then(result=>{ 
      console.log(result)
       this.details = result.SignupInfo
       console.log(this.details)

    console.log(this.mobile1);
    this.List = this.details.filter((item : any)=> { 
      return item.mobile == this.mobile1});
      console.log(this.List)
     
      // for(let i = 0;i < this.List.length;i++){
        
        // localStorage.setItem('Login',JSON.stringify(this.List[0]));
        
      // if(this.List){
        if(this.List == null || this.List == undefined || this.List == ''){
          alert('Mobile not exist')
        }else{
          alert('OTP Gerneratred')
      console.log(this.List)
  this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    'sign-in-button',
    {
      size: 'invisible',
    }
  );
  console.log(this.reCaptchaVerifier);

  console.log(this.mobile1);
  firebase
    .auth()
    .signInWithPhoneNumber('+91' + this.mobile1,this.reCaptchaVerifier)
    .then((confirmationResult:any) => {
      localStorage.setItem( 'verificationId',JSON.stringify(confirmationResult.verificationId));

      localStorage.setItem('mobileNo', JSON.stringify(this.List));

      this.ngZone.run(() => {
        window.location.href='./otp'
      });
     
  
   
    })   
    .catch((error:any) => {
      console.log(error.message);
      alert(error.message);
      setTimeout(() => {
        // window.location.reload();       
      }, 5000);
    });
  // }else{
  //   alert('error.message');
  // }
  }
}

)     
.catch(error => console.log('error',error))
}   
}
