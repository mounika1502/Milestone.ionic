import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  UniqueDeviceID!:string;
  SignupForm: any;
  loginForm: any ;
  isAlertOpen = false;
  isSubmitted = false;
  public alertButtons = ['OK'];
  filePath: any;
  CityState: any;
  Pincode:any
  district: any;
  confirmPassword: any;


  setOpen(isOpen: boolean) {
  this.isAlertOpen = isOpen;
  }

  constructor(private router:Router,
    public formBuilder: FormBuilder, 
    public Loading:LoadingController,
    private alertController: AlertController) { }

  ngOnInit() {
    this.getCityState()
    this.SignupForm = this.formBuilder.group({  
      Firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      Lastname : ['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
      mobile : ['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      Email : ['',[Validators.required,Validators.email]],
      Password : ['',[Validators.required]],
      City : ['',[Validators.required]],
      UserType : ['',[Validators.required]],
      Pincode : ['',[Validators.required]],
      Street : ['',[Validators.required]],
      State : ['',[Validators.required]],
      Company : ['',[Validators.required]],
      // uniqueDeviceID:[''),
      // Isadd:['1'),
    });   
  }

  async getCityState() {

    const url = `https://api.postalpincode.in/pincode/${this.Pincode}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data[0].Status === 'Success') {
      const postOffice = data[0].PostOffice[0];
      this.CityState = ` ${postOffice.State}`;
      // this.district = ` ${postOffice.District}`;
    } else {
      this.CityState = 'Invalid Pincode';
  
    }
  }
   

  // getUniqueDeviceID() {
  //   this.uniqueDeviceID.get()
  //     .then((uuid: any) => {
  //       console.log(uuid);
  //       this.UniqueDeviceID = uuid;

        
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //       this.UniqueDeviceID = "Error! ${error}";
  //       alert(this.UniqueDeviceID)
  //     });
  // }
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Register Successfully',
      buttons: ['OK']
    });  
    await alert.present();  
    await alert.onDidDismiss().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  async FailedAlert() {
    const alert = await this.alertController.create({
      header: 'User already existed',
      buttons: ['OK']
    });  
    await alert.present();
  }

  async validateAlert() {
    const alert = await this.alertController.create({
      header: 'Please provide all the required values!',
      buttons: ['OK']
    });  
    await alert.present();
  }

  async PasswordAlert() {
    const alert = await this.alertController.create({
      header: 'password not matched',
      buttons: ['OK']
    });  
    await alert.present();
  }  
 
  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  get errorControl() {
    return this.SignupForm.controls;
  } 

  async signupSubmit(){
    const Loading = await this.Loading.create({
      message : "Loading...",
      spinner:'crescent'      
    }) 
    await Loading.present()
    var Obj={
      "confirmPassword":this.confirmPassword
    }
    this.isSubmitted = true;
    if (!this.SignupForm.valid) {
      this.validateAlert()
    //  alert('Please provide all the required values!') 
     Loading.dismiss() 
    } else {
     console.log(this.SignupForm.value)

    console.log(Obj.confirmPassword) 
    if(this.SignupForm.value.Password == Obj.confirmPassword) {

     console.log(this.SignupForm.value.Password)
     console.log(Obj.confirmPassword)

    fetch("https://milestone-096608973980.herokuapp.com/signupform/addsignupdetails", {

     method:'post',
     headers:{
       "Access-Control-Allow-Origin": "*",
       "Content-Type":'application/json'
     },

     body:JSON.stringify(this.SignupForm.value)  
  
   }).then(res=> res.json())
   .then(result=>{ 
     console.log(result)
    
    if(result.status == 'failed'){
      this.FailedAlert()
      // alert('User already existed')
      Loading.dismiss()
    }  else{
      this.presentAlert()
    //  alert("Register Successfully")

   Loading.dismiss()
    var body ={
      Email:this.SignupForm.value.Email
    }
    fetch("https://milestone-096608973980.herokuapp.com/signupform/emailnotification", {
    method:'post',
    headers:{
    "Access-Control-Allow-Origin": "*",
    "Content-Type":'application/json'
    },  
    body:JSON.stringify(body)
    
    }).then(res=> res.json())
    .then(result=>{ 
    console.log(result) 
    Loading.dismiss() 
    })
    .catch(error => console.log('error',error))
    Loading.dismiss()
    }
            
   })       
     .catch(error => console.log('error',error)) 
     Loading.dismiss()    
    }else {
      this.PasswordAlert()
      // alert('password not match')
      Loading.dismiss()
    }
  }
  }
}
