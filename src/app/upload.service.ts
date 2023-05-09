import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http:HttpClient) { }
  postfiletos3(data:any)  {
    return this.http.post<any>('http://localhost:7500/upload/upload',data)
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
    return this.http.put('http://localhost:7500/shippers/editShipper/' + id ,data)
   }
   postfiletos2(data:any)  {
    return this.http.post<any>('http://localhost:7500/s3upload/uploads3',data)
    .pipe(catchError(this.errorHandler))
  }
  postfiletos4(data:any)  {
    return this.http.post<any>('http://localhost:7500/Uploadshipper/uploadshipper',data)
    .pipe(catchError(this.errorHandler))
  }
}
