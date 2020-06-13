import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
  deleteArticle(id):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/articles/${id}`, httpOptions)
  }
  getBlogsTagMap():Observable<JSON>{
   return this.http.get<JSON>(`http://localhost:3000/tags`)
  }
  createArticle(artikel):Observable<any>{
    return this.http.post<any>(`http://localhost:3000/articles`, artikel, httpOptions);
  }
}

