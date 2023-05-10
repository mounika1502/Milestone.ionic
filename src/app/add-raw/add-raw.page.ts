import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-add-raw',
  templateUrl: './add-raw.page.html',
  styleUrls: ['./add-raw.page.scss'],
})
export class AddRawPage implements OnInit {
  productForm:any;
  text: any;
  images: any;
  data: any;
  constructor(private apii:UploadService) { }

  ngOnInit() {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text.mobile) 
    this.productForm = new FormGroup ({
    
      Image :new FormControl(""),
      Number: new FormControl(""),
      Name: new FormControl(""),
      color: new FormControl(""),
      size: new FormControl(""),
      stone:new FormControl(""),
      region: new FormControl(""),
      date: new FormControl(""),
      mobile:new FormControl(""),
      manufacturername: new FormControl(""),
      PhoneNumber : new FormControl("")
    })
  }
  submitForm(id:any){
    // if(this.productForm.value.Image ==''||
    // this.productForm.value.Number ==''||
    // this.productForm.value.Name ==''||
    // this.productForm.value.color ==''||
    // this.productForm.value.region ==''||
    // this.productForm.value.PhoneNumber ==''||
    // this.productForm.value.manufacturername ==''||
    // this.productForm.value.color ==''||
    // this.productForm.value.stone ==''||
    // this.productForm.value.size ==''||
    // this.productForm.value.mobile ==''||
    // this.productForm.value.date =='')
    // { 
    //   Swal.fire(  
    //      'Cancelled',  
    //      'You Must  Enter All fields !',           //give for condition to take all properties take empty values
    //      'error'                                  //then take one alert message like not save all data
    //    ) 
    // }else{  
      console.log(this.productForm.value)
       fetch("https://tiny-ruby-centipede-hat.cyclic.app/raw/addraw/"+id, {
       method:'post',
       headers:{
         "Access-Control-Allow-Origin": "*",
         "Content-Type":'application/json'
       },
       body:JSON.stringify(this.productForm.value)
       
     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)
       if(result.status === 'failed'){
        alert('noo')
        // Swal.fire( 
        //   'Cancelled',
        //   'Product already existed!',
        //   'error'
        // )
       }else{ 
        alert('yess')     
      //   Swal.fire( 'Submitted successfully!', '', 'success').then(() =>{         
          window.location.href="/raw-product"
      //  } )
      }
      
   }
  )      
       .catch(error => console.log('error',error)) 
   
}

onClick() {
  console.log(this.data)
const formdata = new FormData();
for(let pdffiles of this.images){
  formdata.append("file",pdffiles)
}
 this.apii.postfiletos2(formdata).subscribe(data=>{
  console.log(data)
  var docid=data.imageFile._id
  this.submitForm(docid) 
  alert("file uploaded")
 })
  console.log(formdata)
}
selectImage(event: any) {
  if (event.target.files.length > 0) {
    console.log(event.target.files)
    const file = event.target.files;
    console.log(file);
    this.images = file;   
  }
  console.log(this.images)
}
}
