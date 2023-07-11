import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  text: any;
  aa: any;
  cartItem:number = 0;
  name: any;

  constructor(private alertController: AlertController,private router: Router) { }

  ngOnInit() {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.name = this.text.Firstname
    this.aa = this.text.UserType
    console.log(this.aa)
 } 

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
  
}
