import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  text: any;
  aa: any;

  constructor() { }

  ngOnInit() {
    this.text = JSON.parse(localStorage.getItem('Login') || '{}')
console.log(this.text)
this.aa = this.text.UserType
console.log(this.aa)
  }

}
