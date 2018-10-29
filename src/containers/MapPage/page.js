import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Map, TileLayer,
  Marker, Popup,
  Circle,
} from 'react-leaflet';

import {
  loadGraphsRequest,
  loadNewsRequest,
} from '../AnalysePage/actions';

import {
  saveLocation,
} from './actions';

const attribution = "&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors";
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

class LeafletMap extends React.PureComponent {
  static propTypes = {
    latlng: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    circles: PropTypes.array,
    onSaveLocation: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      latlng: props.latlng,
      postCode: '',
    }
  }

  componentDidMount() {
    if (this.map.leafletElement) {
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

  handleClick = (evt) => this.props.onSaveLocation(evt.latlng);

  handleLocationFound = (evt) => {
    this.setState({
      hasLocation: true,
      latlng: evt.latlng,
    });

    this.props.onSaveLocation(evt.latlng);
  }

  handleCircle = (id, latlng) => () => {
    this.props.onLoadGraphRequest(id);
    this.props.onLoadNewsRequest(latlng);
  }

  enterKeyword = (evt) => {
    this.setState({
      postCode: evt.target.value,
    });
  }

  searchAddr = () => {
    
  }

  render() {
    const {
      circles,
    } = this.props;

    const {
      latlng = {},
    } = this.state;

    return (
      <Map
        center={latlng}
        ref={(val) => { this.map = val; }}
        zoom={13}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
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
          circles && circles.map(({latlng, street, radius, count, opacity = 0.5, fillColor}) => 
          <Circle
            fillColor={fillColor}
            fillOpacity={opacity}
            stroke={false}
            radius={radius < 10 ? radius * 25 : 250}
            center={latlng}
            key={latlng}
            onClick={this.handleCircle(street.id, latlng)}
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
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveLocation: (latlng) => dispatch(saveLocation(latlng)),
    onLoadGraphRequest: (id) => dispatch(loadGraphsRequest(id)),
    onLoadNewsRequest: (latlng) => dispatch(loadNewsRequest(latlng)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);
