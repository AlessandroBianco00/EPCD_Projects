import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import swal from 'sweetalert';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      //retry(2), // retry a failed request up to 2 times
      catchError((err: HttpErrorResponse) => {
          if (err.status === 0) {
              //client-side or network error
              console.log('An error occurred:', err.error.message);
              swal('An error occurred:', err.error.message);
              // return of()
          } else {
              //Backend returns error codes such as 404, 500 etc.
              console.log('Error code: ', err.status);
              swal('Error code: '+ err.status);
          }
          return throwError(() => new Error('An error occurred. Please try again later.'));
      })
  );

  }
}
