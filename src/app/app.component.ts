import { Component } from '@angular/core';
import { coordinate } from './coordinate';
import { PostserviceService } from './service/postservice.service';
import { TrailmapService } from './service/trailmap.service'
import { Post }           from './post';
import { bundle, Path, Place } from './service/TrailClasses';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .sebm-google-map-container {
      height: 500px;
    }
    li { cursor: pointer;}
  `]
})
export class AppComponent {
  title = 'Trail App!';
  
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 15;
  strokeColor: string = "green";
  polypoints: coordinate[] = [];
  places: Place[] = [];
  posts: Post[] = [];
  paths: Path[];
  path: Path;
  enablePolyInfoWindow: boolean = false;
  errorMessage;
  
  constructor(private postService: PostserviceService, private trailService: TrailmapService) {}
  
  getMarkers(){
    //this.markers = this.getCoordinates();
    //this.lat = this.markers[0].lat;
    //this.lng = this.markers[0].lng;
  }
  
  setPolylines(index: number){
    this.polypoints = this.paths[index].path_polyline[0];
    this.places = this.paths[index].places;
    this.path = this.paths[index];
    this.lat = this.polypoints[0].lat;
    this.lng = this.polypoints[0].lng;
  }
  
   
  getPosts() {
    this.postService.getPosts()
                     .subscribe(
                       posts => this.posts = posts,
                       error =>  this.errorMessage = <any>error);
  }
  
  getTrails(){
    this.trailService.getTrails()
                      .subscribe(
                      bundle => this.paths = bundle.paths,
                      error => this.errorMessage = <any>error);
  }
  
  polyLineClicked(){
    console.log("Clicked. Setting it to "+!this.enablePolyInfoWindow);
    this.enablePolyInfoWindow = !this.enablePolyInfoWindow;
  }

  getCoordinates(): coordinate[]{
    
    
    return [
              {  
                  "lat":63.825552003290262,
                  "lng":20.264759659767151
               },
               {  
                  "lat":63.825395828696379,
                  "lng":20.264148116111755
               },
               {  
                  "lat":63.825362700640881,
                  "lng":20.263268351554871
               },
               {  
                  "lat":63.825466817255517,
                  "lng":20.262570977210999
               },
               {  
                  "lat":63.825750769702616,
                  "lng":20.262517333030701
               },
               {  
                  "lat":63.825888012359052,
                  "lng":20.263128876686096
               },
               {  
                  "lat":63.825869082377231,
                  "lng":20.263976454734802
               },
               {  
                  "lat":63.825675049330016,
                  "lng":20.264384150505066
               },
               {  
                  "lat":63.825552003290262,
                  "lng":20.264759659767151
               }
    ];
  }
}
