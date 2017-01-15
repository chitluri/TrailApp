import { Component } from '@angular/core';
import { TrailMapService } from './service/trailmap.service'
import { Post }           from './post';
import { Bundle } from './shared/Bundle';
import { Path } from './shared/Path';
import { Place } from './shared/Place';
import { PlacePosition } from './shared/PlacePosition';
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
  title = 'Trail App';
  
  lat: number = 63.8257414;
  lng: number = 20.2636883;
  zoom: number = 15;
  strokeColor: string = "green";
  polypoints: PlacePosition[] = [];
  places: Place[] = [];
  posts: Post[] = [];
  paths: Path[];
  path: Path;
  enablePolyInfoWindow: boolean = false;
  errorMessage;
  
  constructor(private trailService: TrailMapService) {}
  
    
  setPolylines(index: number){
    this.polypoints = this.paths[index].path_polyline[0];
    this.places = this.paths[index].places;
    this.path = this.paths[index];
    this.lat = this.polypoints[0].lat;
    this.lng = this.polypoints[0].lng;
  }
  
  removeEmptyPaths(){
    var newPaths = [];
    this.paths.forEach(function(current_path){
      if(current_path.path_name){
        newPaths.push(current_path);
      }
    });
    this.paths = newPaths;
  }
  
  
  getTrails(){
    this.trailService.getTrails()
                      .subscribe(
                      bundle => {this.paths = bundle.paths; this.removeEmptyPaths()},
                      error => this.errorMessage = <any>error);
  }
  
  polyLineToggle(){
    console.log("Clicked. Setting it to "+!this.enablePolyInfoWindow);
    this.enablePolyInfoWindow = !this.enablePolyInfoWindow;
  }

  
}
