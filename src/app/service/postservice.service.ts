import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Post }           from '../post';
import { Observable }     from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class PostserviceService {
  
  //private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsUrl = 'app/service/posts';

  constructor(private http: Http) { }
  
  getPosts(): Observable<Post[]> {
    return this.http.get(this.postsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
