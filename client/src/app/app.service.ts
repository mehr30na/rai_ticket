import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AppService {

  constructor(private http: HttpClient, ) {
  }


  getJwt(url) {
    let authtoken: string = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + authtoken);
    return this.http.get(url, { headers: headers })
    // .map(this.ExtractData)
    // .catch(this.errorHandler)
  }


  postJwt(url, data) {
    let authtoken: string = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + authtoken);
    return this.http.post(url, data, { headers: headers });
  }

  postService(url, data) {
    return this.http.post(url, data)
    // .map(this.ExtractData)
    // .catch(this.errorHandler)
  }

  getOne(url, id) {
    // alert(url+'/'+id);
    return this.http.get(url + '/' + id)
    // .map(this.ExtractData)
    // .catch(this.errorHandler)
  }


  getAll(url) {
    return this.http.get(url)
    // .map(this.ExtractData)
    // .catch(this.errorHandler)
  }

  save(url, item) {
    return this.http.post(url, item)
    // .map(this.ExtractData)
    // .catch(this.errorHandler)
  }

  update(url, item) {
    return this.http.put(url, item)
    // .map(this.ExtractData)
    // .catch(this.errorHandler)
  }

  delete(url) {
    return this.http.delete(url)
    // .map(this.ExtractData)
    // .catch(this.errorHandler)
  }


  // private ExtractData(res: Response) {
  //   let result = res.json();
  //   return result;
  // }

  // private errorHandler(error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);

  // }


}
