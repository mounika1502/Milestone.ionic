import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  UniqueDeviceID!:string;
  SignupForm: any;
  loginForm: any;
  isAlertOpen = false;
  isSubmitted = false;
public alertButtons = ['OK'];
setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
}
  constructor(private router:Router,public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.SignupForm = this.formBuilder.group({  
      Firstname: ['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      Lastname : ['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      mobile : ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Email : ['',[Validators.required,Validators.email]],
      Password : ['',[Validators.required,Validators.minLength(5)]],
      City:['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      UserType:['',[Validators.required]],
      pincode:['',[Validators.required,Validators.pattern('[0-9]{6}')]],
      Street:['',[Validators.required]],
      State:['',[Validators.required]],
      Company:['',[Validators.required]],
      // uniqueDeviceID:[''),
      // Isadd:['1'),
     
    });
    // this.getUniqueDeviceID();
  }
  // getUniqueDeviceID() {
  //   this.uniqueDeviceID.get()
  //     .then((uuid: any) => {
  //       console.log(uuid);
  //       this.UniqueDeviceID = uuid;

  //       //alert(this.UniqueDeviceID)
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //       this.UniqueDeviceID = "Error! ${error}";
  //     });
  // }

   passwordType: string = 'password';
 passwordIcon: string = 'eye-off';

 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }
  get errorControl() {
    return this.SignupForm.controls;
  } 

  signupSubmit(){       
    this.isSubmitted = true;
    if (!this.SignupForm.valid) {
     alert('Please provide all the required values!')  
    } else {

    fetch("https://tiny-ruby-centipede-hat.cyclic.app/signupform/addsignupdetails", {
     method:'post',
     headers:{
       "Access-Control-Allow-Origin": "*",
       "Content-Type":'application/json'
     },
     body:JSON.stringify(this.SignupForm.value)
  
   }).then(res=> res.json())
   .then(result=>{ 
     console.log(result)
    if(result.status == 'failed'){
      alert('User already existed')
    }  else{
     alert("Register Successfully")
    window.location.href="/login"
    }         
   })       
     .catch(error => console.log('error',error))     
  
  var body ={
    Email:this.SignupForm.value.Email
  }
  fetch("https://tiny-ruby-centipede-hat.cyclic.app/signupform/emailnotification", {
  method:'post',
  headers:{
  "Access-Control-Allow-Origin": "*",
  "Content-Type":'application/json'
  },  
  body:JSON.stringify(body)
  
  }).then(res=> res.json())
  .then(result=>{ 
  console.log(result)  
  })
  .catch(error => console.log('error',error))
  }
}

}
