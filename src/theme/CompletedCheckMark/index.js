import React from "react";
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import { useProgressState, useGroupFromLocation } from "@theme/ProgressBar";
import styles from './styles.module.scss';

export default ({ id, group = "auto" }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [_, dispatch] = useProgressState();

  if (group === "auto") {
    group = useGroupFromLocation();
  }

  React.useEffect(() => {
    dispatch({ type: "add", group, id });
    const item = localStorage.getItem(id);
    if (item && item === "checked") {
      setIsChecked(true);
      dispatch({ type: "check", group, id });
    }
  }, []);

  const toggleChecked = () => {
    if (isChecked) {
      localStorage.removeItem(id);
      setIsChecked(false);
      dispatch({ type: "uncheck", group, id });
    } else {
      localStorage.setItem(id, "checked");
      setIsChecked(true);
      dispatch({ type: "check", group, id });
    }
  };

  return (
    <div className={clsx(styles.completecheck, { [styles.checked]: isChecked })}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked ? true : false}
        onChange={toggleChecked}
      />
      <label htmlFor={id} >{isChecked ? "Completed" : "Mark as Completed"}</label>
    </div>
  )
}