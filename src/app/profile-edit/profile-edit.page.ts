import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  text: any;
  ProfileForm: any;
  aa: any;
  images: any;
  data: any;
  docid: any;
Firstname:any
  aaa: any;
  datas: any;
  constructor(private apii:UploadService,private alertController: AlertController,private router: Router) { }

  ngOnInit() {
    const localdata = localStorage.getItem('Login')
    if(localdata!=null){
      this.data = JSON.parse(localdata)
    }
  
  
    console.log(this.data)    

   
    console.log(this.aaa)

    this.ProfileForm = new FormGroup({
      Firstname:new FormControl(""),
      Lastname:new FormControl(""),
      mobile:new FormControl(""),
      Email:new FormControl(""),
      Password:new FormControl(""),
      City:new FormControl(""),
      Pincode:new FormControl(""),
      Street:new FormControl(""),
      State:new FormControl(""),
      Company:new FormControl(""),
      Location:new FormControl(""),
      bio:new FormControl(""),
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Updated successfully...',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss().then(() => {
      this.router.navigateByUrl('/profile');
    });
  }

  // update(Authentication:any){  
  //   localStorage.setItem('Login',JSON.stringify(this.data))

  //    var data={
  //     Firstname:this.data.Firstname,
  //     Lastname:this.data.Lastname,
  //     mobile:this.data.mobile,
  //     Email:this.data.Email,
  //     Password:this.data.Password,
  //     City:this.data.City,
  //     Pincode:this.data.Pincode,
  //     Street:this.data.Street,
  //     State:this.data.State,
  //     Company:this.data.Company,
  //     Location:this.data.Location,
  //     bio:this.data.bio,     
  //    }
  //    console.log(data)
   
  //   this.apii.updateprofiledetails(data,Authentication).subscribe(datas=>{
  //     console.log(datas)
     
      
  //     //window.location.href=("/profile")  
  //     if(datas){
  //       this.presentAlert()
  //       // alert('Updated successfully')
  //       //  window.location.href=("/profile")     
  //     }

  //   })
  //   }
      

  update(id:any){  
    localStorage.setItem('Login',JSON.stringify(this.data))        
     var data={
      Firstname:this.data.Firstname,
      Lastname:this.data.Lastname,
      mobile:this.data.mobile,
      Email:this.data.Email,
      Password:this.data.Password,
      City:this.data.City,
      Pincode:this.data.Pincode,
      Street:this.data.Street,
      State:this.data.State,
      Company:this.data.Company,
      Location:this.data.Location,
      bio:this.data.bio,     
     }
     console.log(data)
    fetch("https://milestone-096608973980.herokuapp.com/signupform/editProfile/" + id,  {
      method: 'PUT',
      headers: {
        "access-Control-Allow-Origin": "*",        
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.data.value),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.datas = result
        console.log(this.datas)
        if(result.status == 'success'){
          this.presentAlert()
        }else{
          alert('something went wrong') 
        }
                  
      }
      ).catch(err =>
        console.log(err))

  }
  autorefresh(event:any){
   
    setTimeout(() => {
  
      event.target.complete()
      
  
        window.location.reload()
      }, 2000);
    }
  }
  


  
 
  



