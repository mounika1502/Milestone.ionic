import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipper-edit',
  templateUrl: './shipper-edit.page.html',
  styleUrls: ['./shipper-edit.page.scss'],
})
export class ShipperEditPage implements OnInit {

  data: any;

  constructor(private service:UploadService,private router:Router) { }

  ngOnInit(): void {
    const localdata=localStorage.getItem('Shippers')
    if(localdata!=null){
      this.data=JSON.parse(localdata)
    } 
  }

  update(id:any){
    localStorage.setItem('Shippers',JSON.stringify(this.data))
    const data = {
      Name: this.data.Name,
      Mobile:this.data.Mobile,
      Address:this.data.Address,
      Truck:this.data.Truck,
      Trucknumber:this.data.Trucknumber,
      Truckimage:this.data.Truckimage,
      Licence:this.data.Licence,
      Aadhar:this.data.Aadhar,
      Pan:this.data.Pan
    }
    console.log(data)
    this.service.updateShipper(data,id).subscribe((datas)=>{
      console.log(datas)
      if(datas){
        // Swal.fire( 'Updated successfully!', '', 'success').then(() =>{ 
        //   this.router.navigate(['/shippers'])     
        // }) 
      }
    })  
  }

}
