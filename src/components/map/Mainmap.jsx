//rafce
import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

// copy components from https://react-leaflet.js.org/docs/v4/example-events/
// and paste outside the const Mainmap = () => {}  
function LocationMarker({position, setPosition}) {
  
  const map = useMapEvents({
    click(e) { 
      console.log(e.latlng)    
      setPosition(e.latlng)
      map.flyTo(e.latlng)
    },

  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const Mainmap = () => {
  //JavaScript
  const [position, setPosition] = useState(null)
  const DEFAULT_LOCATION = [13, 100]

  return (
    <div>
      <h1 className="font-semibold mt-4 z-0">
        Where are you?
      </h1>
      <MapContainer 
      className="h-[50vh] rounded-md"
      center={DEFAULT_LOCATION} 
      zoom={7} 
      scrollWheelZoom={true}
      >

        {/* TileLayer is the basic map. If we have other maps, we can paste link here */}
        {/* url = map service */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={position} setPosition={setPosition} />


      </MapContainer>
    </div>
  );
};

export default Mainmap;
