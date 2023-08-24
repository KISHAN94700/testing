import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Mapcontainer = (props) => {

  const { data } = props;
  const [activeCovid, setActiveCovid] = useState(null);

  const customIcon = new L.Icon({
    iconUrl:"https://static.vecteezy.com/system/resources/previews/016/314/339/non_2x/red-circle-red-dot-icon-free-png.png", // Replace with your icon's path
    iconSize: [30, 30], // Set the size of the icon
    iconAnchor: [15, 30], // Adjust the anchor point if needed
  });

  return (
      <MapContainer
        center={[20.593683, 78.962883]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      {data.map((eachData, idx) => (
        <>
          <Marker
            key={idx}
            icon={customIcon}
            className="custom-marker"
            eventHandlers={{
              click: () => {
                setActiveCovid(eachData);
              },
            }}
            position={[eachData.countryInfo.lat, eachData.countryInfo.long]}
          />
          {activeCovid && activeCovid.country === eachData.country && (
            <Popup
              position={[eachData.countryInfo.lat, eachData.countryInfo.long]}
              onClose={() => {
                setActiveCovid(null);
              }}
            >
              <div>
                <h1 className="text-center text-xl">{eachData.country}</h1>
                <p>Active cases: <span className="font-bold">{eachData.active}</span></p>
                <p>Deaths: <span className="font-bold">{eachData.deaths}</span></p>
                <p>Recover: <span className="font-bold">{eachData.recovered}</span></p>
              </div>
            </Popup>
          )}
        </>
      ))}
    </MapContainer>
  );
};

export default Mapcontainer;
