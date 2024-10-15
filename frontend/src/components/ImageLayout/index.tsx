import React, { PropsWithChildren } from "react";
import styles from "./ImageLayout.module.scss";

const ImageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__photo}>
        <img src="photo.png" alt="Сергей Гончаров" />
      </div>
      <div className={styles.layout__content}>{children}</div>
    </div>
  );
};

export default ImageLayout;
