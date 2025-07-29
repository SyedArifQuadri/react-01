import React from "react";

 export default function Projects(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <strong>Technologies: {project.tech}</strong>
        </div>
      ))}
    </section>
  );
}