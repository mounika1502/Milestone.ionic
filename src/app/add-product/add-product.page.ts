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
  constructor(private router: Router, private apii: UploadService, private http: HttpClient) { }
  TodayDate = "2023-04-12"
  date1 = new Date()
  currentyear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() + 1;
  currentday = this.date1.getUTCDate()
  finalmonth: any;
  finalday: any;
  filePath: any;
  ngOnInit(): void {
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
    this.text = JSON.parse(localStorage.getItem('Login') || '{}')
    console.log(this.text)
    this.textaws = JSON.parse(localStorage.getItem('aws') || '{}')
    console.log(this.textaws)
    this.productForm = new FormGroup({
      sid: new FormControl(0),
      imgurl :new FormControl(""),
      prodId: new FormControl(""),
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
      manufacturername: new FormControl(""),
   
      // filePath: new FormControl()
    })
  }
  cancel() {
    this.addProduct = false
  }
  toggle() {
    this.size = !this.size
  }
  submitForm() {
    console.log(this.productForm.value)
    if ( this.productForm.value.prodId == '' ||
      this.productForm.value.name == '' ||
      this.productForm.value.color == '' ||
      this.productForm.value.size == '' ||
      this.productForm.value.thick == '' ||
      this.productForm.value.qnt == '' ||
      this.productForm.value.region == '' ||
      this.productForm.value.quality == '' ||
      this.productForm.value.date == '' ||
      this.productForm.value.stone == '' ||
      this.productForm.value.Quantity == '' ||
      this.productForm.value.mobile == '' ||
      this.productForm.value.PhoneNumber == '' ||
      this.productForm.value.description == '' ||
      this.productForm.value.manufacturername == '' ||
      this.productForm.value.imgurl == '' ||
      this.productForm.value.price == '') {
   
    } else {
      alert("Please Fill all Details")
      console.log(this.productForm.value)
      fetch("http://localhost:7500/products/addproduct" , {
        method: 'post',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.productForm.value),
      }).then(res => res.json())
        .then(result => {
          console.log(result)
          window.location.href="/inventory"
         
        }
        )
        .catch(error => console.log('error', error))
     }
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
  //  this.submitForm(docid) 
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
  get sid(): FormControl {

    return this.productForm.get("sid") as FormControl;
  }
  get name(): FormControl {

    return this.productForm.get("name") as FormControl;
  }
  get stone(): FormControl {

    return this.productForm.get("stone") as FormControl;
  }

  get prodId(): FormControl {

    return this.productForm.get("prodId") as FormControl;         //In this method to get all details
  }
  get color(): FormControl {

    return this.productForm.get("color") as FormControl;
  }
  get thick(): FormControl {

    return this.productForm.get("thick") as FormControl;
  }

  get manufacturername(): FormControl {

    return this.productForm.get("manufacturername") as FormControl;
  }
  get qnt(): FormControl {

    return this.productForm.get("qnt") as FormControl;
  }
  // get filePath():FormControl{
  //   return this.productForm.get("filePath") as FormControl;
  // }
  get Quantity(): FormControl {
    return this.productForm.get("Quantity") as FormControl;
  }

  get price(): FormControl {
    return this.productForm.get("price") as FormControl;
  }
  get quality(): FormControl {
    return this.productForm.get("quality") as FormControl;
  }
  // get date():FormControl{
  //   return this.productForm.get("date") as FormControl;
  // }
  get description(): FormControl {
    return this.productForm.get("description") as FormControl;
  }
  get region(): FormControl {
    return this.productForm.get("region") as FormControl;
  }
  get PhoneNumber(): FormControl {
    return this.productForm.get("PhoneNumber") as FormControl;
  }
}