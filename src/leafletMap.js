import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletMap = () => {
  const position = [51.505, -0.09];
  const attribution = "&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors";
  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <Map center={position} zoom={13}>
      <TileLayer
        attribution={attribution}
        url={url}
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default LeafletMap;