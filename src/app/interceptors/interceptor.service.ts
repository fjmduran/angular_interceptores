import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const headers = new HttpHeaders({
      'token-usuario':'sfdasgasgioasdigd'
    });

    const reqClone = req.clone({
      headers
    });
    
    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );

  }

  manejarError(error:HttpErrorResponse){
    console.log('Sucedió un error');
        console.warn(error);       
        return throwError('Error personalizado');
  }
}
