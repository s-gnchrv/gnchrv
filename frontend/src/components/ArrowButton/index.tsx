import React, { PropsWithChildren } from "react";
import styles from "./ArrowButton.module.scss";
import { Link } from "react-router-dom";

const ArrowButton: React.FC<
  PropsWithChildren<{ to: string; left?: boolean; small?: boolean }>
> = ({ children, to, left, small }) => {
  return (
    <Link
      className={[styles.button, small ? styles.button_small : ""].join(" ")}
      to={to}
    >
      {left && (
        <svg
          className={styles.icon_left}
          fill="none"
          height="24"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 12H6M6 12L12 6M6 12L12 18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      <div className={styles.button__content}>{children}</div>
      {!left && (
        <svg
          className={styles.icon_right}
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
      )}
    </Link>
  );
};

export default ArrowButton;
