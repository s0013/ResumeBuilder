import React, { useState } from 'react';


const ProjectDetailsPage = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: '', description: '' } // Initial project
  ]);

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    const updatedProjects = projects.map(project =>
      project.id === id ? { ...project, [name]: value } : project
    );
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    const newId = Math.max(...projects.map(project => project.id), 0) + 1;
    setProjects([...projects, { id: newId, title: '', description: '' }]);
  };

  const handleRemoveProject = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
  };

  const handleSave = () => {
    localStorage.setItem('projectDetails', JSON.stringify(projects));
    alert('Project details saved successfully!');
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Project Details</h1>
      {projects.map((project, index) => (
        <div key={project.id} className="mb-3">
          <h4>Project {index + 1}</h4>
          <div className="mb-3">
            <label htmlFor={`title${project.id}`} className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id={`title${project.id}`}
              name="title"
              value={project.title}
              onChange={(e) => handleInputChange(project.id, e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`description${project.id}`} className="form-label">Description</label>
            <textarea
              className="form-control"
              id={`description${project.id}`}
              name="description"
              value={project.description}
              onChange={(e) => handleInputChange(project.id, e)}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleRemoveProject(project.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="d-grid gap-2">
        <button type="button" className="btn btn-primary" onClick={handleAddProject}>
          Add Project
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

export default ProjectDetailsPage;
