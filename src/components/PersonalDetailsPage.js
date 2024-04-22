import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
    alert('Data saved successfully!');
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="passportPhoto" className="form-label">Passport Photo</label>
              <input type="file" className="form-control" id="passportPhoto" name="passportPhoto" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-person"></i></span>
            <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-person"></i></span>
            <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-envelope"></i></span>
            <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-telephone"></i></span>
            <input type="text" className="form-control" id="phone" name="phone" onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="website" className="form-label">Your Website</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-globe"></i></span>
            <input type="text" className="form-control" id="website" name="website" onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="github" className="form-label">Github</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-github"></i></span>
            <input type="text" className="form-control" id="github" name="github" onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="linkedin" className="form-label">LinkedIn</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-linkedin"></i></span>
            <input type="text" className="form-control" id="linkedin" name="linkedin" onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="twitter" className="form-label">Twitter</label>
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-twitter"></i></span>
            <input type="text" className="form-control" id="twitter" name="twitter" onChange={handleChange} />
          </div>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsPage;
