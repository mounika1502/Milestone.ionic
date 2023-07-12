import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UploadService } from '../upload.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  date = "12-04-2023"
  imgurl: any
  textaws: any;
  isSubmitted = false;
  aa: any;

  constructor(private apii:UploadService,
    public formBuilder: FormBuilder,
    private alertController: AlertController,
    public Loading:LoadingController,
    private router: Router,) { }

  TodayDate = "2023-04-12"
  date1 = new Date()
  currentyear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() + 1;
  currentday = this.date1.getUTCDate()
  finalmonth: any;
  finalday: any;
  filePath: any;

  ngOnInit() {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.aa=this.text.UserType
    console.log(this.aa)

    this.productForm = this.formBuilder.group({    
      Number: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      color: ['', [Validators.required]],
      size:  ['', [Validators.required]],
      stone: ['', [Validators.required]],
      region: ['', [Validators.required]],
      date: ['', [Validators.required]],
      mobile: [''],
      manufacturername:  ['', [Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      PhoneNumber : ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    })

    if (this.currentMonth < 10) {
      this.finalmonth = "0" + this.currentMonth
    } else {
      this.finalmonth = this.currentMonth
    }
    if (this.currentday < 10) {
      this.finalday = "0" + this.currentday
    } else {
      this.finalday = this.currentday
    }
    this.TodayDate = this.currentyear + "-" + this.finalmonth + "-" + this.finalday;
    this.date = this.finalday + "-" + this.finalmonth + "-" + this.currentyear

    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text.mobile)

    this.textaws = JSON.parse(localStorage.getItem('aws') || '{}')
    console.log(this.textaws)
  }

  get errorControl() {
    return this.productForm.controls;
  } 

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Added...',
      buttons: ['OK']
    });  
    await alert.present();  
    await alert.onDidDismiss().then(() => {
      // this.router.navigateByUrl('/raw-product');
      // window.location.href="/raw-product"
    });
  }

  async FailedAlert() {
    const alert = await this.alertController.create({
      header: 'Product already existed',
      buttons: ['OK']
    });  
    await alert.present();
  }

  async submitForm(id:any){
    const Loading = await this.Loading.create({
      message: "Loading...",
      spinner: 'crescent'
    })
    await Loading.present()
      console.log(this.productForm.value)
       fetch("https://milestone-096608973980.herokuapp.com/raw/addraw/"+id, {
       method:'post',
       headers:{
         "Access-Control-Allow-Origin": "*",
         "Content-Type":'application/json'
       },
       body:JSON.stringify(this.productForm.value)
       
     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)
       Loading.dismiss() 
       if(result.status === 'failed'){
     this.FailedAlert() 
    //  Loading.dismiss()     
       }else{ 
      //  this.presentAlert()  
       alert('Product added successfully')
       Loading.dismiss() 
       window.location.href="/raw-product"
      }      
   }
  )      
       .catch(error => console.log('error',error))    
}


  async onClick() {
  const Loading = await this.Loading.create({
    message: "Loading...",
    spinner: 'crescent'
  })
  await Loading.present()
  this.isSubmitted = true;
  if (!this.productForm.valid) {
   alert('Please provide all the required values!') 
   Loading.dismiss() 
  } else {

  console.log(this.data)
  const formdata = new FormData();
  for(let pdffiles of this.images){
  formdata.append("file",pdffiles)
}
 this.apii.postfiletos2(formdata).subscribe(data=>{
  console.log(data)
  var docid=data.imageFile._id
  this.submitForm(docid) 
 
 })
  console.log(formdata)
}
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

