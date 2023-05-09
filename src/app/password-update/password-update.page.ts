import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.page.html',
  styleUrls: ['./password-update.page.scss'],
})
export class PasswordUpdatePage implements OnInit {


    Form: any;
    products: any;
    details: any=[];
    text: any;
    sign: any;
    Email:any;
    constructor() {
     }
  
    ngOnInit(): void {
      this.Form = new FormGroup({
        Email:new FormControl(""),
        Password: new FormControl("")     
      })
  
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
       console.log(this.text)
    }
  
    // login(){
    //   this.router.navigate(["/login"])
    // }
  
      
    
  
    submit(){    
  
      fetch("http://localhost:7500/signupform/updatePassword/" + this.Form.value.Email, {
        method: 'PUT',
        headers: {
          "Access-Control-Allow-Origin": "*",        
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.Form.value),       // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
      })
        .then(response => response.json())
        .then(result => {
          console.log(result),
          console.log(this.Form.value.Email)
  
            this.products = result  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
          console.log(this.products)
  
          alert( 'Updated successfully!')         

        //  window.location.reload()
                  
        }
        ).catch(err =>
          console.log(err))
    }
  }

