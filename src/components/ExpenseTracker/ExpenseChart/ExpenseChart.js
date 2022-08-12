import React, { useContext, useState } from 'react';
import Chart from './Chart';
import ExpenseContext from '../../../store/ExpenseContext';

import styles from './ExpenseChart.module.scss';

const ExpenseChart = () => {
  const [expenseYear, setExpenseYear] = useState(2022);

  const expenseCtx = useContext(ExpenseContext);

  const expenseYearHandler = year => {
    setExpenseYear(year);
  };

  const selectedYearExpenses = expenseCtx.transactions.filter(
    transaction => new Date(transaction.date).getFullYear() === expenseYear
  );

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

  let maxValue = 0;
  let minValue = 0;

  selectedYearExpenses.forEach((transaction, index) => {
    /**
     * Setting inital value for minValue variable
     */
    if (index === 0) {
      minValue = +transaction.amount;
    }

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
        onChange={expenseYearHandler}
        expenseYear={expenseYear}
      />
    </div>
  );
};

export default ExpenseChart;
