import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  isSubmitted = false;
  text: any;
  aa: any;
  
    constructor(private apii:UploadService, public formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa=this.text.UserType
      console.log(this.aa)
      this.ShipperForm = this.formBuilder.group({
        Name: ['', [Validators.required,Validators.pattern('[a-zA-Z]+$')]],
        Address: ['', [Validators.required, Validators.minLength(2),]],
        Truck: ['', [Validators.required, Validators.minLength(2)]],
        Trucknumber: ['', [Validators.required,Validators.pattern('^[A-Za-z]{2}\\s[0-9]{2}\\s[A-Za-z]{2}\\s[0-9]{4}$')]],    
       TruckImage: ['', [Validators.required]],
        Licence: ['', [Validators.required]],
        Adhar: ['', [Validators.required]],
        Mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        Pan: ['', [Validators.required]]
      })
    }

    get errorControl() {
      return this.ShipperForm.controls;
    } 
  
    submitForm(){
      this.isSubmitted = true;
      if (!this.ShipperForm.valid) {
       alert('Please provide all the required values!')      
      } else {
       
           fetch("https://ill-pear-salmon-cape.cyclic.app/shippers/addshipper" ,{
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
