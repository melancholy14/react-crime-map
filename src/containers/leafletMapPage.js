import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Map, TileLayer,
  Marker, Popup,
  Circle,
} from 'react-leaflet';

import {
  saveLocation,
} from './actions';

const attribution = "&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors";
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const fillColors = ['palevioletred', 'indianred', 'mediumvioletred', 'darkred', 'orangered', 'red'];

class LeafletMap extends React.PureComponent {
  static propTypes = {
    latlng: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    locations: PropTypes.array,
    onSaveLocation: PropTypes.func,
  }

  handleClick = (evt) => {
    const { latlng } = evt;

    this.props.onSaveLocation(latlng);
  }

  render() {
    const {
      latlng,
      locations,
    } = this.props;

    return (
      <Map
        center={latlng}
        ref={(val) => { this.map = val; }}
        zoom={13}
        onClick={this.handleClick}
      >
        <TileLayer
          attribution={attribution}
          url={url}
        />
        { latlng &&
        <Marker position={[latlng.lat, latlng.lng]}>
          <Popup>
            {`You clicked here!!
            Latitude: ${latlng.lat}
            Longitude: ${latlng.lng}`}
          </Popup>
        </Marker> }
        {
          locations && locations.map(({latlng, street, count}) => 
          <Circle
            fillColor={count >= fillColors.length ? fillColors[fillColors.length - 1] : fillColors[count - 1]}
            fillOpacity={1.0}
            stroke={false}
            radius={count * 25}
            center={latlng}
            key={latlng}
          >
            <Popup>
            {`Street Id: ${street.id}
            Street Name: ${street.name}
            Crime Count: ${count}`}
            </Popup>
          </Circle>)
        }
      </Map>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ...state.map,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveLocation: (latlng) => dispatch(saveLocation(latlng))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);