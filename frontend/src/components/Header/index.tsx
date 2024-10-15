import React from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={["container", styles.header__content].join(" ")}>
        <Link to="/" className={styles.header__logo}>
          gnchrv.ru;
        </Link>
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Обо мне
              </NavLink>
            </li>
            <li>
              <a href="">Навыки</a>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Проекты
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
