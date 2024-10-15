import React, { PropsWithChildren } from "react";

import styles from "./Contact.module.scss";

const Contact: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.contact}>{children}</div>;
};

export default Contact;
