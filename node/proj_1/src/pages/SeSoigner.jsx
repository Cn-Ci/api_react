import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map(){
    return ( 
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat:50.691269, lng:3.173230 }} 
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export const SeSoigner = () => {
    return (
        <div style = {{ width: '100vw' , height: '100%' }}>
            <p className="m-3 text-center text-white">Pour se soigner il vous faut remplir certaines conditions</p>
            <WrappedMap 
            googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement = { <div style={{ height: "100%"}} /> }
            containerElement = { <div style={{ height: "100%"}} /> }
            mapElement = { <div style={{ height: "100%"}} /> }
            />
        </div>
    );
};

export default SeSoigner;