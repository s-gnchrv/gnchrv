import React from "react";
import styles from "./ProjectList.module.scss";
import { Link } from "react-router-dom";
import TechnologyList from "../TechnologyList";

const ProjectList: React.FC<{ count?: number }> = ({ count }) => {
  return (
    <div className={styles.projects}>
      {[...new Array(count || 3)].map((_, index) => (
        <div key={index} className={styles.project}>
          <Link to="/projects/project-name" className={styles.project__image}>
            <img src="project.png" alt="" />
            <div className={styles.project__details}>
              <p className={styles.project__details_text}>Подробнее</p>
              <svg
                className={styles.project__details_icon}
                fill="none"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Link>
          <h2 className={styles.project__title}>
            Веб-сайт для ресторана быстрого питания
          </h2>
          <p className={styles.project__description}>
            Сайт для онлайн-заказов еды из ресторана быстрого питания с панелью
            управления и генерацией отчетов в формате Word.
          </p>
          <div className={styles.project__technologies}>
            <TechnologyList technologies={["C#", "ASP.NET", "PostgreSQL"]} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
