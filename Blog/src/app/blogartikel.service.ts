import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogartikelService {

  constructor(private http: HttpClient) { }

  getArticles():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/articles');
  }
  getArticle(id):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/articles/${id}`);
  }
}
