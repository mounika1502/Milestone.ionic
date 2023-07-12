import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: any;
  loginData: any;
  visible = true;
  isAlertOpen = false;
  public alertButtons = ['OK'];
  isSubmitted = false;
  changetype = true;
  
  constructor(public formBuilder: FormBuilder, 
    private alertController: AlertController, 
    public Loading:LoadingController,
    private router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  // setOpen(isOpen: boolean) {
  //   this.isAlertOpen = isOpen;
  //   }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Success...',
      buttons: ['OK']
    });

    await alert.present();

    await alert.onDidDismiss().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  async failedAlert() {
    const alert = await this.alertController.create({
      header: 'Login failed',
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



  async loginSubmit() {
    const Loading = await this.Loading.create({
      message: "Loading...",
      spinner: 'crescent'
    })
    await Loading.present()
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      this.validateAlert()
      Loading.dismiss()
    } else {
      fetch("https://milestone-096608973980.herokuapp.com/loginform/addlogin", {
        method: 'post',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.loginForm.value)
      }).then(res => res.json())
        .then(result => {
          this.loginData = result
          console.log(this.loginData)
          localStorage.setItem('Login', JSON.stringify(this.loginData));
          // localStorage.setItem('isLogedin',JSON.stringify(true));
          console.log(this.loginData)

          if (result.status == 'failed') {
            this.failedAlert()
            Loading.dismiss()
          } else {
            this.presentAlert()
            Loading.dismiss()
          }
        })
    }
  }

}