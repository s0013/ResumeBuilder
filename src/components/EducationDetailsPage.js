import React, { useState } from 'react';
import { FaUniversity, FaCalendarAlt, FaGraduationCap, FaSchool } from 'react-icons/fa';

const EducationDetailsPage = () => {
  const [formData, setFormData] = useState({
    collegeUniversity: '',
    collegeStartDate: '',
    collegeEndDate: '',
    collegeQualification: '',
    collegeMajor: '',
    collegeCGPA: '',
    school: '',
    schoolStartDate: '',
    schoolEndDate: '',
    schoolMarks: '',
    schoolQualification: '',
    diplomaCollegeName: '',
    diplomaStartDate: '',
    diplomaEndDate: '',
    diplomaQualification: '',
    diplomaMarks: ''
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
    localStorage.setItem('educationDetails', JSON.stringify(formData));
    alert('Data saved successfully!');
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Education Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <h5>College/University</h5>
            <div className="mb-3">
              <label htmlFor="collegeUniversity" className="form-label">
                <FaUniversity className="me-2" /> College/University Name
              </label>
              <input
                type="text"
                className="form-control"
                id="collegeUniversity"
                name="collegeUniversity"
                value={formData.collegeUniversity}
                onChange={handleInputChange}
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="collegeStartDate" className="form-label">
                  <FaCalendarAlt className="me-2" /> Start Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="collegeStartDate"
                  name="collegeStartDate"
                  value={formData.collegeStartDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="collegeEndDate" className="form-label">
                  <FaCalendarAlt className="me-2" /> End Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="collegeEndDate"
                  name="collegeEndDate"
                  value={formData.collegeEndDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="collegeQualification" className="form-label">
                <FaGraduationCap className="me-2" /> Qualification
              </label>
              <input
                type="text"
                className="form-control"
                id="collegeQualification"
                name="collegeQualification"
                value={formData.collegeQualification}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="collegeMajor" className="form-label">
                Major
              </label>
              <input
                type="text"
                className="form-control"
                id="collegeMajor"
                name="collegeMajor"
                value={formData.collegeMajor}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="collegeCGPA" className="form-label">
                CGPA
              </label>
              <input
                type="text"
                className="form-control"
                id="collegeCGPA"
                name="collegeCGPA"
                value={formData.collegeCGPA}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <h5>School</h5>
            <div className="mb-3">
              <label htmlFor="school" className="form-label">
                <FaSchool className="me-2" /> School Name
              </label>
              <input
                type="text"
                className="form-control"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="schoolStartDate" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="schoolStartDate"
                  name="schoolStartDate"
                  value={formData.schoolStartDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="schoolEndDate" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="schoolEndDate"
                  name="schoolEndDate"
                  value={formData.schoolEndDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="schoolMarks" className="form-label">
                Marks
              </label>
              <input
                type="text"
                className="form-control"
                id="schoolMarks"
                name="schoolMarks"
                value={formData.schoolMarks}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="schoolQualification" className="form-label">
                Qualification
              </label>
              <input
                type="text"
                className="form-control"
                id="schoolQualification"
                name="schoolQualification"
                value={formData.schoolQualification}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-4">
            <h5>12th/Diploma College</h5>
            <div className="mb-3">
              <label htmlFor="diplomaCollegeName" className="form-label">
                <FaUniversity className="me-2" /> College Name
              </label>
              <input
                type="text"
                className="form-control"
                id="diplomaCollegeName"
                name="diplomaCollegeName"
                value={formData.diplomaCollegeName}
                onChange={handleInputChange}
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="diplomaStartDate" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="diplomaStartDate"
                  name="diplomaStartDate"
                  value={formData.diplomaStartDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="diplomaEndDate" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="diplomaEndDate"
                  name="diplomaEndDate"
                  value={formData.diplomaEndDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="diplomaQualification" className="form-label">
                Qualification
              </label>
              <input
                type="text"
                className="form-control"
                id="diplomaQualification"
                name="diplomaQualification"
                value={formData.diplomaQualification}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="diplomaMarks" className="form-label">
                Marks
              </label>
              <input
                type="text"
                className="form-control"
                id="diplomaMarks"
                name="diplomaMarks"
                value={formData.diplomaMarks}
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

export default EducationDetailsPage;
