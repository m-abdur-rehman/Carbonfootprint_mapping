// src/components/Map.js
import React, { useState } from 'react';
import './Map.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Papa from 'papaparse';
import Modal from './modal.js';

const pinpoints = [
  // { id: 1, names: " Al Ghafoor grande city Surjani"  ,left: '46.5%', top: '60%' }, //Al Ghafoor grande city Surjani
  // { id: 2, names: " Naya nazimabad"  , left: '44%', top: '70%' }, // saima arabian villas Naya nazimabad 
  { id: 3,names: " AA Residencia"  , left: '49.3%', top: '78%' }, //AA Enclave
  { id: 4,names: " Centric Tower"  , left: '51%', top: '78%' }, //Centric Tower
  // { id: 5,names: " Otel Residency by Zifan"  , left: '50%', top: '85%' }, //Otel Residency by Zifan
  { id: 6,names: " ASF Towers"  , left: '55%', top: '72%' }, //ASF Towers
  // { id: 7,names: " Falaknaz Presidency"  , left: '56%', top: '75%' }, //shahfaisal right Falaknaz Presidency
  { id: 8,names: " King Shaes Residency"  , left: '53.5%', top: '76%' }, //gulshan j Shaes Residency
  { id: 9,names: " Al Qadir Tower"  , left: '51.5%', top: '77.5%' }, //Al Qadir Tower
  // { id: 10,names: " Naya nazimabad 2"  , left: '44.5%', top: '70.5%' } //Naya nazimabad 2 
  // Add more pinpoints as needed
];

const East = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handlePinClick = (pinId) => {
    if (pinId === 3) {
      // Parse the CSV file
      Papa.parse(`${process.env.PUBLIC_URL}/data/east/AA residencia.csv`, {
        download: true,
        header: false, // Since the CSV has custom headers
        skipEmptyLines: true,
        delimiter: ',', // Specify the delimiter here
        complete: (result) => {
          if (result.errors.length) {
            console.error('CSV Parsing Errors:', result.errors);
          } else {
            console.log('CSV Result:', result.data); // Log the parsed CSV data
            const data = processData(result.data);
            setModalData(data);
            setShowModal(true);
          }
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        }
      });
    } else if (pinId === 9) {

        Papa.parse(`${process.env.PUBLIC_URL}/data/east/al qadir tower.csv`, {
        download: true,
        header: false, // Since the CSV has custom headers
        skipEmptyLines: true,
        delimiter: ',', // Specify the delimiter here
        complete: (result) => {
          if (result.errors.length) {
            console.error('CSV Parsing Errors:', result.errors);
          } else {
            console.log('CSV Result:', result.data); // Log the parsed CSV data
            const data = processData(result.data);
            setModalData(data);
            setShowModal(true);
          }
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        }
      });

    } else if (pinId===6) {
        Papa.parse(`${process.env.PUBLIC_URL}/data/east/asf tower.csv`, {
            download: true,
            header: false, // Since the CSV has custom headers
            skipEmptyLines: true,
            delimiter: ',', // Specify the delimiter here
            complete: (result) => {
              if (result.errors.length) {
                console.error('CSV Parsing Errors:', result.errors);
              } else {
                console.log('CSV Result:', result.data); // Log the parsed CSV data
                const data = processData(result.data);
                setModalData(data);
                setShowModal(true);
              }
            },
            error: (error) => {
              console.error('Error parsing CSV:', error);
            }
          });
        
    } else if (pinId===8) {
        
        Papa.parse(`${process.env.PUBLIC_URL}/data/east/kings shaes residency.csv`, {
            download: true,
            header: false, // Since the CSV has custom headers
            skipEmptyLines: true,
            delimiter: ',', // Specify the delimiter here
            complete: (result) => {
              if (result.errors.length) {
                console.error('CSV Parsing Errors:', result.errors);
              } else {
                console.log('CSV Result:', result.data); // Log the parsed CSV data
                const data = processData(result.data);
                setModalData(data);
                setShowModal(true);
              }
            },
            error: (error) => {
              console.error('Error parsing CSV:', error);
            }
          });

    } else if (pinId===4) {
        
        Papa.parse(`${process.env.PUBLIC_URL}/data/east/centric tower.csv`, {
            download: true,
            header: false, // Since the CSV has custom headers
            skipEmptyLines: true,
            delimiter: ',', // Specify the delimiter here
            complete: (result) => {
              if (result.errors.length) {
                console.error('CSV Parsing Errors:', result.errors);
              } else {
                console.log('CSV Result:', result.data); // Log the parsed CSV data
                const data = processData(result.data);
                setModalData(data);
                setShowModal(true);
              }
            },
            error: (error) => {
              console.error('Error parsing CSV:', error);
            }
          });

    } 
    else {
        
   }   // Handle other pinpoints if necessary
  };

  const processData = (data) => {
    const generalInfo = {
      "Project Name": data[0][1],
      "Address": data[1][1],
      "No of story of Project": data[2][1],
      "Carbon Footprint": data[3][1],
    };
    
    const phaseData = data.slice(5).map(row => ({
      equipment: row[0],
      work: row[1],
      newOrOld: row[2],
      fuelType: row[3],
      fuelConsumption: row[4],
      hoursOperated: row[5],
      emissionFactor: row[6],
      carbonFootprint: row[7],
      unit: row[8]
    }));
    
    return { generalInfo, phaseData };
  };

  return (
  <div className="map-container">
    <img src={`${process.env.PUBLIC_URL}/khi-east.png`} alt="Karachi Map" className="map-image" />
    {pinpoints.map(pin => (
      <div
        key={pin.id}
        className="pinpoint"
        style={{ left: pin.left, top: pin.top }}
        onClick={() => handlePinClick(pin.id)}
      >
        <FontAwesomeIcon icon={faLocationDot} className="fa-icon" />
        <div className="tooltip">{pin.id}: {pin.names}</div>
      </div>
    ))}
    <Modal show={showModal} onClose={() => setShowModal(false)} data={modalData} />
    </div>
  );
};

export default East;
