import React from "react";
import data_projects from "./data/projects_data";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="container projects">
      <div className="row">
        {
          /* to get every project  */
          data_projects.map((project) => (
            /* ProjectCard is the name of the component */
            <ProjectCard key={project.name} projects={project} />
          ))
        }
      </div>
    </div>
  );
};
