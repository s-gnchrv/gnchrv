import React from "react";
import styles from "./PrimaryButton.module.scss";

const PrimaryButton: React.FC<
  React.PropsWithChildren<{ href: string; target?: string }>
> = ({ children, href, target }) => {
  return (
    <a className={styles.button} href={href} target={target || "_self"}>
      {children}
    </a>
  );
};

export default PrimaryButton;
