import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.page.html',
  styleUrls: ['./add-shipper.page.scss'],
})
export class AddShipperPage implements OnInit {

    ShipperForm: any;
  images: any;
  data: any;
  
    constructor(private apii:UploadService) { }
  
    ngOnInit() {
      this.ShipperForm = new FormGroup({
        Name:new FormControl(""),
        Mobile:new FormControl(""),
        Address:new FormControl(""),
        Truck:new FormControl(""),
        Trucknumber:new FormControl(""),
        TruckImage:new FormControl(""),
        Licence:new FormControl(""),
        Adhar:new FormControl(""),
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
           fetch("https://tiny-ruby-centipede-hat.cyclic.app/shippers/addshipper" ,{
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

  // onClick() {
  //   console.log(this.data)
  // const formdata = new FormData();
  // for(let pdffiles of this.images){
  //   formdata.append("file",pdffiles)
  // }
  //  this.apii.postfiletos4(formdata).subscribe(data=>{
  //   console.log(data)
  //   var docid=data.imageFile._id
  //   this.submitForm(docid) 
  //   alert("file uploaded")
  //  })
  //   console.log(formdata)
  // }
  // selectImage(event: any) {
  //   if (event.target.files.length > 0) {
  //     console.log(event.target.files)
  //     const file = event.target.files;
  //     console.log(file);
  //     this.images = file;   
  //   }
  //   console.log(this.images)
  // }
}