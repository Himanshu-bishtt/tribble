import React from 'react';
import ChartBar from './ChartBar';

import styles from './Chart.module.scss';

const Chart = props => {
  return (
    <div className={styles['chart']}>
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={props.maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
