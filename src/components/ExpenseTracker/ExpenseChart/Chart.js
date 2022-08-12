import React from 'react';
import ChartBar from './ChartBar';

import styles from './Chart.module.scss';

const Chart = props => {
  const expenseYearChangeHandler = event => {
    props.onChange(+event.target.value);
  };

  return (
    <div className={styles['chart']}>
      <div className={styles['chart__info']}>
        <div>
          <p>{`Max value: $${props.maxValue}`}</p>
          <p>{`Min value: $${props.minValue}`}</p>
        </div>

        <select onChange={expenseYearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
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
