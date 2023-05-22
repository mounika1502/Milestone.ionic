import { Component, ContentChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: any;
  loginData: any;
  showPwd:any;
  user: any;


  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(5)]),
    })
  }
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
 

  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  loginSubmit(){
    if(this.loginForm.value.email ==''||
    this.loginForm.value.password =='')
    {
  }else{
     fetch("http://localhost:7500/loginform/addlogin", {
      method:'post',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(this.loginForm.value)
    }).then(res=> res.json())
    .then(result=>{ 
      this.loginData = result
      console.log(this.loginData)      
    localStorage.setItem('Login',JSON.stringify(this.loginData));
    console.log(this.loginData)  
    if(result.status == 'failed'){
      alert('Login failed')
    }  else{
      alert("Login successfully....") 
      window.location.href='/home' 
    }   
      
   })
    }   
  }

  get email()
  {
   return this.loginForm.get('email');
  }
  get Password()
  {
    return this.loginForm.get('password');
  }
  
}
















