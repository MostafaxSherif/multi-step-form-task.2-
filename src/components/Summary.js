// src/components/Summary.js
import React from 'react';
import '../styles/Summary.css'; 

const Summary = ({ formData }) => {
  return (
    <div className="form-container">
      <h2>Summary</h2>
      <p className="description">Double-check everything before confirming.</p>
      <div className="summary-details">
        <div className="summary-item">
          <span>Name:</span> {formData.name}
        </div>
        <div className="summary-item">
          <span>Email:</span> {formData.email}
        </div>
        <div className="summary-item">
          <span>Phone:</span> {formData.phone}
        </div>
        <div className="summary-item">
          <span>Plan:</span> {formData.plan}
        </div>
        <div className="summary-item">
          <span>Add-ons:</span> {formData.addons.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default Summary;
