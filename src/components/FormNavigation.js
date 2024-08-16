// src/components/FormNavigation.js
import React from 'react';

const FormNavigation = ({ currentStep, nextStep, prevStep, handleSubmit }) => {
  return (
    <div className="form-navigation">
      {currentStep > 1 && (
        <button type="button" onClick={prevStep}>
          Go Back
        </button>
      )}
      {currentStep < 4 ? (
        <button type="button" onClick={nextStep}>
          Next Step
        </button>
      ) : (
        <button type="button" onClick={handleSubmit}>
          Confirm
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
