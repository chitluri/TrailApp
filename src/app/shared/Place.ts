import {PlacePosition} from './PlacePosition';
import {PlaceMedia} from './PlaceMedia';

export interface Place {
    place_image: string;
    place_radius: number;
    place_position: PlacePosition;
    place_info: string;
    place_media: PlaceMedia[];
    place_name: string;
}

