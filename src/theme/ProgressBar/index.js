import React from "react";
import clsx from 'clsx';
import ObjectHelper from 'js-object-helper';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.scss';
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const initialState = {
  available: {},
  completed: {},
};
const StateContext = React.createContext(initialState);
const DispatchStateContext = React.createContext(undefined);

/**
 * Global State provider & hooks
 */
export const ProgressProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const { type, group, id } = action;
      switch (type) {
        case 'add':
          ObjectHelper.setProp(state.available, `${group}.${id}`, 1)
          break;
        case 'check':
          ObjectHelper.setProp(state.completed, `${group}.${id}`, 1)
          break;
        case 'uncheck':
          delete state.completed[group][id];
          break;
      }
      return Object.assign({}, state);
    },
    initialState
  );
  return (
    <StateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </StateContext.Provider>
  );
};

export const useProgressState = () => [
  React.useContext(StateContext),
  React.useContext(DispatchStateContext)
];

export const useGroupFromLocation = () => {
  const location = useLocation();
  return location.pathname.split('/').filter(part => part !== "")[0];
}

export default ({ group = 'auto' }) => {
  if (group === "auto") {
    group = useGroupFromLocation();
  }

  const [state] = useProgressState();
  const ag = Object.keys(state.available[group] || {}).length;
  const cg = Object.keys(state.completed[group] || {}).length;
  const percent = Math.floor(cg * 100 / ag);

  return (
    <div className={styles.progress}>
      <ProgressBar percent={percent}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={clsx(styles.indexedStep, { [styles.accomplished]: accomplished })}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={clsx(styles.indexedStep, { [styles.accomplished]: accomplished })}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={clsx(styles.indexedStep, { [styles.accomplished]: accomplished })}
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  )
}