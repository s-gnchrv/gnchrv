import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Dropdown.module.scss";

import DropdownMenu from "../DropdownMenu";

const Dropdown: React.FC<{ elements: string[] }> = ({ elements }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const dropdownRef = useRef(null);

  const onSelectedChange = (value: number) => {
    setSelected(value);
    setOpen(!open);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={[styles.dropdown__button, open ? styles.open : ""].join(" ")}
        onClick={() => setOpen(!open)}
      >
        <p>{elements[selected]}</p>
        <svg
          fill="none"
          height="24"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <CSSTransition
        nodeRef={dropdownRef}
        in={open}
        timeout={300}
        classNames={{
          enter: styles.dropdown__menu_enter,
          enterActive: styles.dropdown__menu_enter_active,
          exit: styles.dropdown__menu_exit,
          exitActive: styles.dropdown__menu_exit_active,
        }}
        unmountOnExit
      >
        <div className={styles.dropdown__menu} ref={dropdownRef}>
          <DropdownMenu
            elements={elements}
            selected={selected}
            onChange={onSelectedChange}
          />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
