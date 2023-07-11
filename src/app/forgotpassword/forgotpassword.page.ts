import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  Form: any;
  mouni: any;

  constructor(private router:Router,
    private alertController: AlertController) { }

  ngOnInit(): void {

    this.Form = new FormGroup({
      Email : new FormControl("")
    })
    console.log(this.Form)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Link sended successfully',
      buttons: ['OK']
    });  
    await alert.present();  
  }

  async failedAlert() {
    const alert = await this.alertController.create({
      header: 'Email does not exist',
      buttons: ['OK']
    });  
    await alert.present();  
  }

 
 
  //login form submit function
  submit(){
    console.log(this.Form.value) 
     fetch("https://milestone-096608973980.herokuapp.com/auth/getsignupdetail", {
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
   this.failedAlert()
   }else{
    this.presentAlert()    
   }   
        
    })  
  }
  }
