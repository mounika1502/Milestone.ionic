import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.page.html',
  styleUrls: ['./add-shipper.page.scss'],
})
export class AddShipperPage implements OnInit {

    ShipperForm: any;
  
    constructor() { }
  
    ngOnInit() {
      this.ShipperForm = new FormGroup({
        Name:new FormControl(""),
        Mobile:new FormControl(""),
        Address:new FormControl(""),
        Truck:new FormControl(""),
        Trucknumber:new FormControl(""),
        Truckimage:new FormControl(""),
        Licence:new FormControl(""),
        Aadhar:new FormControl(""),
        Pan:new FormControl(""),
      })
    }
  
    submitForm(){
      console.log(this.ShipperForm.value)
        if(this.ShipperForm.value.Image ==''||
        this.ShipperForm.value.Number ==''||
        this.ShipperForm.value.Name ==''||
        this.ShipperForm.value.color ==''||
        this.ShipperForm.value.region ==''||
        this.ShipperForm.value.color ==''||
        this.ShipperForm.value.date =='')
        { 
     alert("Please Fill All Details")
        }else{  
           fetch("https://brave-pink-clothes.cyclic.app/shippers/addshipper", {
           method:'post',
           headers:{
             "Access-Control-Allow-Origin": "*",
             "Content-Type":'application/json'
           },
           body:JSON.stringify(this.ShipperForm.value)
         }).then(res=> res.json())
         .then(result=>{ 
           console.log(result)
           if(result.status === 'failed'){
            alert('vehicle already existed!')
      
           }else{
            alert('Shipper added successfully!')      
            
            window.location.href="/shippers"
      
          }          
       })      
           .catch(error => console.log('error',error))           
    }       
  }


}