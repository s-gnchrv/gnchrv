import React, { PropsWithChildren } from "react";

import styles from "./ListItem.module.scss";

const ListItem: React.FC<PropsWithChildren> = ({ children }) => {
  return <li className={styles.list_item}>{children}</li>;
};

export default ListItem;
