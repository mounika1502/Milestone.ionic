import { Component, NgZone, OnInit, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import  firebase from 'firebase/auth/compact';
import firebase from 'firebase/compat/app';

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
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  formInput = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
  @ViewChildren('formRow') rows: any;

  
  otp:any;
  form: any;
  spin!: boolean;
  verify: any;

  data: any;
  total:any=[]
  mobileNo: any;
  verified: any;

    
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '45px',
      height: '45px',
    },
  };

  keyUpEvent(event:any, index:any) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
     pos = index - 1 ;
    } else {
     pos = index + 1 ;
    }
    if (pos > -1 && pos < this.formInput.length ) {
     this.rows._results[pos].nativeElement.focus();
    }
   }

   constructor(private router:Router,private ngZone: NgZone) {
    this.form = this.toFormGroup(this.formInput);
  }
 
  

  toFormGroup(elements:any) {
   const group: any = {};
   elements.forEach((key: string | number) => {
     group[key] = new FormControl('', Validators.required);
   });
   return new FormGroup(group);
  } 

 ngOnInit(): void {
  firebase.initializeApp(config)
   this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
   this.mobileNo = JSON.parse(localStorage.getItem('mobileNo') || '{}');
   console.log(this.verify)

   this.verified = JSON.parse(localStorage.getItem('regdata') || '{}')
   console.log(this.verified.role)

 }

 onOtpChange(otp:string){
   this.otp = otp;
   console.log(this.otp);
 }


 onSubmit(){
   console.log(this.form.value);
   
   console.log(this.otp);
     var credential = firebase.auth.PhoneAuthProvider.credential(
       this.verify,
       this.otp
     );
 
     console.log(credential);
     firebase
       .auth()
       .signInWithCredential(credential)
       .then((response: any) => {
         console.log(response);
         localStorage.setItem('user_data', JSON.stringify(response));
        this.ngZone.run(() => {
           
      setTimeout(() => {
       this.spin=false
       alert('OTP verified!')
       window.location.href=('/inventory')
     }, 2000);    
   });
   })
     .catch((error: { message: any; }) => {
     console.log(error);
     setTimeout(() => {
         this.spin=false
         alert(error.message);
       }, 2000);           
     });
 }

}
