import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.page.html',
  styleUrls: ['./companydetails.page.scss'],
})
export class CompanydetailsPage implements OnInit {

  text:any=[]  
  profile = true;
  companyForm= false;
  products: any
  
  Form: any;
  filePath: any;
  images: any;
  data: any;
  aa: any;

  constructor( private apii: UploadService, 
    private fb: FormBuilder,
    private router:Router,
    private alertController: AlertController) {
  }

  ngOnInit(): void {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.aa=this.text.UserType
    console.log(this.aa)

     this.Form = new FormGroup({
      Company:new FormControl(""),
      Location:new FormControl(""),
      bio:new FormControl("")

     }) 
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

  edit(text:any){
    window.location.href = ("/profile-edit")
    localStorage.setItem('Login',JSON.stringify(text))
    console.log(text)  
  } 

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Added successfully',
      buttons: ['OK']
    });  
    await alert.present();  
    await alert.onDidDismiss().then(() => {
      this.router.navigateByUrl('/profile');
    });
  }

  submit(){
    localStorage.setItem('Login',JSON.stringify(this.text))
    console.log(this.Form.value)
    
        fetch("https://milestone-096608973980.herokuapp.com/signupform/addCompany/" + this.text.Authentication, {
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
            this.presentAlert()
          // window.location.href='/profile'
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
