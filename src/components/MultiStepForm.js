// src/components/MultiStepForm.js
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Summary from './Summary';
import FormNavigation from './FormNavigation';
import '../styles/MultiStepForm.css'; 

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    addons: []
  });

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
  };

  const stepComponents = {
    1: <Step1 formData={formData} setFormData={setFormData} />,
    2: <Step2 formData={formData} setFormData={setFormData} />,
    3: <Step3 formData={formData} setFormData={setFormData} />,
    4: <Summary formData={formData} />
  };

  return (
    <div className="multi-step-form">
      {stepComponents[currentStep]}
      <FormNavigation
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default MultiStepForm;
