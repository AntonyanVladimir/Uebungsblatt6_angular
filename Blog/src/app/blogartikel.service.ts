import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
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
  getArticleByTagNameUndSuchstring(tagname, suchstring):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/articles/?tag=${tagname}&query=${suchstring}`)
  }
  getArticleByTagName(suchstring):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/articles/?suchwort=${suchstring}`)
  }
  editArticle(article):Observable<any[]>{
    return this.http.put<any>(`http://localhost:3000/articles/${article.id}`, article, httpOptions);
  }
}
