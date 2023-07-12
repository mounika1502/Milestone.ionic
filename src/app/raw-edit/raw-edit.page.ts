import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-raw-edit',
  templateUrl: './raw-edit.page.html',
  styleUrls: ['./raw-edit.page.scss'],
})
export class RawEditPage implements OnInit {
  data: any;
  rawForm:any;
  text: any;
  aa: any;
  datas: any;

  constructor(private apii:UploadService,public Loading:LoadingController,
    private router: Router,private alertController: AlertController,) { }

  ngOnInit() {
    this.rawForm = new FormGroup ({
      Number:new FormControl(""),
      Name: new FormControl(""),
      color: new FormControl(""),
      size: new FormControl(""),
      stone:new FormControl(""),
      region: new FormControl(""),
      date: new FormControl(""),
      manufacturername: new FormControl(""),
      PhoneNumber : new FormControl("")
    })
    console.log(this.rawForm)

    this.data = JSON.parse(localStorage.getItem('RawUpdate') || '{}') 
    console.log(this.data)

    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.aa=this.text.UserType
    console.log(this.aa)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Updated successfully...',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss().then(() => {
      this.router.navigateByUrl('/raw-data');
    });
  }

//   update(id:any){
//     localStorage.setItem('RawUpdate',JSON.stringify(this.data)); 
//     var data={
//       Number:this.rawForm.value.Number,
//       Name:this.rawForm.value.Name,
//       color:this.rawForm.value.color,
//       size:this.rawForm.value.size,
//       stone:this.rawForm.value.stone,
//       region:this.rawForm.value.region,
//       date:this.rawForm.value.date,
//       manufacturername:this.rawForm.value.manufacturername,
//       PhoneNumber:this.rawForm.value.PhoneNumber    
//      }
//   this.apii.EditRaw(data,id).subscribe(datas=>{
//     console.log(datas)
//     this.presentAlert()
//     // window.location.href=("/raw-data")  
//     if(datas){
//       // alert('Updated successfully')
//       //  window.location.href=("/profile")     
//     }

//   })
// }
  
  async update(id:any){  
    const Loading = await this.Loading.create({
      message : "Loading...",
      spinner:'crescent'      
    }) 
    await Loading.present()
    localStorage.setItem('RawUpdate',JSON.stringify(this.datas));
    fetch("https://milestone-096608973980.herokuapp.com/raw/editRaw/" + id,  {
      method: 'PUT',
      headers: {
        "access-Control-Allow-Origin": "*",        
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.rawForm.value),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.datas = result
        console.log(this.datas)
        this.presentAlert()   
        Loading.dismiss()          
      }
      ).catch(err =>
        console.log(err))

  }

}
