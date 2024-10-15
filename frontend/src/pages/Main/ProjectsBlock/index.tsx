import React from "react";
import styles from "./ProjectsBlock.module.scss";
import Title from "../../../components/Title";
import ProjectList from "../../../components/ProjectList";
import ArrowButton from "../../../components/ArrowButton";

const ProjectsBlock: React.FC = () => {
  return (
    <div className={[styles.projects, "block", "container"].join(" ")}>
      <Title>Проекты</Title>
      <div className={styles.projects__content}>
        <ProjectList />
        <div className={styles.projects__button}>
          <ArrowButton to="/projects">Все проекты</ArrowButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
