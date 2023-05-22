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

  constructor( private apii: UploadService, private fb: FormBuilder,private router:Router) {
  }

  ngOnInit(): void {

    
    
      //formdata.append('file',this.images);
    
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)
     console.log(this.text.filePath)

     this.Form = new FormGroup({
      Company:new FormControl(""),
      Location:new FormControl(""),
      bio:new FormControl("")

     }) 
     this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)
     this.aa=this.text.UserType
     console.log(this.aa)
  }


  arrow(){
    this.companyForm = false;
    this.profile = true;
  }

 
      // selectImage(event: any) {
      //   if (event.target.files.length > 0) {
      //     console.log(event.target.files)
    
      //     // const file = event.target.files;
      //     const file:File = event.target.files[0];
      //     console.log(file);
      //     this.images = file;
          
      //     // const formdata = new FormData();
      //     // formdata.append('file', this.images);
      //     // console.log(formdata)
           
      //   }
      //   console.log(this.images)
      // }
      // onClick() {
      //   console.log(this.data)
      //   const formdata = new FormData();
      
      //     formdata.append("file",this.images)
        
      //    this.apii.postfiletos5(formdata).subscribe(data=>{
      //     console.log(data)
      //     console.log(formdata)
      //     var docid=data.imageFile.filePath
      //     console.log(docid)
      //     var docid=data.imageFile._id
      //     this.signupSubmit(docid) 
      //     alert("file uploaded")
      //    })
      
      // }    

  edit(text:any){
    window.location.href = ("/profile-edit")
    localStorage.setItem('Login',JSON.stringify(text))
    console.log(text)  
  } 

  submit(){
    localStorage.setItem('Login',JSON.stringify(this.text))
    console.log(this.Form.value)
    
        fetch("https://ill-pear-salmon-cape.cyclic.app/signupform/addCompany/" + this.text.Authentication, {
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

         this.text['Location']=this.Form.value.Location
         this.text['bio']=this.Form.value.bio

              this.products = result  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
            console.log(this.products)         
            localStorage.setItem('Login',JSON.stringify(this.text))

            alert('Added successfully')   
            this.companyForm = false;
            this.profile = true;                   
          }
          ).catch(err =>
            console.log(err))
      }

}
