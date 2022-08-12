import React from 'react';
import ChartBar from './ChartBar';

import styles from './Chart.module.scss';

const Chart = props => {
  return (
    <div className={styles['chart']}>
      <div className={styles['chart__info']}>
        <div>
          <p>{`Max value: $${props.maxValue}`}</p>
          <p>{`Min value: $${props.minValue}`}</p>
        </div>

        <select>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>
      </div>
      <div className={styles['chart__items']}>
        {props.dataPoints.map(dataPoint => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={props.maxValue}
            label={dataPoint.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
