import React, { useContext } from 'react';
import Chart from './Chart';
import ExpenseContext from '../../../store/ExpenseContext';

import styles from './ExpenseChart.module.scss';

const ExpenseChart = () => {
  const expenseCtx = useContext(ExpenseContext);

  console.log(expenseCtx);

  let maxValue = 0;
  // let minValue = props.transactions[0].amount;
  let minValue = 0;

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

  expenseCtx.transactions.forEach(transaction => {
    const transactionMonth = new Date(transaction.date).getMonth();

    chartDataPoints[transactionMonth].value += +transaction.amount;

    if (+transaction.amount > maxValue) {
      maxValue = transaction.amount;
    }

    if (+transaction.amount < minValue) {
      minValue = transaction.amount;
    }
  });

  const expenseYearHandler = year => {
    console.log(year);
  };

  return (
    <div className={styles['expense-chart']}>
      <div className={styles['expense-chart__heading']}>Expense Chart</div>
      <Chart
        dataPoints={chartDataPoints}
        maxValue={maxValue}
        minValue={minValue}
        onChange={expenseYearHandler}
      />
    </div>
  );
};

export default ExpenseChart;
