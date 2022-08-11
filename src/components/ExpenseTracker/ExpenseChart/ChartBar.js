import React from 'react';

import styles from './ChartBar.module.scss';

const ChartBar = props => {
  let barFillPercent = '0%';

  if (props.maxValue > 0) {
    barFillPercent = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }

  return (
    <div className={styles['chart-bar']}>
      <div className={styles['chart-bar__inner']}>
        <div
          className={styles['chart-bar__fill']}
          style={{ height: barFillPercent }}
        ></div>
      </div>
      {props.value !== 0 && (
        <div className={styles['chart-bar__value']}>${props.value}</div>
      )}
      <div className={styles['chart-bar__label']}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
