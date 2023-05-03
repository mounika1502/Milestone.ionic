import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  text:any=[]  
  profile = true;
  companyForm= false;
  products: any
  
  profileForm:any={
  Firstname:'',
  Lastname:'',
  mobile:'',
  Email:'',
  Password:'',
  City:'',
  Pincode:'',
  Street:'',
  State:'',
  } 
  Form: any;
filePath: any;
  images: any;
  data: any;

  constructor( private apii: UploadService, private fb:FormBuilder,private router:Router) {
  }

  ngOnInit(): void {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)

     this.Form = new FormGroup({
      Company:new FormControl(""),
      Location:new FormControl(""),
      bio:new FormControl("")

     })
     console.log(this.Form)
  }

  company(){
    this.companyForm = true;
    this.profile = false;
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

            Swal.fire( 'Submitted successfully!', '', 'success').then(() =>{         
              this.companyForm = false
              this.profile = true
            })

            Swal.fire( 'Added successfully!', '', 'success').then(() =>{   
             this.router.navigate(['login'])  
            //  window.location.reload()    
              // this.companyForm = false
              // this.profile = true
            })  

                  
          }
          ).catch(err =>
            console.log(err))
      }
      selectImage(event: any) {
        if (event.target.files.length > 0) {
          console.log(event.target.files)
    
          const file = event.target.files;
          //const file:File = event.target.files[0];
          console.log(file);
          this.images = file;
          // const formdata = new FormData();
          // formdata.append('file', this.images);
          // console.log(formdata)
           
        }
        console.log(this.images)
      }
      // onClick() {
  
      //   console.log(this.data)
      // const formdata = new FormData();
      // for(let pdffiles of this.images){
      //   formdata.append("file",pdffiles)
      // }
      //  this.apii.postfiletos3(formdata).subscribe(data=>{
      //   console.log(data)
      //   var docid=data.imageFile._id
       
      //   alert("file uploaded")
      //  })
    
      //   //formdata.append('file',this.images);
      //   console.log(formdata)
      // }    
  arrow(){
    this.companyForm = false
    this.profile = true
  }

  edit(loginData:any){
     this.profileForm = loginData
     localStorage.setItem('Login',JSON.stringify(loginData))
     console.log(loginData)  
  } 

}
