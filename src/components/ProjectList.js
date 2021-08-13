import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const c = projects.map((d) => {
    return (
    <ProjectItem key={d.id} name={d.name} about={d.about}
    technologies= {d.technologies}
    />)
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list" >{c}</div>
    </div>
  );
}

export default ProjectList;
