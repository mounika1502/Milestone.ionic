import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.page.html',
  styleUrls: ['./raw-data.page.scss'],
})
export class RawDataPage implements OnInit {
    
    data: any;
     constructor() { 
     }
   
     ngOnInit() {
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
      
        fetch("https://happy-erin-leather-jacket.cyclic.app/raw/delete/" + Number,{
         method:'DELETE',
         headers:{
            "access-Control-Allow-Origin":"*"
          },
        })
        .then(response => response.json())
        .then(result=>{
          console.log(result)
          alert('deleted')
          window.location.href='./raw-product'
       }
        ).catch(err =>
           console.log(err))    
        }

      }
