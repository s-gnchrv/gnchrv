import React from "react";
import styles from "./Subtitle.module.scss";

const Subtitle: React.FC<React.PropsWithChildren<{ underlined?: boolean }>> = ({
  children,
  underlined,
}) => {
  return (
    <h2
      className={[
        styles.subtitle,
        underlined ? styles.subtitle_underlined : "",
      ].join(" ")}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
