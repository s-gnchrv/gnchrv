import React from "react";
import styles from "./DropdownMenu.module.scss";

type DropdownMenuProps = {
  elements: string[];
  selected: number;
  onChange: (value: number) => void;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  elements,
  selected,
  onChange,
}) => {
  return (
    <ul className={styles.menu}>
      {elements.map((element, index) => (
        <li
          key={index}
          className={selected == index ? styles.active : ""}
          onClick={() => {
            if (selected !== index) onChange(index);
          }}
        >
          {element}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
