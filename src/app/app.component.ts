import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import OneSignal from 'onesignal-cordova-plugin';

import { AlertController, Platform } from '@ionic/angular';
// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
// import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  UniqueDeviceID!:string;
  signupForm = false;
  data: any = [];
  aa: any = {}
  text: any;
  cartItem: number = 0;
  profile = true;

  AllNotifications: any[] = [];
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },   
  ];
  texts: any;

  getInitials(name: string): string {
    const parts = name.split(' ');
  
    if (parts.length === 1) {
      return parts[0].charAt(0).toUpperCase();
    } else {
      let initials = '';
      for (const part of parts) {
        initials += part.charAt(0).toUpperCase();
      }
      return initials;
    }
  }

  aaa: any;
  constructor(private platform: Platform,private alertController: AlertController,private router: Router)  {
    this.text = JSON.parse(localStorage.getItem('Login') || '{}')
    platform.ready().then(() => {
      this.OneSignalInit();
    })
    const storedItems = localStorage.getItem('InappNotifictions');
    if (storedItems) {
      this.AllNotifications = JSON.parse(storedItems);
    };
  }
 

  ngOnInit(): void {
    this.text = JSON.parse(localStorage.getItem('Login') || '{}')
    // this.texts = JSON.parse(localStorage.getItem('isLogedin') || '{}')
    console.log(this.texts)
    console.log(this.text)
    this.aa = this.text.UserType
    console.log(this.aa)   
    this.aaa=this.text.Authentication 
    // this.getUniqueDeviceID();

  }  // itemsCart is a global array

  // async presentAlert() {
  //   const confirmAlert = await this.alertController.create({
  //     header: 'Are you sure you want to logout',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           // Code to handle the cancel button click
  //           console.log('Confirm alert dismissed');
  //         }
  //       },
  //       {
  //         text: 'OK',
  //         handler: () => {
  //           localStorage.clear(); // Clear the localStorage
  //           console.log('OK button clicked');
  //           this.router.navigateByUrl('/login');
  //         }
  //       }
  //     ]
  //   });
  
  //   await confirmAlert.present();
  // }

logout(){
  localStorage.clear()
  // localStorage.setItem('isLogedin',JSON.stringify(false));
  // this.presentAlert()
  if(confirm("Are you sure do you want to logout")){
  window.location.href = '/login'    
  }
}

get(){
  fetch("https://sore-gold-coyote-wrap.cyclic.app/signupform/getby/" + this.aaa, {
    method: 'GET',
  headers: {
    "access-Control-Allow-Origin": "*",  
  },  
})
  .then(response => response.json())
  .then(result => {
    console.log(result),
      this.profile = result.product.filePath
    console.log(this.profile)  
  }  
  ).catch(err =>
    console.log(err))
}

  // getUniqueDeviceID() {
  //   this.uniqueDeviceID.get()
  //     .then((uuid: any) => {
  //       console.log(uuid);
  //       this.UniqueDeviceID = uuid;

  //       //alert(this.UniqueDeviceID)
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //       this.UniqueDeviceID = "Error! ${error}";
  //     });
  // }
  OneSignalInit(): void {
    // Uncomment to set OneSignal device logging to VERBOSE  
    // OneSignal.setLogLevel(6, 0);

    // NOTE: Update the setAppId value below with your OneSignal AppId.
    // OneSignal.setAppId("9a906ac4-a44a-4625-9ae1-f5dfa2dd172c");

    // OneSignal.setNotificationWillShowInForegroundHandler((jsonData) => {

    //   console.log("anunya" + JSON.stringify(jsonData))
    //   var a = JSON.stringify(jsonData)
    //   var v = JSON.parse(a)

    //   this.AllNotifications.push(v.notification.body);
    //   localStorage.setItem('InappNotifictions', JSON.stringify(this.AllNotifications));
    //   console.log('trukappp' + localStorage.getItem('InappNotifictions'))
    //   // this show Inapp notifications
    //   alert(v.notification.title + v.notification.body)

    //   alert(localStorage.getItem('InappNotifictions'))
    // })

    //localStorage.setItem('InappNotifictions', v.notification.body)

    //localStorage.setItem('InappNotifictions', JSON.stringify(v.notification.body));



    // let notification: any = [] = JSON.parse(localStorage.getItem('allnotification') || '{}');  
    // localStorage.setItem('allnotification', JSON.stringify(notification));



    // OneSignal.setNotificationOpenedHandler((jsonData) => {

    //   console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    //   //var additionalData = jsonData.notification.additionalData;
    //   //alert(additionalData)
    //   var a = JSON.stringify(jsonData)
    //   var v = JSON.parse(a)
    //   alert(v.notification.title + v.notification.body + v.notification.additionalData.key)
    //   //alert(JSON.stringify(v))
    //   //var created= this.date
    //   this.AllNotifications.push(v.notification.body);
    //   localStorage.setItem('InappNotifictions', JSON.stringify(this.AllNotifications));

    //   console.log('trukappp' + localStorage.getItem('InappNotifictions'))




    //   // this show  notifications
    //   // alert(v.notification.title + v.notification.body )

    //   //alert(localStorage.getItem('InappNotifictions'))
    // });

    // // Prompts the user for notification permissions.
    // //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    // OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
    //   console.log("User accepted notifications: " + accepted);
    // });
    // OneSignal.setExternalUserId(this.UniqueDeviceID,(result)=>{

    // });
  }


  // Call this function when your app starts



}
