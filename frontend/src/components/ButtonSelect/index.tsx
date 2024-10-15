import React, { useState } from "react";
import styles from "./ButtonSelect.module.scss";

const ButtonSelect: React.FC<{ elements: string[] }> = ({ elements }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.select}>
      <ul>
        {elements.map((element, index) => (
          <li
            key={index}
            className={selected == index ? styles.active : ""}
            onClick={() => setSelected(index)}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonSelect;
