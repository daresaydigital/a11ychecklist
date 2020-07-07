import React from "react";
import clsx from 'clsx';
import styles from './styles.module.scss';

export default ({ icon, children }) => {
  return (
    <div className={styles.card}>
      <h1 className={clsx(styles.icon)}>{icon}</h1>
        {children}
    </div>
  )
}