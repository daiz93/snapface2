import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable(

)

export class AuthInterceptor implements HttpInterceptor
{
    constructor(private auth:AuthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      ///  throw new Error("Method not implemented.");
      const header = new HttpHeaders()
      .append('Autorization', `Bearer ${this.auth.getToken()}`)

    }

  
}