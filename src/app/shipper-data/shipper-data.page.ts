import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipper-data',
  templateUrl: './shipper-data.page.html',
  styleUrls: ['./shipper-data.page.scss'],
})
export class ShipperDataPage implements OnInit {
  
    data:any
    text: any;
    aa: any;
  
    constructor() { }
  
    ngOnInit() {
      this.data = JSON.parse(localStorage.getItem('Shippers') || '{}') 
      console.log(this.data) 
  
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa=this.text.UserType
      console.log(this.aa)
    }
  
    //this is for edit the product
  edit(shippers:any){ 
    window.location.href=("./shipper-edit")
    localStorage.setItem('Shippers',JSON.stringify(shippers))   
  }

  delete(Mobile:any){ 
    if(confirm("Are you sure do you want to delete")){   
    fetch("https://milestone-096608973980.herokuapp.com/shippers/delete/" + Mobile,{
     method:'DELETE',
     headers:{
        "access-Control-Allow-Origin":"*"
      },
    })
    .then(response => response.json())
    .then(result=>{
      console.log(result)
      alert('Deleted Successfully')
      window.location.href="/shippers"
    }
    ).catch(err =>
       console.log(err))    
  } 
}

}


