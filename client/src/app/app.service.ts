import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AppService {

  constructor(private http: HttpClient, ) {
  }


  getJwt(url) {
    let authtoken: string = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + authtoken);
    return this.http.get(url, { headers: headers })
  }


  postJwt(url, data) {
    let authtoken: string = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + authtoken);
    return this.http.post(url, data, { headers: headers });
  }

  postService(url, data) {
    return this.http.post(url, data)
  }

  getOne(url, id) {
    return this.http.get(url + '/' + id)
  }


  getAll(url) {
    return this.http.get(url)
  }

  save(url, item) {
    return this.http.post(url, item)
  }

  updateJwt(url, item) {
    let authtoken: string = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + authtoken);
    return this.http.put(url, item, { headers: headers })
  }

  deleteJWT(url) {
    let authtoken: string = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + authtoken);
    return this.http.delete(url, { headers: headers })
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
