import React, { useState } from 'react';

const PersonalDetailsPage = () => {
  const [formData, setFormData] = useState({
    passportPhoto: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    github: '',
    linkedin: '',
    twitter: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to localStorage
    localStorage.setItem('personalDetails', JSON.stringify(formData));
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="passportPhoto" className="form-label">Passport Photo</label>
          <input type="file" className="form-control" id="passportPhoto" name="passportPhoto" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phone" name="phone" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="website" className="form-label">Your Website</label>
          <input type="text" className="form-control" id="website" name="website" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="github" className="form-label">Github</label>
          <input type="text" className="form-control" id="github" name="github" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="linkedin" className="form-label">LinkedIn</label>
          <input type="text" className="form-control" id="linkedin" name="linkedin" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="twitter" className="form-label">Twitter</label>
          <input type="text" className="form-control" id="twitter" name="twitter" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default PersonalDetailsPage;
