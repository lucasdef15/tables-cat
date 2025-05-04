import React from 'react';
import '../../styles/INSS.css';
import StripeINSS from './StripeINSS';
import TablesINSS from './TablesINSS';
import List from './List';
import FinalStripe from './FinalStripe';

const INSS = () => {
  return (
    <div style={{ position: 'relative' }}>
      <StripeINSS />
      <TablesINSS />
      <List />
      <FinalStripe />
    </div>
  );
};

export default INSS;
