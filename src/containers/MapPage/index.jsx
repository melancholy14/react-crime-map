// @flow

import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import {
  Map, TileLayer,
  Marker, Popup,
  Circle,
} from 'react-leaflet';

import {
  loadGraphsRequest,
  loadNewsRequest,
  loadNeighbourhoodRequest,
} from '../AnalysePage/actions';

import {
  MapPageProps as Props,
  MapPageState as State,
} from '../../utils/types';

import {
  saveLocation,
} from './actions';

const attribution = '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const MapStyle = styled.main`
  order: 2;
    height: 32.5rem;
    z-index: 0;

    .leaflet-container {
      height: 100%;
      margin: 0.5rem;
      border-radius: 1.5rem;
    }
`;

class LeafletMap extends React.PureComponent<Props, State> {
  map = null;

  constructor(props) {
    super(props);

    this.state = {
      latlng: props.latlng,
    };
  }

  componentDidMount() {
    if (this.map && this.map.leafletElement) {
      this.map.leafletElement.locate();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      latlng: prevLatlng,
    } = prevProps;

    const {
      latlng,
    } = this.props;

    if (prevLatlng !== latlng) {
      this.setState({
        latlng,
      });
    }
  }

  handleClick = (evt) => {
    const {
      onSaveLocation,
    } = this.props;

    onSaveLocation(evt.latlng);
  }

  handleLocationFound = (evt) => {
    const {
      onSaveLocation,
    } = this.props;

    this.setState({
      latlng: evt.latlng,
    });

    onSaveLocation(evt.latlng);
  }

  handleCircle = (street, latlng) => () => {
    const {
      onLoadGraphRequest,
      onLoadNewsRequest,
      onLoadNeigbourhoodRequest,
    } = this.props;

    onLoadGraphRequest(street);
    onLoadNewsRequest(latlng);
    onLoadNeigbourhoodRequest(latlng);
  }

  render() {
    const {
      circles,
    } = this.props;

    const {
      latlng: stateLatlng = {},
    } = this.state;

    return (
      <MapStyle className="map">
        <Map
          center={stateLatlng}
          ref={(val) => { this.map = val; }}
          zoom={13}
          onClick={this.handleClick}
          onLocationfound={this.handleLocationFound}
        >
          <TileLayer
            attribution={attribution}
            url={url}
          />
          { stateLatlng && (
          <Marker position={[stateLatlng.lat, stateLatlng.lng]}>
            <Popup>
              {`You clicked here!!
              Latitude: ${stateLatlng.lat}
              Longitude: ${stateLatlng.lng}`}
            </Popup>
          </Marker>) }
          {
            circles && circles.map(({
              latlng, street, radius, count, opacity = 0.5, fillColor,
            }) => (
              <Circle
                fillColor={fillColor}
                fillOpacity={opacity}
                stroke={false}
                radius={radius}
                center={latlng}
                key={latlng}
                onClick={this.handleCircle(street, latlng)}
              >
                <Popup>
                  {`Street Id: ${street.id}
                  Street Name: ${street.name}
                  Crime Count: ${count}`}
                </Popup>
              </Circle>))}
        </Map>
      </MapStyle>
    );
  }
}

const mapStateToProps = state => ({
  ...state.map,
});

const mapDispatchToProps = dispatch => ({
  onSaveLocation: latlng => dispatch(saveLocation(latlng)),
  onLoadGraphRequest: id => dispatch(loadGraphsRequest(id)),
  onLoadNewsRequest: latlng => dispatch(loadNewsRequest(latlng)),
  onLoadNeigbourhoodRequest: latlng => dispatch(loadNeighbourhoodRequest(latlng)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);
