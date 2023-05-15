import { Component } from '@angular/core';
// import OneSignal from 'onesignal-cordova-plugin';
import { Platform } from '@ionic/angular';
// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

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
  constructor(private platform: Platform ) {

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
    console.log(this.text)
    this.aa = this.text.UserType
    console.log(this.aa)


    
    // this.getUniqueDeviceID();

  }  // itemsCart is a global array


  logout() {
    // localStorage.clear();

    window.location.href = '/login'
   

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


  // Call this function when your app starts
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


}
