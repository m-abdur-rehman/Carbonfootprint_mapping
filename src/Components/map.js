import React, { useState } from 'react';
import './Map.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Papa from 'papaparse';
import Modal from './modal.js';

const pinpoints = [
  { id: 1, names: "Al Ghafoor grande city Surjani", left: '46.5%', top: '60%' },
  { id: 2, names: "Naya nazimabad", left: '44%', top: '70%' },
  { id: 3, names: "AA Enclave", left: '49.3%', top: '78%' },
  { id: 4, names: "Centric Tower", left: '51%', top: '78%' },
  { id: 5, names: "Otel Residency by Zifan", left: '50%', top: '85%' },
  { id: 6, names: "ASF Towers", left: '55%', top: '72%' },
  { id: 7, names: "Falaknaz Presidency", left: '56%', top: '75%' },
  { id: 8, names: "Shaes Residency", left: '53.5%', top: '76%' },
  { id: 9, names: "Al Qadir Tower", left: '51.5%', top: '77.5%' },
  { id: 10, names: "Naya nazimabad 2", left: '44.5%', top: '70.5%' }
];

const Map = () => {
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
    } else if (pinId === 1) {

        Papa.parse(`${process.env.PUBLIC_URL}/data/central/al gafoor.csv`, {
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

    } else if (pinId===2) {
        Papa.parse(`${process.env.PUBLIC_URL}/data/central/fl-04.csv`, {
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

    } else if (pinId===5) {
        
        Papa.parse(`${process.env.PUBLIC_URL}/data/south/otel residency.csv`, {
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

    } else if (pinId===7) {
        
        Papa.parse(`${process.env.PUBLIC_URL}/data/malir/falaknaz presidency.csv`, {
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

    } else if (pinId===9) {
        
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

    } else if (pinId===10) {
        
        Papa.parse(`${process.env.PUBLIC_URL}/data/central/fl-07.csv`, {
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
    console.log("slice data",data.slice(5))
    const phaseData = data.slice(5).map(row => ({

      stage: row[0],
      equipment: row[1],
      work: row[2],
      newOrOld: row[3],
      fuelType: row[4],
      fuelConsumption: row[5],
      hoursOperated: row[6],
      emissionFactor: row[7],
      carbonFootprint: row[8],
      unit: row[9],
      unitppm: row[10]
    }));
    
    return { generalInfo, phaseData };
  };

  return (
    <div className="map-container">
      <img src={`${process.env.PUBLIC_URL}/map.png`} alt="Karachi Map" className="map-image" />
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

export default Map;