import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
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
