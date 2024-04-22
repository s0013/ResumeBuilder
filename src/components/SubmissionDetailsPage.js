import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubmissionDetailsPage = () => {
  const [personalDetails, setPersonalDetails] = useState(null);
  const [educationDetails, setEducationDetails] = useState(null);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);

  // Function to fetch personal details from local storage
  useEffect(() => {
    const storedPersonalDetails = localStorage.getItem('personalDetails');
    if (storedPersonalDetails) {
      setPersonalDetails(JSON.parse(storedPersonalDetails));
    }
  }, []);

  // Function to fetch education details from local storage
  useEffect(() => {
    const storedEducationDetails = localStorage.getItem('educationDetails');
    if (storedEducationDetails) {
      setEducationDetails(JSON.parse(storedEducationDetails));
    }
  }, []);

  // Function to fetch skills from local storage
  useEffect(() => {
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    }
  }, []);

  // Function to fetch achievements from local storage
  useEffect(() => {
    const storedAchievements = localStorage.getItem('achievements');
    if (storedAchievements) {
      setAchievements(JSON.parse(storedAchievements));
    }
  }, []);

  // Function to fetch experience details from local storage
  useEffect(() => {
    const storedExperienceDetails = localStorage.getItem('experienceDetails');
    if (storedExperienceDetails) {
      setExperienceDetails(JSON.parse(storedExperienceDetails));
    }
  }, []);

  // Function to fetch project details from local storage
  useEffect(() => {
    const storedProjectDetails = localStorage.getItem('projectDetails');
    if (storedProjectDetails) {
      setProjectDetails(JSON.parse(storedProjectDetails));
    }
  }, []);

// Function to generate and download the resume
const downloadResume = () => {
  html2canvas(document.querySelector(".abc")).then(canvas => {
    const imgData = canvas.toDataURL('image/png');

    const increasedWidth = canvas.width; 
    const increasedHeight = canvas.height * 1.1; 

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [increasedWidth, increasedHeight] 
    });

    const contentWidth = canvas.width;
    const contentHeight = canvas.height;
    
    
    const pdfX = 50; 
    const pdfY = 50;
    const imageWidth = contentWidth - (pdfX * 2); 
    const imageHeight = contentHeight;

    pdf.addImage(imgData, 'PNG', pdfX, pdfY, imageWidth, imageHeight);

    pdf.save('resume.pdf');
  });
};


  return (
    <div className="container mt-5" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
    <div className="row abc">
      <div className="col-md-4 " style={{ backgroundColor: 'blue', color: 'white', padding: '20px', borderRadius: '10px' }}>
        {/* Personal Details */}
        {personalDetails && (
          <div>
            <div className="d-flex flex-column align-items-center mb-4">
              <img src={personalDetails.passportPhoto} alt="Passport Photo" className="img-fluid rounded-circle mb-1" />
              <h2 className="mb-0">{personalDetails.firstName} {personalDetails.lastName}</h2>
            </div>
            <div className="mb-4">
              <h5>Contact</h5>
              <p>Phone: {personalDetails.phone}</p>
              <p>Email: {personalDetails.email}</p>
              <p>Github: {personalDetails.github}</p>
              <p>Twitter: {personalDetails.twitter}</p>
              <p>LinkedIn: {personalDetails.linkedin}</p>
            </div>
          </div>
        )}
        {/* Education Details */}
        {educationDetails && (
          <div>
            <div className="mb-4">
              <h5>Education</h5>
              <div>
                <h6>School</h6>
                <p>{educationDetails.schoolName}</p>
                <p>{educationDetails.schoolMarks}</p>
              </div>
              <div>
                <h6>College</h6>
                <p>{educationDetails.collegeName}</p>
                <p>{educationDetails.collegeMajor}</p>
                <p>{educationDetails.collegeQualification}</p>
              </div>
              <div>
                <h6>Diploma</h6>
                <p>{educationDetails.diplomaCollegeName}</p>
                <p>{educationDetails.diplomaMajor}</p>
                <p>{educationDetails.diplomaMarks}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="col-md-8" style={{ backgroundColor: 'whitesmoke', color: 'black', padding: '20px' }} >
        {/* Experience Section */}
        <h2 className="text-center mb-4">Experience</h2>
        {experienceDetails.map((experience, index) => (
          <div key={index}>
            <h5>Organization: {experience.organization}</h5>
            <p>Designation: {experience.designation}</p>
           
          </div>
        ))}

        {/* Projects Section */}
        <h2 className="text-center mt-5 mb-4">Projects</h2>
        {projectDetails.map((project, index) => (
          <div key={index}>
            <h5>{project.title}</h5>
            <p>Description: {project.description}</p>
          </div>
        ))}

        {/* Skills Section */}
        <h2 className="text-center mt-5 mb-4">Skills</h2>
        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}

        {/* Achievements Section */}
        <h2 className="text-center mt-5 mb-4">Achievements</h2>
        {achievements.map((achievement, index) => (
          <p key={index}>{achievement}</p>
        ))}

        {/* Download Button */}
        <div className="text-center">
         
        </div>
      </div>
      </div><br></br>
      <button className="btn btn-primary" onClick={downloadResume}>Download</button>
    </div>
  );
}

export default SubmissionDetailsPage;
