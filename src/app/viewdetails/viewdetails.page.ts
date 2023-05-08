import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.page.html',
  styleUrls: ['./viewdetails.page.scss'],
})
export class ViewdetailsPage implements OnInit {
  data: any=[]

  constructor() { }

  ngOnInit() {
    const localdata=localStorage.getItem('orderitems')
    if(localdata!=null){
      this.data = JSON.parse(localdata)
      console.log(this.data)
    }
  }

}
