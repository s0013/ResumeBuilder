import React, { useState } from 'react';


const ExperienceDetailsPage = () => {
  const [experiences, setExperiences] = useState([
    { id: 1, organization: '', designation: '' } // Initial experience
  ]);

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    const updatedExperiences = experiences.map(exp =>
      exp.id === id ? { ...exp, [name]: value } : exp
    );
    setExperiences(updatedExperiences);
  };

  const handleAddExperience = () => {
    const newId = Math.max(...experiences.map(exp => exp.id), 0) + 1;
    setExperiences([...experiences, { id: newId, organization: '', designation: '' }]);
  };

  const handleRemoveExperience = (id) => {
    const updatedExperiences = experiences.filter(exp => exp.id !== id);
    setExperiences(updatedExperiences);
  };

  const handleSave = () => {
    localStorage.setItem('experienceDetails', JSON.stringify(experiences));
    alert('Experience details saved successfully!');
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Experience Details</h1>
      {experiences.map((experience, index) => (
        <div key={experience.id} className="mb-3">
          <h4>Experience {index + 1}</h4>
          <div className="mb-3">
            <label htmlFor={`organization${experience.id}`} className="form-label">Organization</label>
            <input
              type="text"
              className="form-control"
              id={`organization${experience.id}`}
              name="organization"
              value={experience.organization}
              onChange={(e) => handleInputChange(experience.id, e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`designation${experience.id}`} className="form-label">Designation</label>
            <input
              type="text"
              className="form-control"
              id={`designation${experience.id}`}
              name="designation"
              value={experience.designation}
              onChange={(e) => handleInputChange(experience.id, e)}
            />
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleRemoveExperience(experience.id)}
          >
             Remove
          </button>
        </div>
      ))}
      <div className="d-grid gap-2">
        <button type="button" className="btn btn-primary" onClick={handleAddExperience}>
          Add Experience
        </button>
      </div>
      <div className="mt-3">
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default ExperienceDetailsPage;
