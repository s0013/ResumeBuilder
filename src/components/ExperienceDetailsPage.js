import React, { useState } from 'react';

const ExperienceDetailsPage = () => {
  const [experiences, setExperiences] = useState([
    { organization: '', designation: '' }
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, { organization: '', designation: '' }]);
  };

  const removeExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save experience data to localStorage
    localStorage.setItem('experienceDetails', JSON.stringify(experiences));
    alert('Experience details saved successfully!');
  };

  return (
    <div>
      <h2>Experience Details</h2>
      <form onSubmit={handleSubmit}>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-3">
            <h4>Experience {index + 1}</h4>
            <div className="mb-3">
              <label htmlFor={`organization-${index}`} className="form-label">Organization</label>
              <input type="text" className="form-control" id={`organization-${index}`} name="organization" value={experience.organization} onChange={(e) => handleChange(index, e)} />
            </div>
            <div className="mb-3">
              <label htmlFor={`designation-${index}`} className="form-label">Designation</label>
              <input type="text" className="form-control" id={`designation-${index}`} name="designation" value={experience.designation} onChange={(e) => handleChange(index, e)} />
            </div>
            <button type="button" className="btn btn-danger me-2" onClick={() => removeExperience(index)}> Remove</button>
          </div>
        ))}
        <button type="button" className="btn btn-primary mb-3" onClick={addExperience}>Add Experience</button><br></br>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default ExperienceDetailsPage;
