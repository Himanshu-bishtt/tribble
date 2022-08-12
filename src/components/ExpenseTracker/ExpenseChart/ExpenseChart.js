import React from 'react';

import styles from './ExpenseChart.module.scss';

import Chart from './Chart';

const ExpenseChart = props => {
  let maxValue = 0;
  let minValue = props.transactions[0].amount;

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  props.transactions.forEach(transaction => {
    const transactionMonth = new Date(transaction.date).getMonth();

    chartDataPoints[transactionMonth].value += +transaction.amount;

    if (+transaction.amount > maxValue) {
      maxValue = transaction.amount;
    }

    if (+transaction.amount < minValue) {
      minValue = transaction.amount;
    }
  });

  return (
    <div className={styles['expense-chart']}>
      <div className={styles['expense-chart__heading']}>Expense Chart</div>
      <Chart
        dataPoints={chartDataPoints}
        maxValue={maxValue}
        minValue={minValue}
      />
    </div>
  );
};

export default ExpenseChart;
