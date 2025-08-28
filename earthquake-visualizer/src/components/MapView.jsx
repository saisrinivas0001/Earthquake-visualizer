import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function MapView({ earthquakes }) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {earthquakes.map((eq) => (
        <Marker
          key={eq.id}
          icon={markerIcon}
          position={[
            eq.geometry.coordinates[1],
            eq.geometry.coordinates[0],
          ]}
        >
          <Popup>
            <strong>{eq.properties.place}</strong> <br />
            Magnitude: {eq.properties.mag} <br />
            Time: {new Date(eq.properties.time).toLocaleString()}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;