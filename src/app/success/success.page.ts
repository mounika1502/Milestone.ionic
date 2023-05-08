import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  details:any=[];
  getProduct: any;
  text: any;
  ngOnInit(): void {

    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)

    //This is for product getting (gett) call 
     
      

}
}
