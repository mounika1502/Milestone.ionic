import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  Form: any;
  mouni: any;

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.Form = new FormGroup({
      Email : new FormControl("")
    })
    console.log(this.Form)
  }

 
 
  //login form submit function
  submit(){
    console.log(this.Form.value) 
     fetch("https://brave-pink-clothes.cyclic.app/auth/getsignupdetail", {
      method:'post',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(this.Form.value)
    }).then(res=> res.json())
    .then(result=>{  
      console.log(result)           
    console.log(this.Form) 
    
   if(result.status == 'failed'){
   alert('Email does not exist')
   }else{
    alert('Link sended successfully!')   
      // window .location.reload()      
   }   
        
    })  
  }
  }
