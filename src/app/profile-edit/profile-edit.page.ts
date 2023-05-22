import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  text: any;
  ProfileForm: any;
  aa: any;
  images: any;
  data: any;
  docid: any;

  constructor(private apii:UploadService) { }

  ngOnInit() {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.aa=this.text.UserType
    console.log(this.aa)

     
    this.ProfileForm = new FormGroup({
      Firstname:new FormControl(""),
      Lastname:new FormControl(""),
      mobile:new FormControl(""),
      Email:new FormControl(""),
      Password:new FormControl(""),
      City:new FormControl(""),
      Pincode:new FormControl(""),
      Street:new FormControl(""),
      State:new FormControl(""),
      Company:new FormControl(""),
      Location:new FormControl(""),
      bio:new FormControl(""),
      filePath:new FormControl("")
    })
  }

  update(filePath:any){  
     console.log(this.text.Authentication) 
    // console.log(this.ProfileForm.value)
     console.log(filePath)
     var bodydata={
      Firstname:this.ProfileForm.value.Firstname,
      Lastname:this.ProfileForm.value.Lastname,
      mobile:this.ProfileForm.value.mobile,
      Email:this.ProfileForm.value.Email,
      Password:this.ProfileForm.value.Password,
      City:this.ProfileForm.value.City,
      Pincode:this.ProfileForm.value.Pincode,
      Street:this.ProfileForm.value.Street,
      State:this.ProfileForm.value.State,
      Company:this.ProfileForm.value.Company,
      // Location:this.ProfileForm.value.Location,
      bio:this.ProfileForm.value.bio,
      filePath:filePath
     }
     console.log(bodydata)
    // localStorage.setItem('Login',JSON.stringify(this.text));
    // fetch("https://ill-pear-salmon-cape.cyclic.app/signupform/editProfile/" +this.text.Authentication,   {
    //   method: 'PUT',
    //   headers: {
    //     "access-Control-Allow-Origin": "*",        
    //     "Content-Type": 'application/json'
    //   },
    //   body: JSON.stringify(bodydata),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result)
    //    alert('updated successfully') 
    //     // window.location.href='./profile'             
    //   }
    //   ).catch(err =>
    //     console.log(err))
      localStorage.setItem('Login',JSON.stringify(this.text));
    this.apii.updateprofiledetails(bodydata,this.text.Authentication).subscribe(data=>{
      console.log(data)
      // var docid=data.imageFile.filePath
      // this.update(docid) 
     
     })
  }
  onClick() {
    console.log(this.data)
  const formdata = new FormData();
  for(let pdffiles of this.images){
    formdata.append("file",pdffiles)
  }
   this.apii.postfiletos5(formdata).subscribe(data=>{
    console.log(data)
    this.docid=data.imageFile.filePath
  
    this.update(this.docid) 
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
