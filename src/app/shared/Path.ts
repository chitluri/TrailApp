import {Place} from './Place';

export interface Path {
    path_name: string;
    places: Place[];
    path_length: string;
    path_polyline: any[][];
    path_image: string;
    path_time: string;
    path_info: string;
}

