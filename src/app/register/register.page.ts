import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  SignupForm: any;
  loginForm: any;
  isAlertOpen = false;
public alertButtons = ['OK'];
setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}
  constructor(private router:Router) { }
  ngOnInit() {
    this.SignupForm = new FormGroup({
      Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      Lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      mobile : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      Email : new FormControl('',[Validators.required,Validators.email]),
      Password : new FormControl('',[Validators.required,Validators.minLength(5)]),
      City:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      UserType:new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required,Validators.pattern('[0-9]{6}')]),
      Street:new FormControl('',[Validators.required]),
      State:new FormControl('',[Validators.required]),
      Company:new FormControl('',[Validators.required]),
      // Isadd:new FormControl('1'),
      Message:new FormControl('congratulations your signup successfully!!')
    });
  }
  signupSubmit(){       
    if(this.SignupForm.value.Firstname ==''||
     this.SignupForm.value.Lastname ==''||
     this.SignupForm.value.mobile ==''||
     this.SignupForm.value.Email ==''||
     this.SignupForm.value.Password ==''||
     this.SignupForm.value.UserType ==''||
     this.SignupForm.value.City ==''||
     this.SignupForm.value.Pincode ==''||
     this.SignupForm.value.Street ==''||
     this.SignupForm.value.Company ==''||
     this.SignupForm.value.State ==''
     ){
     Swal.fire(  
       'Cancelled',  
       'You Must  Enter All fields !',           //give for condition to take all properties take empty values
       'error'                                  //then take one alert message like not save all data
     ) 
  }
  else{
    fetch("https://brave-pink-clothes.cyclic.app/signupform/addsignupdetails", {
     method:'post',
     headers:{
       "Access-Control-Allow-Origin": "*",
       "Content-Type":'application/json'
     },
     body:JSON.stringify(this.SignupForm.value)
  
   }).then(res=> res.json())
   .then(result=>{ 
     console.log(result)
  
  
     alert("Register Successfully")
    window.location.href="/login"
            
   })       
     .catch(error => console.log('error',error))     
  }
  var body ={
    Email:this.SignupForm.value.Email
  }
  fetch("https://brave-pink-clothes.cyclic.app/signupform/emailnotification", {
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
    get Firstname()
  {
   return this.SignupForm.get('Firstname');
  }
  get pincode()
  {
   return this.SignupForm.get('pincode');
  }
  get Lastname()
  {
   return this.SignupForm.get('Lastname');
  }
  get mobile()
  {
   return this.SignupForm.get('mobile');
  }
  get Email()
  {
   return this.SignupForm.get('Email');
  }
  get Password()
  {
   return this.SignupForm.get('Password');
  }
  get UserType()
  {
   return this.SignupForm.get('UserType');
  }
  get City()
  {
   return this.SignupForm.get('City');
  }
  get Pincode()
  {
   return this.SignupForm.get('Pincode');
  }
  get Street()
  {
   return this.SignupForm.get('Street');
  }
  get Company()
  {
   return this.SignupForm.get('Company');
  }
  get State()
  {
   return this.SignupForm.get('State');
  }
  get Isadd()
  {
   return this.SignupForm.get('Isadd');
  }

}
