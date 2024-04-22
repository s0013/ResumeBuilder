import React, { useState } from 'react';

const ExtraDetailsPage = () => {
  const [skills, setSkills] = useState(['']);
  const [achievements, setAchievements] = useState(['']);

  const handleSkillChange = (index, e) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };

  const handleAchievementChange = (index, e) => {
    const newAchievements = [...achievements];
    newAchievements[index] = e.target.value;
    setAchievements(newAchievements);
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const addAchievement = () => {
    setAchievements([...achievements, '']);
  };

  const removeAchievement = (index) => {
    const newAchievements = [...achievements];
    newAchievements.splice(index, 1);
    setAchievements(newAchievements);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save skills and achievements data to localStorage
    localStorage.setItem('skills', JSON.stringify(skills));
    localStorage.setItem('achievements', JSON.stringify(achievements));
    alert('Skills and achievements saved successfully!');
  };

  return (
    <div className="container">
      <h2>Extra Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h4>Skills</h4>
          {skills.map((skill, index) => (
            <div key={index} className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                value={skill} 
                onChange={(e) => handleSkillChange(index, e)} 
                required 
              />
              <button type="button" className="btn btn-danger" onClick={() => removeSkill(index)}>Remove</button>
            </div>
          ))}
          <button type="button" className="btn btn-primary mb-3" onClick={addSkill}>Add Skill</button>
        </div>

        <div className="mb-3">
          <h4>Achievements</h4>
          {achievements.map((achievement, index) => (
            <div key={index} className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                value={achievement} 
                onChange={(e) => handleAchievementChange(index, e)} 
                required 
              />
              <button type="button" className="btn btn-danger" onClick={() => removeAchievement(index)}>Remove</button>
            </div>
          ))}
          <button type="button" className="btn btn-primary mb-3" onClick={addAchievement}>Add Achievement</button>
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default ExtraDetailsPage;
