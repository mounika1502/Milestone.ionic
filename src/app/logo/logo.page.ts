import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.page.html',
  styleUrls: ['./logo.page.scss'],
})
export class LogoPage implements OnInit {

  constructor() { }
spin!:boolean
  ngOnInit() {
setTimeout(() => {
  this.spin=false
  window.location.href="/home"

},2500);
  }

}
