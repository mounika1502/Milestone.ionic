import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { HttpResponse, HttpResponse, HttpResponse, HttpResponse, HttpResponse, HttpResponse } from '@capacitor/core';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http:HttpClient) { }
  postfiletos3(data:any)  {
    return this.http.post<any>('https://sore-gold-coyote-wrap.cyclic.app/upload/upload',data)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error:any){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage= error.error.message;
    }else{
      errorMessage = `Error Code:${error.status}/nMessage:${error.message}`
    }
    return throwError(errorMessage)
  }
  updateShipper(data:any,id:any){
    return this.http.put('https://sore-gold-coyote-wrap.cyclic.app/shippers/editShipper/' + id ,data)
   }
   postfiletos2(data:any)  {
    return this.http.post<any>('https://sore-gold-coyote-wrap.cyclic.app/s3upload/uploads3',data)
    .pipe(catchError(this.errorHandler))
  }
  postfiletos4(data:any)  {
    return this.http.post<any>('https://sore-gold-coyote-wrap.cyclic.app/Uploadshipper/uploadshipper',data)
    .pipe(catchError(this.errorHandler))
  }
  // postfiletos5(data:any)  {
  //   return this.http.post<any>('https://sore-gold-coyote-wrap.cyclic.app/profiles3/uploadprofile',data)
  //   .pipe(catchError(this.errorHandler))
  // }

  postfiletos5(data:any,_id:any)  {
    return this.http.post<any>('https://sore-gold-coyote-wrap.cyclic.app/signupform/upload/'+_id,data)
   
  }

  updateprofiledetails(data:any,id:any)  {
    return this.http.put <any>('https://sore-gold-coyote-wrap.cyclic.app/signupform/editProfile/'+id,data)
     .pipe(catchError(this.errorHandler))
  } 
}
