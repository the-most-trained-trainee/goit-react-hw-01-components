import PropTypes from 'prop-types';
import StyledTable from './TransactionHistory.styled';
import Transaction, { transactionPropTypes } from './Transaction';

const TransactionHistory = props => {
  const { items } = props;
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(transactionPropTypes)).isRequired,
};

export default TransactionHistory;
