import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  signupForm=false;
  data: any=[];
  aa: any={}
  text: any;
  cartItem:number = 0;
  constructor() {
   //this.get()
   }
  ngOnInit(): void {
     this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)
     this.aa=this.text.UserType
     console.log(this.aa)
  }  // itemsCart is a global array

logout(){
  // localStorage.clear();

 window.location.href='/login'

}
}
