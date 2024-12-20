import React from "react";
import styles from "./Title.module.scss";

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
