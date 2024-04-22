import React, { useState } from 'react';


const ExtraDetailsPage = () => {
  const [skills, setSkills] = useState(['']); // Initial skill
  const [achievements, setAchievements] = useState(['']); // Initial achievement

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleAddAchievement = () => {
    setAchievements([...achievements, '']);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleAchievementChange = (index, value) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index] = value;
    setAchievements(updatedAchievements);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleRemoveAchievement = (index) => {
    const updatedAchievements = [...achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
  };

  const handleSave = () => {
    const data = {
      skills,
      achievements
    };
    localStorage.setItem('extraDetails', JSON.stringify(data));
    alert('Extra details saved successfully!');
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Extra Details</h1>
      <div className="mb-3">
        <h4>Skills</h4>
        {skills.map((skill, index) => (
          <div key={index} className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Skill"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
            <button type="button" className="btn btn-danger mt-2" onClick={() => handleRemoveSkill(index)}>
             Remove
            </button>
          </div>
        ))}
        <button type="button" className="btn btn-primary" onClick={handleAddSkill}>
           Add Skill
        </button>
      </div>
      <div className="mb-3">
        <h4>Achievements</h4>
        {achievements.map((achievement, index) => (
          <div key={index} className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Achievement"
              value={achievement}
              onChange={(e) => handleAchievementChange(index, e.target.value)}
            />
            <button type="button" className="btn btn-danger mt-2" onClick={() => handleRemoveAchievement(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" className="btn btn-primary" onClick={handleAddAchievement}>
          Add Achievement
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

export default ExtraDetailsPage;
