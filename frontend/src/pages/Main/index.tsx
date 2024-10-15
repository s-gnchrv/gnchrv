import React from "react";

import FirstScreen from "./FirstScreen";
import AboutBlock from "./AboutBlock";
import SkillsBlock from "./SkillsBlock";
import ProjectsBlock from "./ProjectsBlock";

const Main: React.FC = () => {
  return (
    <>
      <FirstScreen />
      <AboutBlock />
      <SkillsBlock />
      <ProjectsBlock />
    </>
  );
};

export default Main;
