import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineLineChart } from 'react-icons/ai';
import { AiFillBank } from 'react-icons/ai';

const EducationDetailsPage = () => {
  const [formData, setFormData] = useState({
    collegeName: '',
    collegeStartDate: '',
    collegeEndDate: '',
    collegeQualification: '',
    collegeMajor: '',
    schoolName: '',
    schoolStartDate: '',
    schoolEndDate: '',
    schoolMarks: '',
    diplomaCollegeName: '',
    diplomaMajor: '',
    diplomaMarks: ''
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
    localStorage.setItem('educationDetails', JSON.stringify(formData));
    alert('Education details saved successfully!');
  };

  return (
    <div>
      <h2>Education Details</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-4">
          <h4>College</h4>
          <div className="mb-3">
            <label htmlFor="collegeName" className="form-label">Name</label>
            <div className="input-group">
              <span className="input-group-text"><BsFillPersonFill /></span>
              <input type="text" className="form-control" id="collegeName" name="collegeName" onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="collegeStartDate" className="form-label">Start Date</label>
            <div className="input-group">
              <span className="input-group-text"><BiCalendar /></span>
              <input type="date" className="form-control" id="collegeStartDate" name="collegeStartDate" onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="collegeEndDate" className="form-label">End Date</label>
            <div className="input-group">
              <span className="input-group-text"><BiCalendar /></span>
              <input type="date" className="form-control" id="collegeEndDate" name="collegeEndDate" onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="collegeQualification" className="form-label">Qualification</label>
            <div className="input-group">
              <span className="input-group-text"><FaGraduationCap /></span>
              <input type="text" className="form-control" id="collegeQualification" name="collegeQualification" onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="collegeMajor" className="form-label">Major</label>
            <div className="input-group">
              <span className="input-group-text"><FaGraduationCap /></span>
              <input type="text" className="form-control" id="collegeMajor" name="collegeMajor" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h4>10th</h4>
          <div className="mb-3">
            <label htmlFor="schoolName" className="form-label">School Name</label>
            <div className="input-group">
              <span className="input-group-text"><AiOutlineLineChart /></span>
              <input type="text" className="form-control" id="schoolName" name="schoolName" onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="schoolStartDate" className="form-label">Start Date</label>
            <div className="input-group">
              <span className="input-group-text"><BiCalendar /></span>
              <input type="date" className="form-control" id="schoolStartDate" name="schoolStartDate" onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="schoolEndDate" className="form-label">End Date</label>
            <div className="input-group">
              <span className="input-group-text"><BiCalendar /></span>
              <input type="date" className="form-control" id="schoolEndDate" name="schoolEndDate" onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="schoolMarks" className="form-label">Marks</label>
            <div className="input-group">
              <span className="input-group-text"><AiFillBank /></span>
              <input type="text" className="form-control" id="schoolMarks" name="schoolMarks" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h4>12th/Diploma</h4>
          <div className="mb-3">
            <label htmlFor="diplomaCollegeName" className="form-label">College Name</label>
            <div className="input-group">
              <span className="input-group-text"><BsFillPersonFill /></span>
              <input type="text" className="form-control" id="diplomaCollegeName" name="diplomaCollegeName" onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="diplomaMajor" className="form-label">Major</label>
            <div className="input-group">
              <span className="input-group-text"><FaGraduationCap /></span>
              <input type="text" className="form-control" id="diplomaMajor" name="diplomaMajor" onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="diplomaMarks" className="form-label">Marks</label>
            <div className="input-group">
              <span className="input-group-text"><AiFillBank /></span>
              <input type="text" className="form-control" id="diplomaMarks" name="diplomaMarks" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EducationDetailsPage;
