import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const skills = [
  "Java (Core & Advanced)",
  "Spring Boot / Hibernate",
  "Adobe Experience Manager (AEM)",
  "HTML, CSS, JavaScript",
  "SQL, Oracle 10g",
  "JUnit, Mockito, Sling Models",
  "Git, Bitbucket",
  "Agile (Scrum)",
];

const projects = [
  {
    name: "ITC Limited (AEM Cloud)",
    description:
      "Built and customized AEM components, integrated AWS S3, and developed Sling Models and Servlets.",
    tech: "Java, AEM Cloud, Sling, HTL, JavaScript"
  },
  {
    name: "Visa Inc (AEM 6.5)",
    description:
      "Migrated pages to editable templates, transitioned components, and developed headless CMS architecture.",
    tech: "Java, AEM 6.5, Groovy, Maven, Bitbucket"
  },
];
  return (
    <div>
      < Header title={"Syed Arif Quadri"} content={"Full Stack Developer | AEM Developer"} />
      < About  title={"About Me"} content={`I am a passionate Full Stack Developer with experience in Adobe Experience Manager (AEM),
        Spring Boot, and modern web technologies. I enjoy solving real-world problems and building scalable
        applications that deliver meaningful user experiences.`} />
      
      <Skills title={"Technical Skills"} skills={skills} />
      <Projects title ={"Projects"} projects={projects}/>
      <Contact title={"Contact"} email={"syedarifquadri333@gmail.com"} phone={"+91 7330623311"}/>
      <Footer content={"Syed Arif Quadri. All rights reserved."}/>
    </div>
  );
}

export default App;