import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.page.html',
  styleUrls: ['./add-company.page.scss'],
})
export class AddCompanyPage implements OnInit {
  Form: any;
  text:any;
  products: any;
  constructor(private router:Router) { }

  ngOnInit() {

    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    console.log(this.text.Company)

    this.Form = new FormGroup({
      Company:new FormControl(""),
      Location:new FormControl(""),
      bio:new FormControl("")

     })
     console.log(this.Form)
  }
  submit(){
    localStorage.setItem('Login',JSON.stringify(this.text))
    console.log(this.Form.value)
    
        fetch("http://localhost:7500/signupform/addCompany/" + this.text.Authentication, {
          method: 'PUT',
          headers: {
            "access-Control-Allow-Origin": "*",        
            "Content-Type": 'application/json'
          },
          body: JSON.stringify(this.Form.value),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
    
        })
          .then(response => response.json())
          .then(result => {
            console.log(result),
    
              this.products = result  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
            console.log(this.products)         
           

            alert('Added successfully')   
             this.router.navigate(['profile'])                    
          }
          ).catch(err =>
            console.log(err))
      }
 

}
