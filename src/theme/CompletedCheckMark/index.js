import React from "react";
import clsx from 'clsx';
import styles from './styles.module.scss';

export default ({ id }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    const item = localStorage.getItem(id);
    setIsChecked(item && item === "checked");
  }, []);

  const toggleChecked = () => {
    if (isChecked) {
      localStorage.removeItem(id);
      setIsChecked(false);
    } else {
      localStorage.setItem(id, "checked");
      setIsChecked(true);
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