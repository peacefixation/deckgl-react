import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function GoogleMaps() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const position = {lat: 61.2176, lng: -149.8997};

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={position}
        defaultZoom={10}
      >
        {/* <Marker position={position} /> */}
      </Map>
    </APIProvider>
  );
}

export default GoogleMaps;
