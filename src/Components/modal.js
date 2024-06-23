// import React from 'react';
// import './modal.css';

// const Modal = ({ show, onClose, data }) => {
//   if (!show) {
//     return null;
//   }

//   console.log('Modal Data:', data); // Log the data passed to the modal

//   const renderPhaseData = (phaseData) => {
//     return phaseData.map((phase, index) => (
//       <tr key={index}>
//         <td>{phase.equipment}</td>
//         <td>{phase.work}</td>
//         <td>{phase.newOrOld}</td>
//         <td>{phase.fuelType}</td>
//         <td>{phase.fuelConsumption}</td>
//         <td>{phase.hoursOperated}</td>
//         <td>{phase.emissionFactor}</td>
//         <td>{phase.carbonFootprint}</td>
//         <td>{phase.unit}</td>
//       </tr>
//     ));
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <span className="close-button" onClick={onClose}>×</span>
//         {/* <h2>Pinpoint Details</h2>
//         <h3>General Information</h3> */}
//         <table>
//           <tbody>
//             {data && Object.keys(data.generalInfo).map((key, index) => (
//               <tr key={index}>
//                 <td>{key}</td>
//                 <td>{data.generalInfo[key]}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <h3>Phase/Stage of Construction</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Equipment Name</th>
//               <th>Work</th>
//               <th>New/Old</th>
//               <th>Fuel Type</th>
//               <th>Fuel Consumption (Liter/day)</th>
//               <th>Hours Operated</th>
//               <th>Emission Factor</th>
//               <th>Carbon Footprint</th>
//               <th>Unit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data && renderPhaseData(data.phaseData)}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React from 'react';
import './modal.css';

const Modal = ({ show, onClose, data }) => {
  if (!show || !data) return null;

  const { generalInfo, phaseData } = data;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Project Information</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-content">
          <h3>General Information</h3>
          <table>
            <tbody>
              {Object.entries(generalInfo).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Phase Data</h3>
          {/* {console.log(phaseData)} */}
          <table>
            <thead>
              <tr>
                <th>PHASE/STAGE OF CONSTUCTION</th>  
                <th>Equipment</th>
                <th>Work</th>
                <th>New/Old</th>
                <th>Fuel Type</th>
                <th>Fuel Consumption</th>
                <th>Hours Operated</th>
                <th>Emission Factor</th>
                <th>Carbon Footprint</th>
                <th>Unit</th>
                <th>Unit(ppm)</th>
              </tr>
            </thead>
            <tbody>
              {phaseData.map((row, index) => (
                <tr key={index}>
                  <td>{row.stage}</td>
                  <td>{row.equipment}</td>
                  <td>{row.work}</td>
                  <td>{row.newOrOld}</td>
                  <td>{row.fuelType}</td>
                  <td>{row.fuelConsumption}</td>
                  <td>{row.hoursOperated}</td>
                  <td>{row.emissionFactor}</td>
                  <td>{row.carbonFootprint}</td>
                  <td>{row.unit}</td>
                  <td>{row.unitppm}</td>
                </tr> 
              ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modal;

