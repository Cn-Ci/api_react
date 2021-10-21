import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
  import * as geoHospital from "../components/assets/data/geoHospital.geojson"
  

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 50.691269, lng:3.173230 }}
            >
                <Marker
                    position={{ lat:50.692640, lng: 3.158430 }}
                >
                    <InfoWindow>
                        <div>
                        Afpa de Roubaix, <br/> 20 Rue du Luxembourg, 59100 Roubaix
                        </div>
                    </InfoWindow>
                </Marker>
                {/* {geoHospital.features.map((hospital) =>(

                )} */}
            </GoogleMap>
)); 
 
export const SeSoigner = () => {
      
    return (
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCqbvKx4HSWBjujDITbzRLF6kCkcPZg5co&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
    )
    
}

export default SeSoigner;