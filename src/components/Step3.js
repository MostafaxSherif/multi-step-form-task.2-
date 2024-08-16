// src/components/Step3.js
import React from 'react';
import '../styles/Step3.css'; 

const Step3 = ({ formData, setFormData }) => {
  const addons = ['Online Service', 'Larger Storage', 'Customizable Profile'];

  const handleToggleAddon = (addon) => {
    const newAddons = formData.addons.includes(addon)
      ? formData.addons.filter((item) => item !== addon)
      : [...formData.addons, addon];

    setFormData({ ...formData, addons: newAddons });
  };

  return (
    <div className="form-container">
      <h2>Pick Add-ons</h2>
      <p className="description">Enhance your gaming experience with these add-ons.</p>
      <div className="addon-options">
        {addons.map((addon) => (
          <div
            key={addon}
            className={`addon ${formData.addons.includes(addon) ? 'selected' : ''}`}
            onClick={() => handleToggleAddon(addon)}
          >
            {addon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3;
