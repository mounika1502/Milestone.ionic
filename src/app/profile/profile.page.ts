import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  imageFile:any
  text:any=[]  
  profile = true;
  companyForm= false;
  products: any
  Form: any;
  filePath: any;
  images: any;
  data: any;
  aa: any;
  signupSubmit: any;
  test: any=[]
  updateddata: any;
  ProfileForm: any;
  docid: any;
  Firstname:any
  aaa: any;
  constructor( private apii: UploadService, private fb: FormBuilder,private router:Router) {

  }

  ngOnInit(): void {

     this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)
     this.aa=this.text.UserType
     this.aaa=this.text.Authentication
     console.log(this.text.Company)
     console.log(this.aaa)   
  } 
     get(){
       fetch("https://milestone-096608973980.herokuapp.com/signupform/getby/" + this.aaa, {
         method: 'GET',
       headers: {
         "access-Control-Allow-Origin": "*",  
       },  
     })
       .then(response => response.json())
       .then(result => {
         console.log(result),
           this.profile = result.product.filePath
         console.log(this.profile)  
       }  
       ).catch(err =>
         console.log(err))
     }
  
  edit(text:any){
    window.location.href = ("/profile-edit")
    localStorage.setItem('Login',JSON.stringify(text))
    console.log(text)  
  }     

     selectImage(event: any) {
        if (event.target.files.length > 0) {
          console.log(event.target.files)
          const file = event.target.files;
          console.log(file);
          this.images = file;   
        }
        console.log(this.images)
        this.onClick()
      }      
      
      onClick() {
      const formdata = new FormData();
      for(let pdffiles of this.images){
        formdata.append("file",pdffiles)
        console.log(pdffiles)
      }      
      console.log(formdata)      
       this.apii.postfiletos5(formdata,this.text.Authentication).subscribe((data)=>{
        console.log(data)  
        console.log(data.message.filePath) 
        this.get()
        this.text["filePath"] = data.message.filePath  
        localStorage.setItem('Login',JSON.stringify(this.text)) 
        this.text = JSON.parse(localStorage.getItem('Login')||'{}')   
        console.log(this.text.filePath) 
       })     
   
    }

    

}
