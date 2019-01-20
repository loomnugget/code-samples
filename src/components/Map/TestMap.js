import React, { Component } from 'react';
import css from './Map.scss';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

class TestMap extends Component {
  constructor(props) {
    super(props);
    this.map = {};
  }

  componentDidMount() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 0
      })
    });
  }

  render () {
    return (
      <div id="map" />
    );
  }
}

export default TestMap;
