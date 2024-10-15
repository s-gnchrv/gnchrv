import React from "react";
import styles from "./Filter.module.scss";
import ButtonSelect from "../../../components/ButtonSelect";
import Dropdown from "../../../components/Dropdown";

const Filter: React.FC = () => {
  const types = ["Все", "Frontend", "Backend", "Верстка", "Telegram-боты"];
  const technologies = ["Все технологии", "Python", "FastAPI", "Django"];

  return (
    <div className={styles.filter}>
      <div className={styles.filter__type}>
        <ButtonSelect elements={types} />
      </div>
      <div className={styles.filter__technology}>
        <Dropdown elements={technologies} />
      </div>
    </div>
  );
};

export default Filter;
