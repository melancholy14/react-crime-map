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

import {
  saveStreetId,
} from '../AnalysePage/actions';

const attribution = "&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors";
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const categoryColors = {
  "all-crime": "#d17f68",
  "anti-social-behaviour": "#73b638",
  "bicycle-theft": "#a45dcf",
  "burglary": "#5fbc6e",
  "criminal-damage-arson": "#c0489a",
  "drugs": "#4b7d3c",
  "other-theft": "#666dc6",
  "possession-of-weapons": "#d99938",
  "public-order": "#5e99d2",
  "robbery": "#cc4f32",
  "shoplifting": "#49b9a9",
  "theft-from-the-person": "#c7496a",
  "vehicle-crime": "#adac4d",
  "violent-crime": "#c581bb",
  "other-crime": "#8b6c2f",
};
// const fillColors = ['palevioletred', 'indianred', 'mediumvioletred', 'darkred', 'orangered', 'red'];

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

  clickCircle = (id) => () => {
    // evt.preventDefault();
    this.props.onSaveStreetId(id);
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
          locations && locations.map(({category, latlng, street, count}) => 
          <Circle
            fillColor={categoryColors[category]}
            fillOpacity={0.9}
            stroke={false}
            radius={count <= 20 ? count * 25 : 500}
            center={latlng}
            key={latlng}
            onClick={this.clickCircle(street.id)}
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
    onSaveLocation: (latlng) => dispatch(saveLocation(latlng)),
    onSaveStreetId: (id) => dispatch(saveStreetId(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);