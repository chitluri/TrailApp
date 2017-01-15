

    export interface PlacePosition {
        lat: number;
        lng: number;
    }

    export interface PlaceMedia {
        media_type: string;
        media_contents: string;
        media_name: string;
        media_image: string;
    }

    export interface Place {
        place_image: string;
        place_radius: number;
        place_position: PlacePosition;
        place_info: string;
        place_media: PlaceMedia[];
        place_name: string;
    }

    export interface Path {
        path_name: string;
        places: Place[];
        path_length: string;
        path_polyline: any[][];
        path_image: string;
        path_time: string;
        path_info: string;
    }

    export interface bundle {
        paths: Path[];
        bundle_info: string;
        bundle_more_info: string;
    }

