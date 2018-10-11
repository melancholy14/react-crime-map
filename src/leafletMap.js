import React from 'react';
import { connect } from 'react-redux';

import {
  Map, TileLayer,
} from 'react-leaflet';

import {
  saveLocation,
} from './actions';

const attribution = "&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors";
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

class LeafletMap extends React.PureComponent {
  constructor(){
    super();

    this.state = {
      latlng: {
        lat: 51.505,
        lng: -0.09,
      },
      zoom: 13,
      hasLocation: false,
    };
  }

  handleClick = (evt) => {
    const { latlng } = evt;

    this.props.onSaveLocation(latlng);
  }

  render() {
    const {
      latlng,
      zoom,
    } = this.state;

    return (
      <Map
        center={latlng}
        ref={(val) => { this.map = val; }}
        zoom={zoom}
        onClick={this.handleClick}
      >
        <TileLayer
          attribution={attribution}
          url={url}
        />
      </Map>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    polyline: state.ployline,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveLocation: (latlng) => dispatch(saveLocation(latlng))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);