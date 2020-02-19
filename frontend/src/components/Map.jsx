import React, {useState} from 'react';
import MapGL, {Marker} from 'react-map-gl';
import superchargers from '../data/superchargers-location.json';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const Map = () => {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 46.227638,
        longitude: 2.213749,
        zoom: 5
      });
      return (
        <MapGL
            {...viewport}
            width="90vw"
            height="90vh"
            mapStyle="mapbox://styles/mapbox/dark-v10"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        >
        {superchargers.map((supercharge, index) => (
            <Marker
                key={index} 
                longitude={supercharge.Xlongitude}
                latitude={supercharge.Ylatitude}
            >
                <div style={{height: '20px', width: '20px'}} onClick={() => console.log(supercharge.ad_station)}>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="12" fill="#c00"/>
                            <path fill="#fff" d="M16 3.5l-8 9 3 1-3 7 8-9-3-1 3-7z"/>
                        </svg>
                    </i>
                </div>
            </Marker>
        ) )}
        </MapGL>
      );

}

export default Map;