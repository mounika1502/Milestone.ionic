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
  }

  login(){
    this.router.navigate(["./login"])
  } 
  
  //login form submit function
  submit(){
    if( this.Form.value.Email ==''
    ){

 }
 else{
     fetch("http://localhost:7500/auth/getsignupdetail", {
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
    
  //  if(result.status == 'failed'){
  //   Swal.fire( 'cancelled', 'Email does not exist', 'error')
  //  }else{
  //   Swal.fire( 'Link sended successfully!', '', 'success').then(() =>{   
  //     window .location.reload()      
  //   }) 
  //  }   
        
    })  
  }
  }

}
