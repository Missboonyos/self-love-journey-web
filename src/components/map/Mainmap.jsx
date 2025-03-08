//rafce
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// copy components from https://react-leaflet.js.org/docs/v4/example-events/
// and paste outside the const Mainmap = () => {}
// click:(e)=> {} can write code in this style (key:value)
function LocationMarker({ position, setPosition, setValue }) {
  const map = useMapEvents({
    click(e) {
      // console.log(e.latlng);
      setPosition(e.latlng);
      map.flyTo(e.latlng);

      if (setValue) {
        setValue("lat", e.latlng.lat);
        setValue("lng", e.latlng.lng);
      }
    },
  });

  // check if position is null. If yes, return null
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

// Receive parameter; {register} that sent from Restaurant.jsx
// And, receive param; Location even though Location is not yet sent from Restaurant.jsx
const Mainmap = ({ register, location, setValue }) => {
  //JavaScript codes
  const [position, setPosition] = useState(null);
  const DEFAULT_LOCATION = [13, 100];
  // console.log(location, Boolean(location));
  // || OR = find first true
  // const roitai = location || DEFAULT_LOCATION;
  // && AND = find first false
  const roitai = register && "OK";
  console.log(roitai);

  // if there's a register, do the function
  return (
    <div>
      {register && (
        <>
          <input hidden {...register("lat")} />
          <input hidden {...register("lng")} />
        </>
      )}

      <h1 className="font-semibold mt-4 z-0">Where are you?</h1>

      {/* To display lat, long on the webpage */}

      {position && (
        <p className="text-sm text-gray-600">
          Coordinates : {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
        </p>
      )}

      <MapContainer
        className="h-[50vh] rounded-md"
        center={location || DEFAULT_LOCATION}
        zoom={7}
        scrollWheelZoom={true}
      >
        {/* TileLayer is the basic map. If we have other maps, we can paste link here */}
        {/* url = service of map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          position={position}
          setPosition={setPosition}
          setValue={setValue}
        />
      </MapContainer>
    </div>
  );
};

export default Mainmap;
