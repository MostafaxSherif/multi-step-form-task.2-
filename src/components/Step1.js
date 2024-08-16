// src/components/Step1.js
import React from 'react';
import '../styles/Step1.css'; 

const Step1 = ({ formData, setFormData }) => {
  return (
    <div className="form-container">
      <h2>Personal Info</h2>
      <p className="description">Please provide your name, email address, and phone number.</p>
      <form>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Stephen King"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +1 234 567 890"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
