// src/components/Step2.js
import React from 'react';
import '../styles/Step2.css'; 

const Step2 = ({ formData, setFormData }) => {
  const plans = ['Arcade', 'Advanced', 'Pro'];

  return (
    <div className="form-container">
      <h2>Select Your Plan</h2>
      <p className="description">Choose a plan that suits your needs.</p>
      <div className="plan-options">
        {plans.map((plan) => (
          <div
            key={plan}
            className={`plan ${formData.plan === plan ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, plan })}
          >
            {plan}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2;
