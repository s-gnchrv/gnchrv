import React from "react";
import Title from "../../components/Title";
import ProjectList from "../../components/ProjectList";
import Filter from "./Filter";

const Projects: React.FC = () => {
  return (
    <div className="container">
      <Title>Проекты</Title>
      <Filter />
      <ProjectList count={6} />
    </div>
  );
};

export default Projects;
