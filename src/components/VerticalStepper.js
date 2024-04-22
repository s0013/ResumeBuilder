import React, { useState } from 'react';
import PersonalDetails from '../components/PersonalDetailsPage';
import EducationDetails from '../components/EducationDetailsPage';
import ProjectDetails from '../components/ProjectDetailsPage';
import ExperienceDetails from '../components/ExperienceDetailsPage';
import ExtraDetails from '../components/ExtraDetailsPage';
import SubmissionDetails from '../components/SubmissionDetailsPage'; // Import the SubmissionDetails component

const VerticalStepper = () => {
  const [currentStep, setCurrentStep] = useState('personalDetails'); // Default to personalDetails

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleNext = () => {
    const sections = ['personalDetails', 'educationDetails', 'projectDetails', 'experienceDetails', 'extraDetails', 'submissionDetails']; // Add submissionDetails to the sections
    const currentIndex = sections.indexOf(currentStep);
    if (currentIndex < sections.length - 1) {
      setCurrentStep(sections[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const sections = ['personalDetails', 'educationDetails', 'projectDetails', 'experienceDetails', 'extraDetails', 'submissionDetails']; // Add submissionDetails to the sections
    const currentIndex = sections.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(sections[currentIndex - 1]);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <a
              href="#"
              className={`list-group-item list-group-item-action ${currentStep === 'personalDetails' ? 'active' : ''}`}
              onClick={() => handleStepClick('personalDetails')}
            >
              Personal Details
            </a>
            <a
              href="#"
              className={`list-group-item list-group-item-action ${currentStep === 'educationDetails' ? 'active' : ''}`}
              onClick={() => handleStepClick('educationDetails')}
            >
              Education Details
            </a>
            <a
              href="#"
              className={`list-group-item list-group-item-action ${currentStep === 'projectDetails' ? 'active' : ''}`}
              onClick={() => handleStepClick('projectDetails')}
            >
              Project Details
            </a>
            <a
              href="#"
              className={`list-group-item list-group-item-action ${currentStep === 'experienceDetails' ? 'active' : ''}`}
              onClick={() => handleStepClick('experienceDetails')}
            >
              Experience Details
            </a>
            <a
              href="#"
              className={`list-group-item list-group-item-action ${currentStep === 'extraDetails' ? 'active' : ''}`}
              onClick={() => handleStepClick('extraDetails')}
            >
              Extra Details
            </a>
            <a
              href="#"
              className={`list-group-item list-group-item-action ${currentStep === 'submissionDetails' ? 'active' : ''}`}
              onClick={() => handleStepClick('submissionDetails')}
            >
              Submission Details 
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              {currentStep === 'personalDetails' && <PersonalDetails />}
              {currentStep === 'educationDetails' && <EducationDetails />}
              {currentStep === 'projectDetails' && <ProjectDetails />}
              {currentStep === 'experienceDetails' && <ExperienceDetails />}
              {currentStep === 'extraDetails' && <ExtraDetails />}
              {currentStep === 'submissionDetails' && <SubmissionDetails />} 
              <div className="mt-3">
                {currentStep !== 'personalDetails' && (
                  <button className="btn btn-primary me-2" onClick={handlePrevious}>
                    Previous
                  </button>
                )}
                {currentStep !== 'submissionDetails' && ( // Check if it's not submissionDetails
                  <button className="btn btn-primary" onClick={handleNext}>
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalStepper;
