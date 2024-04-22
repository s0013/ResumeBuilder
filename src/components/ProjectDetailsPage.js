import React, { useState } from 'react';


const ProjectDetailsPage = () => {
  const [projects, setProjects] = useState([
    { title: '', description: '' }
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...projects];
    newProjects[index][name] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([...projects, { title: '', description: '' }]);
  };

  const removeProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save project data to localStorage
    localStorage.setItem('projectDetails', JSON.stringify(projects));
    alert('Project details saved successfully!');
  };

  return (
    <div>
      <h2>Project Details</h2>
      <form onSubmit={handleSubmit}>
        {projects.map((project, index) => (
          <div key={index} className="mb-3">
            <h4>Project {index + 1}</h4>
            <div className="mb-3">
              <label htmlFor={`title-${index}`} className="form-label">Title</label>
              <input type="text" className="form-control" id={`title-${index}`} name="title" value={project.title} onChange={(e) => handleChange(index, e)} />
            </div>
            <div className="mb-3">
              <label htmlFor={`description-${index}`} className="form-label">Description</label>
              <textarea className="form-control" id={`description-${index}`} name="description" value={project.description} onChange={(e) => handleChange(index, e)} />
            </div>
            <button type="button" className="btn btn-danger me-2" onClick={() => removeProject(index)}> Remove</button>
          </div>
        ))}
        <button type="button" className="btn btn-primary mb-3" onClick={addProject}>Add Project</button><br></br>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default ProjectDetailsPage;
