import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-raw-edit',
  templateUrl: './raw-edit.page.html',
  styleUrls: ['./raw-edit.page.scss'],
})
export class RawEditPage implements OnInit {
  data: any;
  rawForm:any;

  constructor() { }

  ngOnInit() {
    this.rawForm = new FormGroup ({
      Number:new FormControl(""),
      Name: new FormControl(""),
      color: new FormControl(""),
      size: new FormControl(""),
      stone:new FormControl(""),
      region: new FormControl(""),
      date: new FormControl(""),
      manufacturername: new FormControl(""),
      PhoneNumber : new FormControl("")
    })
    console.log(this.rawForm)

    this.data = JSON.parse(localStorage.getItem('RawUpdate') || '{}') 
    console.log(this.data)
  }
  
  update(id:any){  
    console.log(this.rawForm.value) 
    localStorage.setItem('RawUpdate',JSON.stringify(this.data));
    fetch("https://brave-pink-clothes.cyclic.app/raw/editRaw/" + id,  {
      method: 'PUT',
      headers: {
        "access-Control-Allow-Origin": "*",        
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.rawForm.value),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
       alert('updated') 
       window.location.href='./raw-product'             
      }
      ).catch(err =>
        console.log(err))

  }

}
