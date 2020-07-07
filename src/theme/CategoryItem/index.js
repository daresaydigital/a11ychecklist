import React from "react";
import CompletedCheckMark from "@theme/CompletedCheckMark"
import styles from './styles.module.scss';

export default ({ id, children }) => {
  return (
    <div className={styles.item}>
      {children}

      <CompletedCheckMark id={id} />
    </div>
  )
}