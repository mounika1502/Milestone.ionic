import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  text: any;
  aa: any;

  constructor() { }
spin!:boolean
  ngOnInit() {
setTimeout(() => {
  this.spin=false
  window.location.href="/home"

},2500);
this.text = JSON.parse(localStorage.getItem('Login') || '{}')
console.log(this.text)
this.aa = this.text.UserType
console.log(this.aa)
  }

}
