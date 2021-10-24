import React, {useState} from "react";
import data_projects from "./data/projects_data";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {


  const [projects,setProjects] = useState(data_projects);
  const [active,setActive] = useState('All')  ;

  const handleFilterCategory = (name) => {
    const filtered_array = data_projects.filter(project => project.category.includes(name));
    setProjects(filtered_array);
    // for highlighting the clicked filter on the project pane
    setActive(name);
  }

  return (
    <div className="container projects">
      
    <hr/>
    {/* nav bar for filtering projects matching their category */}
      <div className="projects_filter" title="Click to filter out these kind of projects"> <h6> Project Filter:</h6>
        <div  className = {active === 'All' && 'projects_navbar-active'} onClick={
          () => {
            setProjects(data_projects)
            setActive("All")}
            }>All</div> <br/>
        <div className = {active === 'html' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('html')}> HTML </div>
        <div className = {active === 'css' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('css')}> CSS </div>
        <div className = {active === 'react.js' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('react.js')}> React </div>
        <div className = {active === 'express.js' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('express.js')}> Express </div>
        <div className = {active === 'node.js' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('node.js')}> Node </div>
        <div className = {active === 'js' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('js','express.js','node.js','react.js')}> JS </div>
        <div className = {active === 'heroku' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('heroku')}> Heroku</div>
        <div className = {active === 'portfolio' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('portfolio')}> Portfolio</div>
        <div className = {active === 'project' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('project')}> Projects</div>
        <div className = {active === 'markdown' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('markdown')}> Gists</div>
        <div className = {active === 'bootstrap' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('bootstrap')}> Bootstrap</div>
        <div className = {active === 'backend' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('backend')}> Backend</div>
        <div className = {active === 'mysql2' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('mysql2', 'mongo')}> Databases</div>
        <div className = {active === 'fullstack' && 'projects_navbar-active'} onClick={()=>handleFilterCategory('fullstack')}> Full Stack</div>
      </div> <hr/>

      <div className="row" >
        {
          /* to get every project  */
          projects.map((project) => (
            /* ProjectCard is the name of the component */
            <ProjectCard key={project.name} projects={project} />
          ))
        }
      </div> <hr/>
    </div> 
  );
}
