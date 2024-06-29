// src/components/Map.js
import React from 'react';
import './Map.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Papa from 'papaparse';
import Modal from './modal.js';


const pinpoints = [
  { id: 1, names: " Al Ghafoor grande city Surjani"  ,left: '46.5%', top: '60%' }, //Al Ghafoor grande city Surjani
  { id: 2, names: " Naya nazimabad"  , left: '44%', top: '70%' }, // saima arabian villas Naya nazimabad 
  { id: 3,names: " AA Enclave"  , left: '49.3%', top: '78%' }, //AA Enclave
  { id: 4,names: " Centric Tower"  , left: '51%', top: '78%' }, //Centric Tower
  { id: 5,names: " Otel Residency by Zifan"  , left: '50%', top: '85%' }, //Otel Residency by Zifan
  { id: 6,names: " ASF Towers"  , left: '55%', top: '72%' }, //ASF Towers
  { id: 7,names: " Falaknaz Presidency"  , left: '56%', top: '75%' }, //shahfaisal right Falaknaz Presidency
  { id: 8,names: " Shaes Residency"  , left: '53.5%', top: '76%' }, //gulshan j Shaes Residency
  { id: 9,names: " Al Qadir Tower"  , left: '51.5%', top: '77.5%' }, //Al Qadir Tower
  { id: 10,names: " Naya nazimabad 2"  , left: '44.5%', top: '70.5%' } //Naya nazimabad 2
  // Add more pinpoints as needed
];

const Map = () => {
  return (
    <div className="map-container">
      <img src={`${process.env.PUBLIC_URL}/map.png`} alt="Karachi Map" className="map-image" />
      {pinpoints.map(pin => (
        <div
          key={pin.id}
          className="pinpoint"
          style={{ left: pin.left, top: pin.top }}
        >
        <FontAwesomeIcon icon={faLocationDot} className="fa-icon" />
        <div className="tooltip">{pin.id} : {pin.names}</div>
        </div>
      ))}
    </div>
  );
};

export default Map;
