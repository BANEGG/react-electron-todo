import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_title}>
        We have <b>{todoCount}</b> task(s)
      </div>
    </div>
  );
};
