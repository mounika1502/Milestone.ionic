import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';
import { UploadService } from '../upload.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage  {
  Size: any;
  [x: string]: any;
  productForm: any;
  addProduct = true;
  text: any;
  size: any;
  data: any = []
  add: any;
  raw: any;
  date = "12-04-2023"
  imgurl: any
  textaws: any;
  images: any;
  constructor(private router: Router, private apii: UploadService, private http: HttpClient,) { }
  TodayDate = "2023-04-12"
  date1 = new Date()
  currentyear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() + 1;
  currentday = this.date1.getUTCDate()
  finalmonth: any;
  finalday: any;
  filePath: any;
  aa:any;
  ngOnInit(): void {
    this.text = JSON.parse(localStorage.getItem('Login') || '{}')
    console.log(this.text)
    this.aa = this.text.UserType
    console.log(this.aa)
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
    this.raw = JSON.parse(localStorage.getItem('rawproduct') || '{}')
    console.log(this.raw)
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text.mobile) 
    this.textaws = JSON.parse(localStorage.getItem('aws') || '{}')
    console.log(this.textaws)

    this.productForm = new FormGroup({
      prodId: new FormControl("",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      name: new FormControl(""),
      color: new FormControl(""),
      size: new FormControl(""),
      stone: new FormControl(""),
      thick: new FormControl(""),
      qnt: new FormControl("0"),
      Quantity: new FormControl(""),
      price: new FormControl(""),
      region: new FormControl(""),
      quality: new FormControl(""),
      date: new FormControl(""),
      mobile: new FormControl(""),
      PhoneNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      description: new FormControl(""),
      manufacturername: new FormControl("")      
    })
  }
  cancel() {
    this.addProduct = false
  }
  toggle() {
    this.size = !this.size
  }
  submitForm(id:any) {
    console.log(this.productForm.value)

      console.log(this.productForm.value)
      fetch("http://localhost:7500/products/addproduct/" +id, {
        method: 'post',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.productForm.value),
      }).then(res => res.json())
        .then(result => {
          console.log(result)
          alert("Added...")
           window.location.href="/inventory"
         
        }
        )
        .catch(error => console.log('error', error))
     
  }
  onClick() {
    console.log(this.data)
  const formdata = new FormData();
  for(let pdffiles of this.images){
    formdata.append("file",pdffiles)
  }
   this.apii.postfiletos3(formdata).subscribe(data=>{
    console.log(data)
    var docid=data.imageFile._id
    this.submitForm(docid) 
   
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