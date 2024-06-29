import React, { useState } from 'react';
import './App.css';
import Map from './Components/map.js';
import Central from './Components/central.js';
import West from './Components/west.js';
import East from './Components/east.js';
import Malir from './Components/malir.js';
import South from './Components/south.js';

function App() {
  // Initialize state to keep track of the selected component
  const [selectedComponent, setSelectedComponent] = useState('Map');
  
  // Event handlers to update the state
  const handleComponentChange = (component) => {
    setSelectedComponent(component);
    
  };
  
  // Render the appropriate component based on the state
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Central':
        return <Central />;
      case 'West':
        return <West />;
      case 'East':
        return <East />;
      case 'Malir':
        return <Malir />;
      case 'South':
        return <South />;
      default:
        return <Map />;
    }
  };
  
  // Get the title based on the selected component
  const getTitle = () => {
    if (selectedComponent === 'Map') {
      return 'Map of Karachi';
    }
    return `Map of Karachi ${selectedComponent}`;
  };

  return (
    <div className="App">
      <h1>{getTitle()}</h1>
      <div className="sidebar">
        <button onClick={() => handleComponentChange('Map')}>Main Map </button>
        <button onClick={() => handleComponentChange('Central')}>Central</button>
        <button onClick={() => handleComponentChange('West')}>West</button>
        <button onClick={() => handleComponentChange('East')}>East</button>
        <button onClick={() => handleComponentChange('Malir')}>Malir</button>
        <button onClick={() => handleComponentChange('South')}>South</button>
      </div>
      <div className="map-container">
        {renderComponent()}
      </div>
    </div>
    
  );
}

export default App;

