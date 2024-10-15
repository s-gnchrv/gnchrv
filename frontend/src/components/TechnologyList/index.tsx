import React from "react";

import styles from "./TechnologyList.module.scss";

const TechnologyList: React.FC<{ technologies: string[] }> = ({
  technologies,
}) => {
  return (
    <div className={styles.technologies}>
      <ul>
        {technologies.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologyList;
