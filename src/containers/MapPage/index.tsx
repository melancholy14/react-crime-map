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
  toggleShow,
} from '../AnalysePage/actions';

import type {
  MapPageProps as Props,
} from '../../utils/types';

import {
  saveLocation,
} from './actions';

import getMapState from './selectors';

const attribution = '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const MapStyle = styled.main`
  order: 2;
  height: 100%;
  z-index: 0;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  .leaflet-container {
    height: calc(100% - 1rem);
    margin: 0.5rem;
    border-radius: 1.5rem;
  }
`;

class LeafletMap extends React.PureComponent<Props> {
  map = null;

  componentDidMount() {
    if (this.map && this.map.leafletElement) {
      this.map.leafletElement.locate();
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

    onSaveLocation(evt.latlng);
  }

  handleCircle = (street, latlng) => () => {
    const {
      onLoadGraphRequest,
      onLoadNewsRequest,
      onLoadNeigbourhoodRequest,
      onToggleAnalyseModal,
    } = this.props;

    onLoadGraphRequest(street);
    onLoadNewsRequest(latlng);
    onLoadNeigbourhoodRequest(latlng);
    onToggleAnalyseModal(true);
  }

  render() {
    const {
      circles,
      latlng: propsLatlng = {},
    } = this.props;

    const {
      lat,
      lng,
    } = propsLatlng || {};

    return (
      <MapStyle className="map">
        <Map
          center={propsLatlng}
          ref={(val) => { this.map = val; }}
          zoom={13}
          onClick={this.handleClick}
          onLocationfound={this.handleLocationFound}
        >
          <TileLayer
            attribution={attribution}
            url={url}
          />
          { propsLatlng && (
          <Marker position={[lat, lng]}>
            <Popup>
              {`You clicked here!!
              Latitude: ${lat}
              Longitude: ${lng}`}
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
  ...getMapState(state),
});

const mapDispatchToProps = dispatch => ({
  onSaveLocation: latlng => dispatch(saveLocation(latlng)),
  onLoadGraphRequest: id => dispatch(loadGraphsRequest(id)),
  onLoadNewsRequest: latlng => dispatch(loadNewsRequest(latlng)),
  onLoadNeigbourhoodRequest: latlng => dispatch(loadNeighbourhoodRequest(latlng)),
  onToggleAnalyseModal: show => dispatch(toggleShow(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);
