import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.page.html',
  styleUrls: ['./raw-data.page.scss'],
})
export class RawDataPage implements OnInit {
    
    data: any;
  text: any;
  aa: any;
     constructor() { 
     }
   
     ngOnInit() {

      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa = this.text.UserType
      console.log(this.aa)

      this.data = JSON.parse(localStorage.getItem('Raw') || '{}') 
      console.log(this.data) 
     }

     edit(products:any){      
        this.data = products
        window.location.href=("./raw-edit")
        localStorage.setItem('RawUpdate',JSON.stringify(products));
        console.log(products)
      }

      delete(Number:any){  
        if(confirm("Are you sure do you want to delete")){
      
        fetch("https://ionic-node.vercel.app/raw/delete/" + Number,{
         method:'DELETE',
         headers:{
            "access-Control-Allow-Origin":"*"
          },
        })
        .then(response => response.json())
        .then(result=>{
          console.log(result)
          window.location.href='./raw-product'
       }
        ).catch(err =>
           console.log(err))    
        }
      }
      }
