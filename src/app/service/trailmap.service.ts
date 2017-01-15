import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Post }           from '../post';
import { Bundle } from '../shared/Bundle';
import { Observable }     from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class TrailMapService {

  //private trailsUrl = 'app/service/trails';
  
  private trailsUrl = 'https://forward-byte-711.appspot.com/read/Test/Development/en';

  constructor(private http: Http) { }
  
  getTrails(): Observable<Bundle> {
    return this.http.get(this.trailsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    //console.log("Trails Map Loaded: "+body);
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
