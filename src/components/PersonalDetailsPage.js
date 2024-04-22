import React, { useState } from 'react';
import { FaPassport, FaUser, FaEnvelope, FaPhone, FaGlobe, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

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
    twitter: '',
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('personalDetails', JSON.stringify(formData));
    alert('Data saved successfully!');
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Personal Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="passportPhoto" className="form-label">
              <FaPassport className="me-2" /> Passport Photo
            </label>
            <input
              type="file"
              className="form-control"
              id="passportPhoto"
              name="passportPhoto"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                <FaUser className="me-2" /> First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="website" className="form-label">
                <FaGlobe className="me-2" /> Your Website
              </label>
              <input
                type="url"
                className="form-control"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="github" className="form-label">
                <FaGithub className="me-2" /> Github
              </label>
              <input
                type="url"
                className="form-control"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="twitter" className="form-label">
                <FaTwitter className="me-2" /> Twitter
              </label>
              <input
                type="url"
                className="form-control"
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                <FaUser className="me-2" /> Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <FaEnvelope className="me-2" /> Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                <FaPhone className="me-2" /> Phone No
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="linkedin" className="form-label">
                <FaLinkedin className="me-2" /> LinkedIn
              </label>
              <input
                type="url"
                className="form-control"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
              />
            </div>
           
          </div>
        </div>
        <button type="submit" className="btn btn-primary"> Save</button>
      </form>
    </div>
  );
}

export default PersonalDetailsPage;
