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
    return this.http.post<any>('https://milestone-096608973980.herokuapp.com/upload/upload',data)
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
    return this.http.put('https://milestone-096608973980.herokuapp.com/shippers/editShipper/' + id ,data)
   }
   postfiletos2(data:any)  {
    return this.http.post<any>('https://milestone-096608973980.herokuapp.com/s3upload/uploads3',data)
    .pipe(catchError(this.errorHandler))
  }
  postfiletos4(data:any)  {
    return this.http.post<any>('https://milestone-096608973980.herokuapp.com/Uploadshipper/uploadshipper',data)
    .pipe(catchError(this.errorHandler))
  }
  // postfiletos5(data:any)  {
  //   return this.http.post<any>('https://milestone-096608973980.herokuapp.com/profiles3/uploadprofile',data)
  //   .pipe(catchError(this.errorHandler))
  // }

  postfiletos5(data:any,_id:any)  {
    return this.http.post<any>('https://milestone-096608973980.herokuapp.com/signupform/upload/'+_id,data)
   
  }

  updateprofiledetails(data:any,id:any)  {
    return this.http.put <any>('https://milestone-096608973980.herokuapp.com/signupform/editProfile/'+id,data)
     .pipe(catchError(this.errorHandler))
  } 

  EditRaw(data:any,id:any)  {
    return this.http.put <any>('https://milestone-096608973980.herokuapp.com/raw/editRaw/'+id,data)
     .pipe(catchError(this.errorHandler))
  } 
}
