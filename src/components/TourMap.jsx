import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import pinIcon from "../assets/img/pin.png";
import L from "leaflet";

const customIcon = new L.icon({
  iconUrl: pinIcon,
  iconSize: [32, 40],
});

console.log(customIcon);

function TourMap({ tour }) {
  return (
    <section className="section-map">
      <MapContainer
        center={[
          tour.startLocation.coordinates[1],
          tour.startLocation.coordinates[0],
        ]}
        minZoom={4}
        zoom={8}
        scrollWheelZoom={false}
        dragging={false}
        id="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {tour.locations.map((location) => (
          <Marker
            position={[location.coordinates[1], location.coordinates[0]]}
            key={location._id}
            icon={customIcon}>
            <Popup closeOnClick={false} autoClose={false}>
              {location.description}
            </Popup>
          </Marker>
        ))}
        <SetBounds locations={tour.locations} />
      </MapContainer>
    </section>
  );
}

function SetBounds({ locations }) {
  const map = useMap();

  useEffect(() => {
    if (locations && locations.length) {
      const bounds = L.latLngBounds();

      locations.forEach((loc) => {
        bounds.extend([loc.coordinates[1], loc.coordinates[0]]);
      });

      map.fitBounds(bounds, { padding: [250, 150] });
    }
  }, [locations, map]);

  return null;
}

export default TourMap;
