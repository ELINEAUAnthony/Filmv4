import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class MovieApiProviderService {
  private Urlpopular = 'https://api.themoviedb.org/3/movie/popular?'
  private Urlrated = 'https://api.themoviedb.org/3/movie/top_rated?'
  private Urlupcoming ='https://api.themoviedb.org/3/movie/upcoming?'
  private UrlSearch = 'https://api.themoviedb.org/3/search/movie?'
  private Urlid = 'https://api.themoviedb.org/3/movie/'
 
  Page = 1
  

  private httpOptions = {
    headers : new HttpHeaders({
      "content-type": "application/js"
    }),
    params:{
      api_key : "3af9c524dd7e2699f76bded125a10ba9",
      language: "fr-FR",
      page: this.Page.toString(),
      query: "",
    
    }
  }
  constructor(public http: HttpClient) {
    console.log('Hello MovieApiProvider Provider');
  }
  public getFilmbyid(id):Observable<any>{
    this.httpOptions.params.page = "1";
    return this.http.get(this.Urlid+id,this.httpOptions)
  }
  public getFilmpopular(iDpage):Observable<any>{
    this.httpOptions.params.page = iDpage.toString()
    return this.http.get(this.Urlpopular ,this.httpOptions);
  }
  public getFilmrated(iDpage):Observable<any>{
    this.httpOptions.params.page = iDpage.toString()
    return this.http.get(this.Urlrated ,this.httpOptions);
  }

  public getFilmupcoming(iDpage):Observable<any>{
    this.httpOptions.params.page = iDpage.toString()
    return this.http.get(this.Urlupcoming,this.httpOptions);
  }

  public searchMovies(params:any):Observable<any>{
    this.httpOptions.params.page = params.page;
    this.httpOptions.params.query = params.filter; 
    return this.http.get(this.UrlSearch,this.httpOptions);
   
  }

}


