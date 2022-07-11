import React from 'react';
import Card from '../../UI/Card';

import styles from './ExpenseOverview.module.scss';

function ExpenseOverview() {
  return (
    <div className={styles['expense__overview']}>
      <Card>
        <h1>Total Balance</h1>
        <h3>$25,000</h3>
      </Card>
      <Card>
        <h1>Total Balance</h1>
        <h3>$25,000</h3>
      </Card>
      <Card>
        <h1>Total Balance</h1>
        <h3>$25,000</h3>
      </Card>
    </div>
  );
}

export default ExpenseOverview;
