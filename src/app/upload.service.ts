import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }
  postfiletos3(data:any)  {
    return this.http.post<any>('https://brave-pink-clothes.cyclic.app/upload/upload',data)
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
    return this.http.put('https://brave-pink-clothes.cyclic.app/shippers/editShipper/' + id ,data)
   }
}
