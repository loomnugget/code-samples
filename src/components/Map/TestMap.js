import React, { Component } from 'react';
import css from './Map.scss';
import Map from 'ol/Map';

const openLayersMap = new Map({ target: 'map' });

class TestMap extends Component {
  render () {
    return (
      <div className={css.map} id="map">

      </div>
    );
  }
}

export default TestMap;
